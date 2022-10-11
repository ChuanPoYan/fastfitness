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
import firebase from "firebase/app"
export default {
    name: "Login", 
    data() {
        return {
            email: "", 
            password: "", 
            initials: "",
        }
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    console.log(user)
                }, 
                (err) => {
                    alert(err)
                }
            );
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
