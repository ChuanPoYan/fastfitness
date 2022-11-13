<template>
  <div class="loginpage">
    <form id="login" @submit.prevent="login">
      <h2 id="title">LOGIN</h2>
      <input type="email" placeholder="Email Address" v-model="email" />
      <br /><br />
      <input type="password" placeholder="Password" v-model="password" />
      <br /><br />
      <button class="button">Login</button>
      <p id="signup">
        Haven't signed up? <router-link to="/signup">Sign up</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
  },
};
</script>

<style>
#signup {
  font-size: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

input,
.placeholder {
  font-size: 1rem;
  padding: 0 1.2rem;
}

input {
  height: 3rem;
  width: 16rem;
  border: 2px solid black;
  border-radius: 1rem;
}

#title {
  text-align: center;
  background: rgba(255, 106, 40);
  color: white;
  font-size: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 20px;
  border-radius: 20px;
}

.loginpage {
  border-radius: 5px;
  width: 100%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
}

#login {
  text-align: center;
  padding-top: 40px;
}

.button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 1rem 3rem;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background: rgba(255, 106, 40);
  border-radius: 9px;
  border: none;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: auto;
  margin-right: auto;
}

.button:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
