<template>

  <section>
    <div class="search">
      <input placeholder="Search..." type="texte" class="input max-w-full" />
    </div>
    <div>
    <Product v-for="products in getProducts.data" :key='products.id'/>
  </div>
  </section>
</template>


<script>

import Product from '../components/product.vue'
import {mapActions, mapState } from "pinia";
import {useProductsStore} from "../stores/counter";

export default {
  components: {
    Product
  },
  computed: {
        ...mapActions (useProductsStore,["fetchP"]),
        ...mapState (useProductsStore,["getProducts", "getStatus"]),
  },
  mounted () {
    this.fetchP;
  },
}



</script>




<style>
.search {
  width: 80%;
  margin: 10%;
}
</style>