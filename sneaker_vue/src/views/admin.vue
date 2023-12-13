<template>
  <section>
    <header>
      <nav class = "nav">
      <header class= "logo">
          <div class="search">
            <input placeholder="Search..." type="texte" class="input max-w-full" />
          </div>
      </header>
          <div class = "nav_gauche"> 
              <ul class = "liste_header">
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Categories</a></li>
                  <li><a href="#">Users</a></li>
                  <li><button class="btn w-full btn-primary" @click="products_add ()">Add</button></li>
              </ul>
          </div>
      </nav>
    </header>

    <section v-if="getStatus == 'done'"> 
      <table>
        <thead>
          <tr>
            <th>Products</th>
            <th>ID</th>
            <th>Categories</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <article v-for="products in getProducts.data ['hydra:member']" :key="products.id">
                <h1>
                    {{products.name}}
                </h1>
              </article>
            </td>
            <td>
              <article v-for="products in getProducts.data ['hydra:member']" :key="products.id">
                <h1>
                    {{products.id}}
                </h1>
              </article>
            </td>
            <td>
              <article v-for="products in getProducts.data ['hydra:member']" :key="products.product_category">
                <h1>
                    {{products.categories}}
                </h1>
              </article>
            </td>
            <td>
              <article v-for="products in getProducts.data ['hydra:member']" :key="products.product_category">
                <button @click="editItems(products.name,products.id,products.description,products.price,products.categories.toString ())">Edit</button>
                <txt>    /   </txt>
                <button @click="deleteItems(products.id)">Delete</button>
              </article>

            </td>
          </tr>
        </tbody>
      </table>

    </section>
    <section v-else> ...Loading</section>
  </section>
  
</template>


<script>
  import {mapActions, mapState } from "pinia";
  import {useProductsStore} from "../stores/counter";
  export default {
    data () {
        return {
            products: [],
        };
    },
   mounted () {
      this.fetchP;
    },
    computed: {
        ...mapActions (useProductsStore,["fetchP"]),
        ...mapState (useProductsStore,["getProducts", "getStatus"]),
    },
    methods: {
      async deleteItems(id) {
        const requestOptions = {
          method: 'DELETE',
          headers:{
            Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNDE5MDcsImV4cCI6MTcwMDI0NTUwNywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFubjQuazBuZGFAZ21haWwuY29tIn0.EgCuLyWwxRb3HmmQlsEgRthUJYkcptYWrSqi6JI4KVuReMZxM6K4vEQXpOaw57Kwuu2kCiGVYNXdkh-XwFcH6TYbg3j4e4Gssy1DYrXfd72kxQuNF4I4OAcTcRV4C8OsB3fgCTXAId9ITfPKETL2AwkkH5RbuIELXvJ_-nNY34VPuTcxfC_g0I6YZktaiAugNoqD7cAgjxws58N0fHGqELrM8IDhCc2vickpSRT9laTPbIW1t8m29STIui86CsYq28hZ6WjWlOOf1xxb8XzDSd3Rpx2ay_Ry_CzeEa3U1oDkX2n8fAwPFnUL9k4BLLdTTMm_Fb4Tzods3rfGr2pb_w'
          }
        };
        await fetch ("http://localhost/api/products/"+ id , requestOptions)
          .then(()=> this.fetchP), location.reload()
          // setTimeout(() => {
          //   location.reload()
          // }, 10000)
          
      },
      
      editItems (Name, Id, Description, Price, Categories) {
          this.$router.push({
            name: 'edit_products',
            params : {
              "name" : Name,
              "id" : Id,
              "description" : Description,
              "price" : Price,
              "categories" : Categories
            }
          })
      }


      // editItems(id) {
        
      // }
    }

  }

</script>




<style>

.liste_header{
  display: flex;
  justify-content: space-evenly;
}

li:hover{
  /* border-bottom: 2px solid black; */
  color: #0072F5;
}

.search {
  margin-left:18%;
  margin-bottom:5%;
  width: 80%;
  margin-top: 2%;
}

th {
  padding: 10px;
  background-color: #0072f5;
  color: white;

}

td {
  text-align: center;
}

h1 {
  padding: 10px;
  /* border-bottom: 2px solid #0072F5;
  width: 101%; */
}

table {
  width: 100%;
  margin-top: 5% ;
}

button {
  padding: 10px;
}


</style>