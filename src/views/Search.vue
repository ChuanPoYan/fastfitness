<template>
    <div>
      <div style="width: 67%; float: left">
        <div class="top_search">
          <!-- Load seach icon library -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <!-- searchbar -->
          <div class="grid-container">

            <div class="search-bar">
            <input type="text" class="input" placeholder="&nbsp;">
            <span class="label">Search</span>
            <span class="highlight"></span>
            <div class="search-btn">
              <i class="fa fa-search"></i>
            </div>
            </div>

          <!-- <div class="dropdown"> -->
            <select v-model="selected" id="topnav">
            <option disabled value="">Category</option>
            <option>Exercise</option>
            <option>Karate</option>
            <option>Yoga</option>
            <option>Meditation</option>
          </select>
          <!-- </div> -->

          </div>
          
          
        </div>

            <div class="child inline-block-child">
            <BookingListing :classID = "classIDs[0]" />
            <BookingListing :classID = "classIDs[1]"/>
            </div>
          <div class="child inline-block-child">
            <BookingListing :classID = "classIDs[2]"/>
            <BookingListing :classID = "classIDs[3]"/>
          </div>
        </div>
        

        <div style="margin-left: 67%; padding-right: 20px; padding-top: 10px;">
        <!-- <h3 class="title">Studio Location</h3> -->
        <img src="../assets/mapwithtop.png" alt="Icon" style= "width:100%   ">
      </div>
    </div>

</template>
  
<script>
//Import BookingListing so can pass classID to it
import BookingListing from "../components/BookingListing.vue"

//Firebase imports
import firebaseApp from "../main.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";


const db = getFirestore(firebaseApp);

export default {
  name: "Search",
  components: {
    BookingListing
  },
  data() {
    return {
      classIDs: []
    }
  },
  created: async function () {
    const classRef = collection(db, "Class");
    const snapshot = await getDocs(classRef);
    snapshot.forEach(doc => {
      this.classIDs.push(doc.id);
    })
  },
}
</script>
  
<style>


  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    padding-top: 30px;
  }
  
  .inline-block-child {
    display: inline-block;
  }
  
  
/* .content{
  display: flex;
  justify-content: space-around;
} */
.grid-container{
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  display: flex;
  justify-content: space-evenly;
  /* grid-gap: 10px; */
  /* background-color: grey; */
  padding-right: 40px;
  padding-left:40px;
  /* justify-content: space-evenly; */
}
.top_search{
  padding-top: 10px;
  padding-bottom: 10px;
}
#topnav {
    /* font-size: 20px; */
    width: 400px;
    height: 44px;
    margin-top: 10px;
    /* margin: 20px; */
    /* background-color: green; */
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
  background:rgba(255, 106, 40);
  border-radius: 20px;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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
  background:rgba(255, 106, 40);
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


</style>
  




