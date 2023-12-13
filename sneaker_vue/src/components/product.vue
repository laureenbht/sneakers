<template>
            <section> 
                <img class = "img" src="./Rectangle.jpg" alt="image de chargement">
                <div class=" texte">
                    <p class="nom">{{products.name}}</p>
                    <p class="type">{{products.id}}</p>
                    <img class = "stars" src="./Four_stars.png" alt="Four stars opinion">
                </div>
                <p class="prix">{{ products.price }}</p>
            </section>

</template>


<script>
export default {
    props: {
      products: {
        type: Object,
        required: true
      }
    }
  }

</script>


<style>

/* PRODUCT */


.texte{
  float: left;
}

.prix{
  float:right;
}

.stars {
  width:50%;
}

.img{
  width:100%;
  }
</style>