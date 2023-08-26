import { defineStore } from "pinia";

import { db } from '@/services/firebase'

import { collection, addDoc, getDocs, query } from 'firebase/firestore'

export const useBoardStore = defineStore({
  id: 'board',
  state: () => ({
    board: []
  }),
  getters: {
    getBoard(state) {
      return state.board
    }
  },
  actions: {
    async createBoard({ name, columns }) {
      try {
        const newCollection = collection(db, 'boards')
        const docReference = await addDoc(newCollection, {
          name,
          columns,
        })
        return docReference
      } catch (e) {
        console.error(e)
      }
    },
    async fetchBoards() {
      try {
        const boardsCollection = collection(db, 'boards')
        const q = query(boardsCollection, /* where */)
        const documents = await getDocs(q)

        console.log(documents)

        documents.forEach(doc => {
          console.log(doc.id, doc.data())
        })
      } catch (e) {
        console.log(e)
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