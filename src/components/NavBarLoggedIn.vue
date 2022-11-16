<template>
  <!-- navigation bar when person is logged IN: Home search booking profile logout-->
  <nav id="nav">
    <ul>
      <li class="username">{{ this.name }}</li>
      <li class="logout" @click="logout">Logout</li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/booking">Booking</router-link></li>
      <li><router-link to="/search">Search</router-link></li>
      <li><router-link to="/">Home</router-link></li>
      <img
        src="../assets/ff.png"
        style="
          float: left;
          width: 150px;
          height: auto;
          margin: 10px 10px 10px 30px;
        "
        alt="poyan"
      />
    </ul>
  </nav>
  <div>
    <SavedModalLogout v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import firebaseApp from "../main.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

import SavedModalLogout from "@/components/SavedModalLogout.vue";

export default {
  components: {
    SavedModalLogout,
  },
  data() {
    return {
      showModal: false,
      name: null,
      email: null,
    };
  },
  created: async function () {
    const db = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);
    this.email = auth.currentUser.email;
    const usersDocRef = doc(db, "users", this.email);
    getDoc(usersDocRef).then((userDoc) => {
      if (userDoc.exists()) {
        this.name = userDoc.data()["First_Name"];
      }
    });
  },
  methods: {
    logout() {
      const auth = getAuth(firebaseApp);
      signOut(auth)
        .then(() => {
          this.showModal = true;
          console.log("Successfully logged out!");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style scoped>
.username {
  padding: 2px 25px;
  background-color: #ff6a28;
  color: white;
  border-radius: 50px;
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 2.5em;
  margin-top: 1em;
  margin-left: 0.5em;
  font-size: 18px;
  font-weight: 400;
}

.logout {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 120%;
  margin: 7px;
}

ul {
  font-family: Arial, Helvetica, sans-serif;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 10%;
  border-bottom: 2px solid grey;
  line-height: 50px;
}

li {
  float: right;
}

li:hover {
  color: #ff6a28;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 120%;
  margin: 7px;
}

li a:hover {
  color: #ff6a28;
}
</style>
