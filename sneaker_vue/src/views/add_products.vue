<template>
    <section>
        <p>Name :</p>
        <div class="form-control">
            <input type="text" class="input max-w-full" v-model = "Name" />
        </div>
        <p>Categories :</p>
        <div class="form-control">
            <input type="text" class="input max-w-full" v-model = "Categories"/>
        </div>
        <p>Price :</p>
        <div class="form-control">
            <input type="text" class="input max-w-full" v-model = "Price"/>
        </div>
        <p>Description :</p>
        <div class="form-control">
            <input type="text" class="input max-w-full" v-model = "Description"/>
        </div>
        <form action="http://localhost:5173/admin"></form>
        <button class="btn w-full btn-primary" @click=" Submit ()"> Submit </button>
    </section>

</template>


<script>
export default {
    data (){
        return {
            Name: "",
            Categories: "",
            Description: "",
            Price: "",

        }
    },
    methods: {
        async Submit (){
            // console.log(this.Name,[this.Categories],this.Price,this.Description)
            const requestOptions = {
            method: 'POST',
            headers:{
                Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNDE5MDcsImV4cCI6MTcwMDI0NTUwNywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFubjQuazBuZGFAZ21haWwuY29tIn0.EgCuLyWwxRb3HmmQlsEgRthUJYkcptYWrSqi6JI4KVuReMZxM6K4vEQXpOaw57Kwuu2kCiGVYNXdkh-XwFcH6TYbg3j4e4Gssy1DYrXfd72kxQuNF4I4OAcTcRV4C8OsB3fgCTXAId9ITfPKETL2AwkkH5RbuIELXvJ_-nNY34VPuTcxfC_g0I6YZktaiAugNoqD7cAgjxws58N0fHGqELrM8IDhCc2vickpSRT9laTPbIW1t8m29STIui86CsYq28hZ6WjWlOOf1xxb8XzDSd3Rpx2ay_Ry_CzeEa3U1oDkX2n8fAwPFnUL9k4BLLdTTMm_Fb4Tzods3rfGr2pb_w',
                "Content-Type": "application/json"
            },
            body : JSON.stringify ({
                name: this.Name,
                categories: [this.Categories],
                price: parseFloat( this.Price),
                description: this.Description,
            })

        };
        await fetch ("http://localhost/api/products" , requestOptions)
          .then(()=> console.log("test"))
          document.location = "http://localhost:5173/admin"
        //   , location.reload()
          // setTimeout(() => {
          //   location.reload()
          // }, 10000)

        }
    }
}


</script>


<style>

</style>