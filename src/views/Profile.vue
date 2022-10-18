<template>
    <br>
<div class="AddEmployeeForm">
    <h1> Personal information </h1>
       <label for="name"> Name: </label>
    <input type ="text" id = "name"  placeholder="Name" v-model="name" /> 
    <br><br>

    <label for="email"> Email: </label>
    <input type="text" id = "email"  placeholder="Email" v-model="email" /> 
    <br><br>

    <label for="Phone"> Phone Number </label>
    <input type="text" id = "number"  placeholder="number" v-model="number" /> 
    <br><br>

    <label for="Address"> Address: </label> 
    <input type ="text" id = "address"  placeholder="Address" v-model="address" /> 
    <br><br>

    <v-layout row>
      <v-flex  md6 offset-sm3 >
       <div>
         <button @click="saveChanges"> Save Changes </button>
       </div>
       </v-flex>
    </v-layout>
</div>

<div class="sidenav">
  <a href="#">Account</a>
  <a href="#">Membership</a>
  <a href="#">Personal information</a>
  <a href="#">Payment History</a>
</div>
<br><br>
</template>

<script>
import firebaseApp from '../main.js';
import { getFirestore } from "firebase/firestore"
import { doc, updateDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);

export default {
    name: "SaveProfileChanges",
    data() {
        return {
            name: "",
            email: "",
            number: "",
            address: ""
        }
    },
    methods: {
        saveChanges() {
            const userRef = doc(db, "users", this.email);
            updateDoc(userRef, {First_Name: this.name, Phone_Number: this.number, 
                Email: this.email, Address: this.address
            })
            .catch((error) => {
                console.error("Error Saving Information", error)
            })
        }
    }
};
</script>

<style>
    .header{
        height: 50px;
        background-color: grey;
        text-align: center;
        font-size: 17px;
    }
    #desc{
        height: 50px;
        background-color: none;
        text-align: center;
        font-size: 16px;
    }
    .AddEmployeeForm{
        text-align: left;
        font-size: 20px;
        width: 382px;  
        overflow: hidden;  
        margin: auto;   
        padding: 100px;  
        background: #ffffff;  
        border-radius: 15px ;
    }
    

    /* The sidebar menu */
.sidenav {
  margin-top: 95px !important;
  height: 100%; 
  width: 300px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: orange; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 100px;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 200px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}
.input-contain{
    position: relative;
}
input{
    height: 5rem;
    width: 20rem;
    border: 2px solid black;
    border-radius: 1rem;
}
input:focus{
    outline: none;
    border-color: orange;
}

input, .placeholder{
    font-size: 1.4rem;
    padding: 0 1.2rem;
}
</style>>