<template>
  <div class="grid" v-if="getProducts.data && getProducts.data['hydra:member']" >
  <section>
    <p class="filter_by">FILTER BY</p>   
      <select class="filter" name="by" >
        <option value="">Collection</option>
        <option value="Summer">Summer</option>
        <option value="Winter">Winter</option>
        <option value="Autumn">Autumn</option>
        <option value="Spring">Spring</option>
      </select>  
      <select class="filter" name="by" >
        <option value="">Color</option>
        <option value="Red">Red</option>
        <option value="Yellow">Yellow</option>
        <option value="Blue">Blue</option>
        <option value="Purple">Purple</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
      </select>                         
      <select class="filter" name="by" >
        <option value="">Category</option>
        <option value="Outdoor">Outdoor</option>
        <option value="D.I.Y">D.I.Y</option>
      </select> 
        <div class="range_price">                
          <p class="price_range">Price Range</p>
        <div class="range-slider">
            <input type= "range" class="min-price" value="0" min="0" max="10000" step="1">
            <input type= "range" class="max-price" value="10000" min="0" max="10000" step="1">
            <div class="price-content">
              <p class="min-value">$0</p>
              <p class="max-value">$10,000+</p>
            </div>
        </div>
     </div>
  </section>
  <section>
    <div>
    <Product v-for="products in getProducts.data['hydra:member']" :products='products'/>
  </div>
  </section>
</div>
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

/* FILTRE */

.filter{
  border: 0px;
  outline: 0; /* enlève la bordure quand on clique sur la box*/
  width: 100%;
  font-size: 20px;
  border-bottom: 2px solid #e8e8e8;
  padding-bottom: 10px;
  margin-bottom: 40px;
}

.filter_by{
  margin-bottom: 50px;
  margin-top: 0;
}


/* SLIDER BAR */

.price_range{
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 40px;
}


.price-content {
  display: flex;
  justify-content: space-between;
  width: 100%;

}

.range-slider {
  width: 100%;
  position: relative;
  margin: 15px 0 30px 0;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  position: absolute;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: #000;
  background-color: white;
  background-image: url(img/icons_sprite.svg);
  cursor: pointer;
  margin-top: -5px;
  position: relative;
  z-index: 1;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  background: #e8e8e8;
  border-radius: 3px;
  border: none;
}


.input {
  width: 200%;
}

/* GRID */

.grid {
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(300px,1fr));
  gap: 50px;
}

</style>