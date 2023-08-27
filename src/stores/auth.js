import { defineStore } from "pinia";

import { auth } from '@/services/firebase'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () =>({
    user: null,
    loading: false
  }),
  getters: {
    getLoading(state) {
      return state.loading
    },
    getUser(state) {
      return state.user
    },
    isLoggedIn(state) {
      return Boolean(state.user)
    }
  },
  actions: {
    async register(email, password) {
      try {
        this.loading = true
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        console.log(user)
        this.user = {
          email: user.email,
          uid: user.uid,
        }
      } catch (e) {
        if (e.code === 'auth/email-already-in-use') {
          console.log('El correo ya existe!')
        }
      }
    },
    async login(email, password) {
      // console.log('estoy en la acción login de la store auth')
      try {
        this.loading = true
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
        this.user = {
          email: user.email,
          uid: user.uid,
        }
        console.log(this.user)
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async logout() {
      // console.log('estoy en la acción logut de la store auth')
      try {
        await signOut(auth)
        this.user = null
      } catch (error) {
        console.error(error)
      }
    },
    async currentUser() {
      // https://firebase.google.com/docs/auth/web/manage-users
      return new Promise((resolve, reject) => {
        onAuthStateChanged(
          auth, user => {
            if (user) {
              this.user = {
                email: user.email,
                uid: user.uid,
              }
            } else {
              this.user = null
            }
            console.log('currentUser-store', {user})
            resolve(user)
          },
          e => reject(e)
        )
      })
    }
  }
})