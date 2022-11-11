<template>
  <article class="article" @click="view()">
    <router-link to="/bookInfo">
      <figure class="image">
        <img src="{{this.preview}}" alt="Booking" />
      </figure>
      <div class="content">
        <h3 class="title">{{ this.Viewing }}</h3>
        <hr class="solid" />
        <div style="width: 40%; float: left">
          <img src="../assets/person.png" alt="Icon" class="icon" />
          <span class="post">{{ this.classInstructor }}</span>
        </div>
        <div style="margin-left: 40% ">
          <img src="../assets/run.png" alt="Icon" class="icon" style="height:35px;width:25px;margin-top: 10px;margin-left: 30px;" />
          <span class="post">{{ this.className }}</span>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script>
//Firebase imports
import firebaseApp from "../main.js";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  name: "BookingListing",
  //Pass classID from Booking to this component
  props: {
    Category: String,
    Instructor: String,
    Viewing: String,
    Name: String,
    Preview: String,
  },
  methods: {
    async view() {
      //Hax method to pass ID to BookingInformation
      const auth = getAuth(firebaseApp);
      this.email = auth.currentUser.email;
      const userRef = doc(db, "users", this.email);
      updateDoc(userRef, {
        Viewing: this.classID,
      }).catch((error) => {
        console.error("Error Saving Information", error);
      });
      //Give time for firebase to write viewing
      await new Promise((r) => setTimeout(r, 2000));
    },
  },
  data() {
    return {
      classCategory: "",
      classInstructor: "",
      className: "",
      classID: "",
      email: "",
      classPreview:null,
    };
  },
  //Get details based on classID
  created: function () {
    this.classCategory = this.Category;
    this.classInstructor = this.Instructor;
    this.classID = this.Viewing;
    this.className = this.Name;
    this.preview = this.Preview;
    console.log(this.className);
  },
  updated: function () {
    this.classCategory = this.Category;
    this.classInstructor = this.Instructor;
    this.classID = this.Viewing;
    this.className = this.Name;
    this.preview = this.Preview;
    console.log(this.className);
  },
};
</script>

<style>
.article {
  width: 400px;
  height: 340px;
  border-radius: 10px;
  /* border: solid 2px; */
  margin-right: 30px;
  float: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.link {
  text-decoration: none;
}

.image {
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  height: 200px;
}

.content {
  color: black;
  text-align: left;
}

.title {
  margin: auto;
  width: 90%;
}

.icon {
  width: 40px;
  height: 40px;
  margin: 5px;
}

.post {
  margin: 5px;
  position: relative;
  bottom: 15px;
}
.solid {
  display: block;
  border: none;
  height: 3px;
  background-color: grey;
}
</style>
