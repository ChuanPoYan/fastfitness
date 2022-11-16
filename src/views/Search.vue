<template>
  <div>
    <div style="width: 67%; float: left">
      <div class="grid-container">
      <div class="top_search">
        <!-- Load seach icon library -->
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <div class="search-bar">
            <input
              type="text"
              class="input"
              v-model="search"
              placeholder="&nbsp;"
            />
            <span class="label">Search</span>
            <span class="highlight"></span>
            <div class="search-btn">
              <i class="fa fa-search" @click="filterClasses()"></i>
            </div>
            </div>
          </div>
          <!-- </div> -->
          <div class="searchitems">
            <h1>Search classes</h1>
            <div v-for="Class in filteredClasses" :key="Class">
              <ClassesListing :Instructor="Class.Instructor" :Category="Class.Category" :Viewing="Class.ID" :Name="Class.Name" :Preview="Class.Preview" :Alias="Class.Alias"></ClassesListing>
            </div>
          </div>
        <div class ="Recommended">
          <br><br>
          <hr/> 
          <h1>Recommended Classes</h1>
            <div class="recc" v-for="Class in classArray" :key="Class">
              <ClassesListing :Instructor="Class.Instructor" :Category="Class.Category" :Viewing="Class.ID" :Name="Class.Name" :Preview="Class.Preview" :Alias="Class.Alias"></ClassesListing>
            </div>
          </div>
        </div>
      </div>
        <div style="margin-left: 67%; padding-right: 20px; padding-top: 10px;">
          <img src="../assets/mapwithtop.png" alt="Icon" style= "width:100%  ">
      </div>
    </div>

</template>

<script>
//Import BookingListing so can pass classID to it
import ClassesListing from "../components/ClassesListing.vue";
//Firebase imports
import firebaseApp from "../main.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);
export default {
  name: "Search",
  components: {
    ClassesListing,
  },
  data() {
    return {
      search: "",
      classArray: [],
      filteredClasses: [],
    };
  },
  created: async function () {
    const classArray = [];
    const classRef = collection(db, "Class");
    const allClasses = await getDocs(classRef);
    allClasses.forEach((doc) => {
      classArray.push(doc.data());
      this.classArray = classArray;
    });
  },
  methods: {
    filterClasses() {
      const filteredClasses = [];
      if (this.search.length != 0) {
        for (const Class of this.classArray) {
          if (Class["Name"].toLowerCase().includes(this.search.toLowerCase()))
            filteredClasses.push(Class);
          this.filteredClasses = filteredClasses;
        }
      } else {
        window.alert("Search Field Empty");
      }
    },
  },
};
</script>

<style>

.inline-block-child {
  display: inline-block;
}

.grid-container {
  display: grid;
  grid-template-rows: 200;
  /* display:flex; */
  /* justify-content: center; */

  padding-right: 40px;
  padding-left: 40px;
}
.top_search {
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left:auto;
  margin-right:auto;
  /* justify-content: center; */
}
#topnav {
  /* font-size: 20px; */
  width: 400px;
  height: 44px;
  margin-top: 10px;
  /* margin: 20px; */
  border-color: rgba(241, 241, 241, 1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 40px;
}
/* Style the submit button */
.search-bar {
  height: 44px;
  width: 400px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  position: relative;
  background: #fff;
  margin-top: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
}
.input {
  border: none;
  height: 25px;
  width: 300px;
  color: #1b1b1b;
  font-size: 15px;
  outline: none;
}
.input:focus ~ .label {
  font-size: 9px;
  top: 3px;
  color: rgba(255, 106, 40);
  transition: all 0.5s ease;
}
.label {
  color: #aaaaaa;
  position: absolute;
  top: 13px;
  pointer-events: none;
  transition: all 0.5s ease;
}
.search-btn {
  background: rgba(255, 106, 40);
  border-radius: 20px;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  justify-content: center;
  cursor: pointer;
  right: 2px;
  position: absolute;
  transition: all 1s ease;
}
.icon {
  display: inline-flex;
}
.icon-18 {
  width: 18px;
  height: 18px;
}
.highlight {
  width: 0px;
  height: 1px;
  background: rgba(255, 106, 40);
  position: absolute;
  bottom: 8px;
  transition: all 1s ease;
}
.input:focus ~ .highlight {
  width: 300px;
  transition: all 1s ease;
}
searchbar.example button:hover {
  background: rgba(255, 106, 40);
}
hr {
  display: block;
  border: none;
  height: 3px;
  background-color: rgba(255, 106, 40);
}
.recc{
  margin-left:auto;
  margin-right:auto;
  background-color: green;
}
</style>
