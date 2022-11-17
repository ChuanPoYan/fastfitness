<template>
    <article class="article" @click="view()">
      <router-link to="/bookInfo">
        <div class="image">
          <img id = "preview" :src="require(`@/${this.classPreview}`)" alt="Booking" style="width:90%"/>
        </div>
        <div class="content">
          <h3 class="title">{{ this.Alias }}</h3>
          <hr/>
          <div class="classinfo">
            <div class="instructor">
              <img src="../assets/person.png" alt="Icon" class="icon" />
              <span class="post">{{ this.classInstructor }}</span>
            </div>
            <div class="name">
              <img src="../assets/run.png" alt="Icon" class="icon2" />
              <span class="post">{{ this.className }}</span>
            </div>
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
      Alias: String,
  
    },
    methods: {
      async view() {
        //Hax method to pass ID to BookingInformation
        const auth = getAuth(firebaseApp);
        this.email = auth.currentUser.email;
        const userRef = doc(db, "users", this.email);
        await updateDoc(userRef, {
          Viewing: this.classID,
        }).catch((error) => {
          console.error("Error Saving Information", error);
        });
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
      this.classPreview = this.Preview;
    },
    updated: function () {
      this.classCategory = this.Category;
      this.classInstructor = this.Instructor;
      this.classID = this.Viewing;
      this.className = this.Name;
      this.classPreview = this.Preview;
    },
  };
  </script>
  
  <style scoped>
  .article {
    width: 400px;
    height: 340px;
    border-radius: 10px;
    /* border: solid 2px; */
    margin-left:30px;
    margin-right: 30px;
    margin-bottom:30px;
    float: left;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    font-family: serif;
  }
  
  .link {
    text-decoration: none;
  }
  .name{
    margin-left: 40% ;
    /* background-color:aqua; */
  }
  
  /* .image {
    margin-left: auto;
    margin-right: auto;
    width: 30px;
    height: 20px;
  }
  .preview{
    width:30%;
    height:50%;
  } */
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
  .icon2 {
    height:40px;width:25px;margin-top: 10px;margin-left: 30px;
  }
  .post {
    margin: 5px;
    position: relative;
    bottom: 15px;
  }
  .instructor{
    width: 40%; float: left;
    /* background-color: green; */
  }
  .solid {
    display: block;
    border: none;
    height: 3px;
    background-color: grey;
  }
  
  </style>