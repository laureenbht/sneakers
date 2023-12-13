<template>
    <button class="btn w-full btn-primary" @click=" Client ()"> Client</button>
    <button class="btn w-full btn-primary" @click=" Admin ()"> Admin </button>
</template>


<script>
export default {
    data () {
        return {

        };
    },

    methods : {
        Client () {
          document.location = "http://localhost:5173/"
        },
        Admin () {
          document.location = "http://localhost:5173/admin"
        },
    }
}


</script>

<style>

button {
    margin-top: 10%;
}

</style>