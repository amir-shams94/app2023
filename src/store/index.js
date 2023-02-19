import { Notify } from 'quasar'
import { defineStore } from 'pinia'
import {postSession} from '../axios/session.js'
import { getMeApi } from '../axios/me.js'

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      user: null,
      isLogin: false,
      me:null
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  getters: {},
  actions: {
    async login(email, password) {
      try {
        const res = await postSession(email, password, { credentials:'include' })
        
    
        // document.cookie = res.headers['set-cookie'].split(';')
        console.log(res);
        this.user = res.data
        this.isLogin = true
      } catch (error) {
        Notify.create({
          type: 'negative',
          message: `${error}`,
          progress: true,
        }) 
       
      }
    },
     async getMe() {
      try {
        const res = await getMeApi({   withCredentials: true})

        this.me = res.data
        console.log(res);
      } catch (error) {
        console.log(error);
        Notify.create({
          type: 'negative',
          message: `${error.response}`,
          progress: true,
        }) 
       
      }
    },
  },
})
