<template>
<div>   
  <form id="signup" @submit.prevent="signup">     
    <h2>SignUp Page</h2>     
    <input type="email" placeholder="Email address..." v-model="email" /> <br><br>     
    <input type="password" placeholder="Password..." v-model="password" /> <br><br>  
    <button @click="signup"> Sign Up </button>
    <p> Signed Up Already? Login </p>
  </form> 
</div>
</template>

<script>
import firebase from "firebase/app" 

export default {
    name: "SignUp", 
    data() {
        return {
            email: "", 
            password: "", 
            initials: "",
        }
    },
    methods: {
        signup() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    console.log(user)
                }, 
                (err) => {
                    alert(err)
                }
            )
        },
    },
};
</script>

<style>
#signup {
    text-align: center;
}
</style>

