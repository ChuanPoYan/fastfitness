<template>
  <body>
    <div class="Body">
      <br /><br /><br /><br /><br />
      <div class="main3">
        <div class="Credits">
          <!-- <h1>Credits</h1> -->
          <br /><br /><br /><br />
          <div class="card2">
            <h2>Starter Package</h2>
            <!-- <hr />
            <br /> -->
            <div class="price">
              <hr />
              <br />
              <h1>50/month</h1>
              <br />
              <hr />
            </div>
            <!-- <br />
            <hr /> -->
            <h3>4-5 Classes</h3>
            <hr />
            <p>Free Lanyard</p>
            <hr />
            <p>1 Complimentary Pre-Requisite Class</p>
            <hr />
            <p>Access to all classes</p>
            <button class="selected" v-if="'Starter' == this.membership">
              Selected
            </button>
            <button class="creditsbutton" v-else @click="select('Starter')">
              25 Credits
            </button>
          </div>
        </div>

        <div class="Credits">
          <h1>Our Packages</h1>
          <span class="dot"></span>
          <div class="card2">
            <h2>Intermediate Package</h2>
            <div class="price">
              <hr />
              <br />
              <h1>90/month</h1>
              <br />
              <hr />
            </div>
            <h3>6-9 Classes</h3>
            <hr />
            <p>Free Shirt</p>
            <hr />
            <p>1 Complimentary Pre-Requisite Class</p>
            <hr />
            <p>Access to all classes</p>
            <button class="selected" v-if="'Intermediate' == this.membership">
              Selected
            </button>
            <button
              class="creditsbutton"
              v-else
              @click="select('Intermediate')"
            >
              50 Credits
            </button>
          </div>
        </div>

        <div class="intermediate">
          <br /><br /><br /><br />
          <div class="card2">
            <h2>Advanced Package</h2>
            <div class="price">
              <hr />
              <br />
              <h1>120/month</h1>
              <br />
              <hr />
            </div>
            <h3>10-15 Classes</h3>
            <hr />
            <p>Free Resistance Beads</p>
            <hr />
            <p> 2 Complimentary Pre-Requisite Classes </p>
            <hr />
            <p>Access to all classes</p>
            <button class="selected" v-if="'Advance' == this.membership">
              Selected
            </button>
            <button class="creditsbutton" v-else @click="select('Advance')">
              80 Credits
            </button>
          </div>
        </div>
      </div>
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
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  name: "ProfileMembership",
  data() {
    return {
      membership: null,
      email: null,
      currCredits: 0,
    };
  },
  created: async function () {
    const auth = getAuth(firebaseApp);
    this.email = auth.currentUser.email;
    const usersDocRef = doc(db, "users", this.email);
    await getDoc(usersDocRef).then((userDoc) => {
      if (userDoc.exists()) {
        this.membership = userDoc.data()["Membership"];
        this.currCredits = userDoc.data()["Credits"]
      }
    });
  },
  methods: {
    async select(membership) {
      const auth = getAuth(firebaseApp);
      this.email = auth.currentUser.email;
      const usersDocRef = doc(db, "users", this.email);
      const membershipDocRef = doc(db, "Membership", membership);
      await getDoc(membershipDocRef).then((membershipDoc) => {
        if (membershipDoc.exists()) {
          const credits = membershipDoc.data()["Credits"];
          updateDoc(usersDocRef, {
            Membership: membership,
            Credits: credits + this.currCredits,
          }).catch((error) => {
            console.error("Error Saving Information", error);
          });
          this.membership = membership;
        }
      });
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Avenir);

.Body {
  font-family: "Avenir", serif;
}
.main3 {
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: grey;
  justify-content: space-between;
  align-content: center; */
  display: flex;
  justify-content: space-evenly;
  font-family: "Avenir", serif;
  width: 85%;
  margin-left: 200px;
}
/* .dot {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
} */
/* header{
    height:20%;
  }, */
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
.card2 {
  background-color: rgba(241, 241, 241, 1);
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 5px; /* 5px rounded corners */
  width: 350px;
  height: 475px;
  padding-top: 20px;
  font-family: "Avenir", serif;
}
button {
  border: none;
  background-color: c;
  width: 50%;
  margin: 10px auto;
  padding: 10px 30px;
  color: white;
  text-transform: uppercase;
}
hr {
  display: block;
  border: none;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.15);
}
h1 {
  text-align: center;
  font-family: "Avenir", serif;
  /* font-size:60px; */
}

/* credits button */
.creditsbutton {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 1rem 3rem;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background: rgba(255, 106, 40);
  border-radius: 30px;
  border: none;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
}
.creditsbutton:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.selected {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 1rem 3rem;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background: green;
  border-radius: 9px;
  border: none;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
}
.price {
  background-color: white;
}
</style>
