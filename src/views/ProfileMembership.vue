<template>
  <body>
  <br><br><br><br><br>
  <div class="main">
    <div class="sidebar">
      <h2>sidebar</h2>
    </div>
    <div class ="Credits">
      <!-- <h1>Credits</h1> -->
      <br><br><br><br>
      <div class = "card2">
        <h2>Starter Package</h2>
        <hr/>
        <br>
        <h1>50/month</h1>
        <br>
        <hr/>
        <h3>4-5 Classes</h3>
        <hr/>
        <p>Free Lanyard</p>
        <hr/>
        <p>bronze Member</p>
        <hr/>
        <p>Access to all classes</p>
        <div v-if="'Starter' == this.membership">Selected</div>
      <button class="creditsbutton" v-else @click="select('Starter')">20 Credits</button>
      </div> 
    </div>


    
      <div class ="Credits">
      <h1>Our Packages</h1>
      <div class = "card2">
        <h2>Intermediate Package</h2>
        <hr/>
        <br>
        <h1>90/month</h1>
        <br>
        <hr/>
        <h3>6-9 Classes</h3>
        <hr/>
        <p>Free Shirt</p>
        <hr/>
        <p>silver Member</p>
        <hr/>
        <p>Access to all classes</p>
        <div v-if="'Intermediate' == this.membership">Selected</div>
  <button class="creditsbutton" v-else @click="select('Intermediate')">35 Credits</button>
      </div> 
    </div>



    <div class ="intermediate">
      <br><br><br><br>
      <div class = "card2">
        <h2>Advanced Package</h2>
        <hr/>
        <br>
        <h1>120/month</h1>
        <br>
        <hr/>
        <h3>10-15 Classes</h3>
        <hr/>
        <p>Free Resistance Beads</p>
        <hr/>
        <p>Gold Member</p>
        <hr/>
        <p>Access to all classes</p>
        <div v-if="'Advance' == this.membership">Selected</div>
      <button class="creditsbutton" v-else @click="select('Advance')">60 Credits</button>
      </div> 
    </div>
  </div>
  </body>
<div class="sidenav">
    <router-link to="/profile">Profile</router-link>
    <router-link to="/profileAccount">Account</router-link>
    <router-link to="/profileHistory">Profile History</router-link>
    <router-link to="/profileMembership">Membership</router-link>
    <router-view/>  
  </div>
  </template>
<script>
import firebaseApp from "../main.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  name: "ProfileMembership",
  data() {
    return { membership: null };
  },
  created: async function () {
    const auth = getAuth(firebaseApp);
    this.email = auth.currentUser.email;
    const docRef = doc(db, "users", this.email);
    getDoc(docRef).then((result) => {
      if (result.exists()) {
        this.membership = result.data()["Membership"];
      }
    });
  },
  methods: {
    select(membership) {
      const auth = getAuth(firebaseApp);
      this.email = auth.currentUser.email;
      const userRef = doc(db, "users", this.email);
      updateDoc(userRef, {
        Membership: membership,
      })
        .then(() => {
          this.membership = membership;
        })
        .catch((error) => {
          console.error("Error Saving Information", error);
        });
    },
  },
};
</script>

<style>

.main{
    display: grid;
    grid-template-columns: 350px 1fr 1fr 1fr;
  }
  
  /* header{
    height:20%;
  }, */
  .sidenav {
    margin-top: 95px !important;
    height: 100%; 
    width: 300px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: rgba(241, 241, 241, 1); /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 100px;
  }
  .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: black;
    display: block;
  }
  .card2{
    background-color:rgba(241, 241, 241,1);
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px; /* 5px rounded corners */
    width: 400px;
    height: 500px;
    padding-top: 20px;
  }
  button{
      border: none;
      background-color: orange;
      width: 50%;
      margin: 10px auto;
      padding: 10px 30px;
      color: white;
      text-transform: uppercase;
  }
  hr{
      display: block;
      border: none;
      height: 3px;
      background-color: grey;
  }
  h1{
    text-align: center;
  }

  /* credits button */
.creditsbutton{ 
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 1rem 3rem;
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    background: #ff7b31;
    border-radius: 9px;
    border: none;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
}
.creditsbutton:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>
