import { defineStore } from "pinia";

import { db } from '@/services/firebase'

import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'

import { useAuthStore } from '../stores/auth'

export const useBoardStore = defineStore({
  id: 'board',
  state: () => ({
    loading: false,
    boards: []
  }),
  getters: {
    getBoards(state) {
      console.log('111', state.boards)
      return state.boards
    },
    getColumnsBoardById: (state) => {
      return (boardId) => {
        const boardFound = state.boards.find(board => board.id === boardId)
        return boardFound?.columns
      }
    },
    getCardsBoardByStatus(state) {
      return (boardId, taskStatus) => {
        const boardFound = state.boards.find(board => board.id === boardId)
        const tasksFound = boardFound.tasks ? boardFound.tasks : []
        const tasksByStatus = tasksFound.filter(task => task.status === taskStatus)
        return tasksByStatus
      }
    },
    isLoading(state) {
      return state.loading
    }
  },
  actions: {
    async createBoard({ name, columns }) {
      try {
        const useAuth = useAuthStore()
        console.log('useAuth.user.uid', useAuth.user.uid)
        const newCollection = collection(db, 'boards')
        const docReference = await addDoc(newCollection, {
          name,
          columns,
          userId: useAuth.user.uid
        })
        return docReference
      } catch (e) {
        console.error(e)
      }
    },
    async fetchBoards() {
      try {
        const useAuth = useAuthStore()
        this.loading = true
        const boardsCollection = collection(db, 'boards')
        const q = query(
          boardsCollection,
          where("userId", "==", useAuth.user.uid)
        )
        const documents = await getDocs(q)

        console.log(documents)
        
        documents.forEach(doc => {
          console.log(doc.id, doc.data()) // --> tasks
          this.boards.push({ id: doc.id, ...doc.data(), tasks: [] })
        })

        // const newBoards = documents.docs.map(
        //   doc => ({ id: doc.id, ...doc.data() })
        // )

        this.loading = false
      } catch (e) {
        console.log(e)
      } finally {
        console.log('finally')
        this.loading = false
      }
    }
    // async createBoard(data) {
    //   try {
    //     const newCollection = collection(db, 'test')
    //     const docReference = await addDoc(newCollection, {
    //       name: 'Laptop',
    //       price: 3500,
    //       category: ['computo', 'dell']
    //     })
    //     console.log(docReference.id)
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }
  }
})