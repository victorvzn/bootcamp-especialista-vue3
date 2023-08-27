import { defineStore } from "pinia";

import { db } from '@/services/firebase'

import { collection, addDoc, getDocs, query, where, collectionGroup, doc, updateDoc, setDoc } from 'firebase/firestore'

import { useAuthStore } from '../stores/auth'

export const useBoardStore = defineStore({
  id: 'board',
  state: () => ({
    loading: false,
    boards: [],
    board: null,
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
    getCardsBoardByStatus(state) {
      return (boardId, taskStatus) => {
        const boardFound = state.boards.find(board => board.id === boardId)
        const tasksFound = boardFound.tasks ? boardFound.tasks : []
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
    async createTask({ docId, title, description, status }) {
      try {
        const oldTasks = this.tasks
        console.log(docId, title, description, status)
        // const useAuth = useAuthStore()
        const newDoc = doc(db, 'boards', docId)
        const docReference = await updateDoc(newDoc, {
          tasks: [...oldTasks, {
            id: crypto.randomUUID(),
            title,
            description,
            status,
            subtasks: [
              {
                title: '',
                completed: false,
              }
            ],
          }]
        })
        return docReference
      } catch (e) {
        console.error(e)
      }
    },
    async createBoard({ name, columns }) {
      try {
        const useAuth = useAuthStore()
        const newCollection = collection(db, 'boards')
        const docReference = await addDoc(newCollection, {
          name,
          columns,
          userId: useAuth.user.uid,
          tasks: [
            {
              title: '',
              description: '',
              status: 'todo',
              subtasks: [
                {
                  title: '',
                  completed: '',
                }
              ],
            }
          ]
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
        const q = query(boardsCollection, where("userId", "==", useAuth.user.uid))
        const documents = await getDocs(q)

        // documents.doc((querySnapshot) => {
        //   querySnapshot.forEach((document) => {
        //     document.ref.collection("cards").get().then((querySnapshot2) => {
        //       console.log(querySnapshot2)
        //     });
        //   });
        // });

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