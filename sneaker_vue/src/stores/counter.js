import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductsStore = defineStore('products', {
  state : () => {
      return {
        products: [],
        status : "init"
      }
  },
  getters: {
    getProducts : state => state.products,
    getStatus: state => state.status
  },
  actions: {
    async fetchP (){
      this.status = "fetching"
      this.products = await axios ({url: "https://localhost:1337api/sneakers", method: "get"})
      this.status = "done"
    }
  }
})

