<template>
    <div class="register mx-auto flex w-full max-w-sm flex-col gap-6 mt-48">
        <div class="flex flex-col items-center">
            <h1 class="text-3xl font-semibold">Sign Up</h1>
            <p class="text-sm">Sign up to create your account</p>
        </div>
        <div class="form-group">
            <div class="form-field">
                <label class="form-label">Full Name</label>
                <div class="form-control">
                    <input placeholder="Type here" type="last Name" class="input max-w-full" />
                </div>
            </div>
            <div class="form-field">
                <label class="form-label">Email address</label>

                <input placeholder="Type here" type="email" class="input max-w-full" />
                <label class="form-label">
                    <span class="form-label-alt">Please enter a valid email.</span>
                </label>
            </div>
            <div class="form-field">
                <label class="form-label">Password</label>
                <div class="form-control">
                    <input placeholder="Type here" type="password" class="input max-w-full" />
                </div>
            </div>
            <div class="form-field">
                <div class="form-control justify-between">
                    <div class="flex gap-2">
                        <input type="checkbox" class="checkbox" />
                        <a href="#">Remember me</a>
                    </div>
                </div>
            </div>
            <div class="form-field pt-5">
                <div class="form-control justify-between">
                    <button class="btn w-full btn-primary">Log out</button>
                </div>
            </div>

            <div class="form-field">
                <div class="form-control justify-center">
                    <form action="http://localhost:5173/login">
                    Do you have an account yet? <button class= "sign" type="submit">Sign in.</button>
                    </form>
                </div>
            </div>
	    </div>
    </div>

</template>
  
  
<script>
    
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;


</style>