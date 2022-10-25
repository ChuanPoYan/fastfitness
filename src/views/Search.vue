<template>
    <div>
      <div style="width: 67%; float: left">
        <div>
          <!-- Load seach icon library -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <!-- searchbar -->
          <div class="searchbar" id="topnav">
            <input type="text" placeholder="Search.." name="topnav"/>
            <button type="submit"><i class="fa fa-search"></i></button>
          </div>
          <!-- dropdown -->
          <select v-model="selected" id="topnav">
            <option disabled value="">Category</option>
            <option>Exercise</option>
            <option>Karate</option>
            <option>Yoga</option>
            <option>Meditation</option>
          </select>
        </div>
        <div class="child inline-block-child">
          <BookingListing />
          <BookingListing />
        </div>
        <div class="child inline-block-child">
          <BookingListing />
          <BookingListing />
        </div>
      </div>
      <div style="margin-left: 67%; ">
        <h3 class="title">Studio Location</h3>
      </div>
    </div>

  </template>
  
  <script>
  import BookingListing from '@/components/BookingListing.vue'
  
  export default {
    name: "App",
    components: {
      BookingListing,
    },
  };
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
  
  #topnav {
    font-size: 20px;
    width: 400px;
    margin: 20px;
  }


/* Style the search field */
searchbar.example input[type=text] {
    padding: 10px;
    font-size: 17px;
    border: 1px solid rgba(255, 106, 40);
    float: left;
    font-size: 20px;
    width: 400px;
    background: #f1f1f1;
}

/* Style the submit button */
searchbar.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: rgba(255, 106, 40);
  color: white;
  font-size: 17px;
  border: 1px solid rgba(255, 106, 40);
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

searchbar.example button:hover {
  background: rgba(255, 106, 40);
}

</style>
  