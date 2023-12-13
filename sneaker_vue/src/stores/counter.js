import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
axios.interceptors.request.use(config => {
  // Ajoute le token d'authentification à chaque requête sortante
  config.headers.Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAwNDA1NDgsImV4cCI6MTcwMDA0NDE0OCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImxhdXJlZW4uYmFodWF1dEBlcGl0ZWNoLmRpZ2l0YWwifQ.YQQnaNzuZAMpJLBepJBpILDyOmUGdMEQap1LriXUKdBag1SFDfKeZkatmmxFFfLeCkbTsVgnvL615ioIRd8QELxaI8_GsQOtTcjgcjJpJ8PpyGWd8_0KcRx6wvhTJVwhkoI_vXdwsbj-07GR_s-yCn7nauoGarzZ5_TlGAKTlWKKgFeRBdxiu4jT01xdrcATNZFKrpdz16DRuKB5fWxNc09TIrK3x4F_PKB8etXUodlKnCmVcPCWCMurhASGiS-YGQ5sVxbuwr2qVtlp5xKwiHJcpcSmmmzu_DT-a4wuaxzSqy58wm9umfr4lwcGXU8ADzwLr4zUzblsqNBU0EfABw';
  return config;
});

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
      this.products = await axios ({url: "http://localhost/api/products", method: "get"})
      this.status = "done"
    }
  }
})

