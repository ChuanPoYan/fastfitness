<template>
  <div style="margin-left:15%">
  <div class="AddEmployeeForm">
    <h1>Personal information</h1>

    <label for="name"> Name: </label>
    <input type="text" id="name" placeholder="Name" v-model="name" />
    <br /><br />

    <label for="Phone"> Phone Number: </label>
    <input type="text" id="number" placeholder="Number" v-model="number" />
    <br /><br />

    <label for="Address"> Address: </label>
    <input type="text" id="address" placeholder="Address" v-model="address" />
    <br /><br />
    <v-layout row>
      <v-flex md6 offset-sm3>
        <div>
          <button class="button" @click="saveChanges">Save Changes</button>
        </div>
      </v-flex>
    </v-layout>
  </div>
</div>

  <div class="sidenav" style="width:15%">
    <router-link to="/profile">Profile</router-link>
    <router-link to="/profile/account">Account</router-link>
    <router-link to="/profile/membership">Membership</router-link>
    <router-view />
    <!-- <a class ="active" href="#personalinfo">Personal information</a>
  <a href="#account">Account</a>
  <a href="#membership">Membership</a>
  <a href="#paymenthistory">Payment History</a> -->
  </div>
  <br /><br />
</template>

<script>
import firebaseApp from "../main.js";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  name: "SaveProfileChanges",
  data() {
    return {
      name: "",
      number: "",
      address: "",
    };
  },
  methods: {
    saveChanges() {
      const auth = getAuth(firebaseApp);
      this.email = auth.currentUser.email;
      const userRef = doc(db, "users", this.email);
      updateDoc(userRef, {
        First_Name: this.name,
        Phone_Number: this.number,
        Address: this.address,
      }).catch((error) => {
        console.error("Error Saving Information", error);
      });
    },
  },
};
</script>

<style>
.header {
  height: 50px;
  background-color: grey;
  text-align: center;
  font-size: 17px;
}
#desc {
  height: 50px;
  background-color: none;
  text-align: center;
  font-size: 16px;
}
.AddEmployeeForm {
  text-align: left;
  font-size: 20px;
  width: 382px;
  overflow: hidden;
  margin: auto;
  padding: 100px;
  background: #ffffff;
  border-radius: 15px;
  font-family: 'Avenir',serif;

}

/* The sidebar menu */
.sidenav {
  margin-top: 95px !important;
  height: 100%;
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: rgba(241, 241, 241, 1); /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 40px;
  font-family: 'Avenir',serif;

}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
  
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: rgba(255, 106, 40);
}
.active {
  background-color: rgba(255, 106, 40);
  color: white;
}
/* Style page content */
.main {
  margin-left: 200px; /* Same as the width of the sidebar */
  padding: 0px 10px;
  font-family: Arial, Helvetica, sans-serif;
}
.input-contain {
  position: relative;
}
input {
  height: 5rem;
  width: 20rem;
  border: 2px solid black;
  border-radius: 1rem;
}
input:focus {
  outline: none;
  border-color: rgba(255, 106, 40);
}

input,
.placeholder {
  font-size: 1.4rem;
  padding: 0 1.2rem;
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
}
.button:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
>
