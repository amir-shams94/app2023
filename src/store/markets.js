import { Notify } from 'quasar'
import { defineStore } from 'pinia'
import {getMarketsApi} from '@/axios/markets.js'
import axios from 'axios'
const baseUrl = 'https://trade.radin.io/api/v2/'
export const useMarketsStore = defineStore('markets', {
  state: () => {
    return {
      markets: [],
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  getters: {
    marketsRls: (state) => { 
      
      return state.markets.filter((mark)=>mark.quote_unit  === 'rls')
    },

    marketsUsdt: (state) => {
    return  state.markets.filter((market) => market.quote_unit === 'usdt')

    } 
  },
  actions: {
    async fetchMarkets() {
      try {
        const res = await getMarketsApi()
        // for (const key of res.data)
        // {
        //      this.markets = key
        // }
        this.markets=await res.data
    

          console.log( this.markets);
      } catch (error) {
        Notify.create({
          type: 'negative',
          message: `${error}`,
          progress: true,
        })
      }
    },
  },
})
