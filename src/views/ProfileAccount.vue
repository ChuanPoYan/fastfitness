<template>
  <body>
    <div class="bodyalignment">
      <div class="main">
        <!-- card for user information -->
        <div class="user">
          <h3> USER INFORMATION </h3>
          <div class="card3">
            <img src="../assets/person2.png" alt="Icon" class="icon" />
            <h4> NAME: {{ name }} </h4>
            <h4> NUMBER: {{ phone }} </h4>
            <h4> ADDRESS: {{ address }} </h4>
          </div>
        </div>
        <!-- card for current membership plan -->
        <div class="Currentmembershipplan">
          <h3> CURRENT PACKAGE PLAN </h3>
          <div class="card">
            <br/><br/>
            <h2>{{this.membership}} Package</h2>
            <hr/>
            <p>Our package gives you access to {{this.fixCredits}} credits</p>
            <p v-if="this.membership != 'No'"> NOTE: Package has 1 MONTH validity</p>
            <p v-if="this.membership == 'No'"> Do purchase a package from the Membership tab to enjoy our classes! </p>
          </div>
        </div>
        <!-- card for credits -->
        <div class="Credits">
          <h3> CREDITS </h3>
          <div class="card2">
            <br/><br/>
            <h2>{{ this.credit }}</h2>
            <hr/>
            <h3>CREDITS REMAINING</h3>
            <p>Valid till 1st {{ this.month }}</p>
            <button class="topupbutton" @click="topup()"> Top Up 10 Credits for $25 </button>
          </div>
        </div>
      </div>
    <!-- include Credits Topup Popup -temporary -->
    <div>
        <SavedModalTopup v-show="showModal" @close-modal="showModal = false" />
      </div>
    <!-- remove up till here -->
    </div>
  </body>
  <div class="sidenav" style="width: 15%">
    <router-link to="/profile">Personal Information</router-link>
    <router-link to="/profile/account">Account</router-link>
    <router-link to="/profile/membership">Membership</router-link>
    <router-view />
  </div>
</template>

<script>
import firebaseApp from "../main.js";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//topup popup
import SavedModalTopup from '@/components/SavedModalTopup.vue'

const db = getFirestore(firebaseApp);

export default {
  // topup popup
  components: {
      SavedModalTopup,
  },
  data() {
    return {
      name: null,
      number: null,
      address: null,
      credit: null, 
      membership: null,
      fixCredits: null,
      month: null,
      //topup popup
      showModal:false,
    };
  },
  created: async function () {
    const date = new Date();
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"];
    this.month = (date.getMonth() != 11) ? monthArray[date.getMonth() + 1] : monthArray[0];

    const auth = getAuth(firebaseApp);
    this.email = auth.currentUser.email;
    const userRef = doc(db, "users", this.email);
    await getDoc(userRef).then((userDoc) => {
      if (userDoc.exists()) {
        this.name = userDoc.data()["First_Name"];
        this.phone = userDoc.data()["Phone_Number"];
        this.address = userDoc.data()["Address"];
        this.credit = userDoc.data()["Credits"];
        this.membership = userDoc.data()["Membership"];
        const membershipRef = doc(db, "Membership", this.membership);
        getDoc(membershipRef).then((membershipDoc) => {
          this.fixCredits = membershipDoc.data()["Credits"];
        })
      }
    });
  },
  methods: {
    async topup() {
      const userDocRef = doc(db, "users", this.email);
      await updateDoc(userDocRef, {
        Credits: this.credit + 10
      });
      this.credit += 10;
      this.showModal = true;
    }
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
  margin-left: 200px;
  /* background-color: grey; */
}
.sidenav {
  margin-top: 75px !important;
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
  height: 300px;
  padding-top: 20px;
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
  width: 270px;
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
  font-family: "Avenir", serif;
}

img {
 max-width: 40%;
 max-height: 40%;
}
</style>
