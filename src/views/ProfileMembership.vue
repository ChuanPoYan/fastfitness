<template>
  <br /><br /><br /><br /><br /><br /><br />
  <h1>Our Packages</h1>
  <div class="container">
    <div class="col">
      <h2>STARTER PACKAGE</h2>
      <hr />
      <p>$50/MONTH</p>
      <hr />
      <p>About 4-5 classes</p>
      <hr />
      <p>Free Lanyard</p>
      <hr />
      <p>Bronze Member</p>
      <hr />
      <p>Access to ALL classes</p>
      <div v-if="'Starter' == this.membership">Selected</div>
      <button v-else @click="select('Starter')">Select</button>
    </div>
    <div class="col">
      <h2>INTERMEDIATE PACKAGE</h2>
      <hr />
      <p>$90/MONTH</p>
      <hr />
      <p>About 6-9 classes</p>
      <hr />
      <p>Free T-shirt</p>
      <hr />
      <p>Silver Member</p>
      <hr />
      <p>Access to ALL classes</p>
      <div v-if="'Intermediate' == this.membership">Selected</div>
      <button v-else @click="select('Intermediate')">Select</button>
    </div>
    <div class="col">
      <h2>ADVANCE PACKAGE</h2>
      <hr />
      <p>$120/MONTH</p>
      <hr />
      <p>About 10-15 classes</p>
      <hr />
      <p>Free Resistance Bands</p>
      <hr />
      <p>Gold Member</p>
      <hr />
      <p>Access to ALL classes</p>
      <div v-if="'Advance' == this.membership">Selected</div>
      <button v-else @click="select('Advance')">Select</button>
    </div>
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
  data(){
   return {membership : null}
  }, 
  created: async function(){
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
      }).catch((error) => {
        console.error("Error Saving Information", error);
      });
    },
  },
};
</script>

<style>
.container {
  width: 1200px;
  height: 400px;
  background-color: green;
  padding-top: 40px;
  text-align: center;
}

.col {
  float: left;
  width: 360px;
  height: 360px;
  background-color: white;
  border: solid black;
  margin-left: 20px;
}
</style>
