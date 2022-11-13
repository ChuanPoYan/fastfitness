<template>
  <body>
    <div class="bodyalignment">
      <br /><br /><br /><br /><br />
      <div class="main">
        <!-- card for user information -->
        <div class="user">
          <h3> USER INFORMATION </h3>
          <div class="card3">
            <img src="../assets/person2.png" alt="Icon" class="icon" />
            <h4> NAME: {{ name }} </h4>
            <h4> NUMBER: {{ address }} </h4>
            <h4> ADDRESS: {{ phone }} </h4>
          </div>
        </div>
        <!-- card for current membership plan -->
        <div class="Currentmembershipplan">
          <h3> CURRENT PACKAGE PLAN </h3>
          <div class="card">
            <br /><br />
            <h2>Intermediate Package</h2>
            <hr />
            <p>Our package gives you access to 60 credits</p>
            <p> NOTE: Package has 1 MONTH validity</p>
          </div>
        </div>
        <!-- card for credits -->
        <div class="Credits">
          <h3> CREDITS </h3>
          <div class="card2">
            <h1 style="font-size: 60px">{{ credit }}</h1>
            <hr />
            <h3>CREDITS REMAINING</h3>
            <p>Valid till 1st October</p>
            <button class="topupbutton">Top Up Credits</button>
          </div>
        </div>
      </div>
    </div>
  </body>
  <div class="sidenav" style="width: 15%">
    <router-link to="/profile">Profile</router-link>
    <router-link to="/profile/account">Account</router-link>
    <router-link to="/profile/membership">Membership</router-link>
    <router-view />
  </div>
</template>

<script>
import firebaseApp from "../main.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  data() {
    return {
      name: null,
      number: null,
      address: null,
      credit: null, 
    };
  },
  created: async function () {
    const auth = getAuth(firebaseApp);
    this.email = auth.currentUser.email;
    const userRef = doc(db, "users", this.email);
    getDoc(userRef).then((userDoc) => {
      if (userDoc.exists()) {
        this.name = userDoc.data()["First_Name"];
        this.phone = userDoc.data()["Phone_Number"];
        this.address = userDoc.data()["Address"];
        this.credit = userDoc.data()["Credits"];
      }
    });
  },
};
</script>

<style scoped>
.main {
  /* display: grid;
  grid-template-columns:  1fr 1fr; */
  /* justify-content: space-around; */
  /* align-content: center; */
  /* column-gap:200px; */
  /* background-color: grey; */
  /* margin-left: 200px; */
  display: flex;
  justify-content: space-evenly;
  width: 85%;
  /* background-color: grey; */
}
.sidenav {
  margin-top: 95px !important;
  height: 100%;
  /* width: 300px; Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: rgba(241, 241, 241, 1); /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 40px;
  font-family: "Avenir", serif;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* transition: 0.3s; */
  border-radius: 5px; /* 5px rounded corners */
  width: 350px;
  height: 320px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  float: center;
  text-align: center;
  /* padding-top: 20px; */
  /* padding-left: 70px; */
}

.card2 {
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px; /* 5px rounded corners */
  width: 350px;
  height: 300px;
  padding-top: 20px;
  background-color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.card3 {
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px; /* 5px rounded corners */
  width: 350px;
  height: 300px;
  padding-top: 20px;
  background-color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

/* credits button */
.topupbutton {
  font-family: "Avenir", serif;
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
.topupbutton:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
hr {
  display: block;
  border: none;
  height: 3px;
  background-color: rgba(255, 106, 40);
}
h3 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

img {
 max-width: 40%;
 max-height: 40%;
}
</style>
