import { defineStore } from "pinia";

import { db } from '@/services/firebase'

import { collection, addDoc } from 'firebase/firestore'

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