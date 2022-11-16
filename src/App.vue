<template>
  <div>
    <NavBarLoggedIn v-if="this.loggedIn == true" />
    <NavBarLoggedOut v-if="this.loggedIn == false" />
    <router-view />
  </div>
</template>

<script>
import firebaseApp from "./main.js";
import { getAuth } from "firebase/auth";

import NavBarLoggedOut from "./components/NavBarLoggedOut.vue";
import NavBarLoggedIn from "./components/NavBarLoggedIn.vue";

export default {
  name: "App",
  components: {
    NavBarLoggedOut,
    NavBarLoggedIn,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  watch: {
    $route() {
      const auth = getAuth(firebaseApp);
      var email = auth.currentUser;
      if (email) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-top: 30px;
}
</style>