import { defineStore } from "pinia";

import { auth } from '@/services/firebase'

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () =>({
    user: null,
    isAuth: false,
    loading: false
  }),
  getters: {
    getLoading(state) {
      return state.loading
    },
    getUser(state) {
      return state.user
    },
    getIsAuth(state) {
      return state.isAuth
    }
  },
  actions: {
    async login(email, password) {
      // console.log('estoy en la acción login de la store auth')
      try {
        this.loading = true
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
        this.user = user
        this.isAuth = true
        console.log(this.loading)
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
        console.log(this.loading)
      }
    },
    async logout() {
      // console.log('estoy en la acción logut de la store auth')
      try {
        await signOut(auth)
      } catch (error) {
        console.error(error)
      }
    },
    async currentUser() {
      // https://firebase.google.com/docs/auth/web/manage-users
      return new Promise((resolve, reject) => {
        onAuthStateChanged(
          auth,
          user => {
            if (user) {
              this.user = {
                email: user.email,
                uid: user.uid,
              }
            } else {
              this.user = null
            }
            console.log('currentUser-store', { user })
            resolve(user)
          },
          error => reject(error)
        )
      })
    }
  }
})