import { defineStore } from "pinia";

import { db } from '@/services/firebase'

import { collection, addDoc, getDocs, query, where, doc, updateDoc } from 'firebase/firestore'

import { useAuthStore } from '../stores/auth'

export const useBoardStore = defineStore({
  id: 'board',
  state: () => ({
    loading: false,
    boards: [],
    tasks: null
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
    getTasksBoard(state) {
      return (boardId) => {
        const boardFound = state.boards.find(board => board.id === boardId)
        return boardFound.tasks
      }
    },
    getCardsBoardByStatus(state) {
      return (boardId, taskStatus) => {
        const boardFound = state.boards.find(board => board.id === boardId)
        console.log('boardFound', boardFound)
        const tasksFound = boardFound.tasks ? boardFound.tasks : []
        console.log('getCardsBoardByStatus', boardFound)
        state.tasks = tasksFound
        const tasksByStatus = tasksFound.filter(task => task.status === taskStatus)
        return tasksByStatus
      }
    },
    isLoading(state) {
      return state.loading
    }
  },
  actions: {
    async deleteTask (id) {
      /* TODO: Eliminar la tarea en el documento de firebase usando el id 12:47 */
    },
    async updateStatusTask({
      docId,
      taskId,
      newStatus
    }) {
      const docRef = doc(db, 'boards', docId)

      // Validar si existe el documente
      const oldTasks = this.getTasksBoard(docId)

      const newTasks = oldTasks.map(task => {
        if (task.id === taskId) {
          return { ...task, status: newStatus }
        }
        return task
      })

      const res = await updateDoc(docRef, {
        tasks: newTasks
      })

      console.log('res', res)

      return res
    },
    async createTask({
      docId, title, description, status, subtasks
    }) {
      const oldTasks = this.tasks
      console.log({ oldTasks})
      const newDoc = doc(db, 'boards', docId)
      const docReference = await updateDoc(
        newDoc,
        {
          tasks: [
            ...oldTasks,
            {
              id: crypto.randomUUID(),
              title,
              description,
              status,
              subtasks
            }
          ]
        }
      )
      console.log({ docReference})
      return docReference
    },
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
        this.boards = []
        const boardsCollection = collection(db, 'boards')
        const q = query(
          boardsCollection,
          where("userId", "==", useAuth.user.uid)
        )
        const documents = await getDocs(q)

        console.log(documents)
        
        documents.forEach(doc => {
          console.log(doc.id, doc.data()) // --> tasks
          this.boards.push({ id: doc.id, ...doc.data() })
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