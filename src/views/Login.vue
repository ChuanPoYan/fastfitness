<template>
<div>
    <form id ="login" @submit.prevent="login">     
    <h2>Login Page</h2>     
    <input type="email" placeholder="Email Address" v-model="email" /> <br><br> 
    <input type="password" placeholder="Password" v-model="password" /> <br><br>
    <button @click="login"> Login </button>
    <p> Haven't signed up? Sign up. </p>
    </form> 
</div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { default as error_dict } from "../data/error.js"
import firebaseApp from '@/main';

export default {
    name: "Login", 
    data() {
        return {
            email: "", 
            password: "", 
        }
    },
    methods: {
        login() {
            signInWithEmailAndPassword(getAuth(firebaseApp), this.email, this.password)
            .then((userCredential) => {
                // Logged in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                if (error.code in error_dict.data()) {
                    alert(error_dict.data()[error.code])
                } else {
                    alert(error.message)
                }
            });
        },
    },
};
</script>

<style>
#login {
    text-align: center;
    padding-top: 80px;
}
</style>
