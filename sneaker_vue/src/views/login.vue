<template>
    <div class="mx-auto flex w-full max-w-sm flex-col gap-6 mt-48">

        <header>
            <div class="flex flex-col items-center">
                <h1 class="text-3xl font-semibold">Sign In</h1>
                <p class="text-sm">Sign in to access your account</p>
            </div>
        </header>

        <div class="form-group">
            <div class="form-field">
                <label class="form-label">Email address</label>

                <input placeholder="Type here" type="email" class="input max-w-full" v-model="Email"/>
                <label class="form-label">
                    <span class="form-label-alt">Please enter a valid email.</span>
                </label>
            </div>
            <div class="form-field">
                <label class="form-label">Password</label>
                <div class="form-control">
                    <input placeholder="Type here" type="password" class="input max-w-full" v-model= "Password" />
                </div>
            </div>
            <div class="form-field">
                <div class="form-control justify-between">
                    <div class="flex gap-2">
                        <input type="checkbox" class="checkbox" />
                        <a href="#">Remember me</a>
                    </div>
                    <label class="form-label">
                        <form action="http://localhost:5173/login">
                        <button class = "forgot" type="submit">Forgot your password?</button>
                        </form>
                    </label>
                </div>
            </div>
            <div class="form-field pt-5">
                <div class="form-control justify-between">
                    <button class="btn w-full btn-primary" @click="login ()">Log in</button>
                </div>
            </div>

            <div class="form-field">
                <div class="form-control justify-center">
                    <form action="http://localhost:5173/register">
                        Don't have an account yet? <button class = "sign" type="submit">Sign up.</button>
                    </form>
                </div>
            </div>
	    </div>
    </div>

</template>
  
  
<script>
export default {
    data (){
        return {
            Email: "",
            Password: "",
        }
    },
    methods: {
        async login (Email,Password){
            const requestOptions = {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body : JSON.stringify ({
                email: this.Email,
                password: this.Password,
            })

        };
        await fetch ("http://localhost/authentication_token" , requestOptions)
          .then(()=> document.location = "http://localhost:5173/welcome")
        //   , location.reload()
          // setTimeout(() => {
          //   location.reload()
          // }, 10000)

        }
    }
}

</script>

<style>

@tailwind base;
@tailwind components;
@tailwind utilities;

.forgot {
    color: blue;
    text-decoration: underline;
}
.sign {
    color: blue;
    text-decoration: underline;
}
</style>