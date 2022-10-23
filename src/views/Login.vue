<template>
  <div>
    <form id="login" @submit.prevent="login">
      <h2>Login Page</h2>
      <input type="email" placeholder="Email Address" v-model="email" />
      <br /><br />
      <input type="password" placeholder="Password" v-model="password" />
      <br /><br />
      <button>Login</button>
      <p>Haven't signed up? Sign up.</p>
    </form>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { default as error_dict } from "../data/error.js";
import firebaseApp from "@/main";
import router from "../router/index.js";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user.email;
          console.log("Successfully logged in!", user);
          router.push("/");
        })
        .catch((error) => {
          if (error.code in error_dict.data()) {
            alert(error_dict.data()[error.code]);
          } else {
            alert(error.message);
          }
        });
    },
    logout() {
      const auth = getAuth(firebaseApp);
      signOut(auth)
        .then(() => {
            console.log("Successfully logged out!");
        })
        .catch((error) => {
            alert(error.message);
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
