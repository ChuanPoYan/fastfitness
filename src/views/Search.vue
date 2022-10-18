<template>
    <div>
      <div style="width: 67%; float: left">
        <div>
          <input type="text" placeholder="Search.." class="topnav"/>
          <select v-model="selected" class="topnav">
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
      <div>
        <SavedModal v-show="showModal" @close-modal="showModal = false" />
      </div>
      <div class="save-btn">
        <button @click="showModal = true">Booking Successful Popup</button>
      </div>
    </div>

  </template>
  
  <script>
  import BookingListing from '@/components/BookingListing.vue'
  import SavedModal from '@/components/SavedModal.vue'

  export default {
    name: "App",
    components: {
      BookingListing,
      SavedModal,
    },
    data() {
      return {
      showModal: false,
    }
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
  }
  
  .inline-block-child {
    display: inline-block;
  }
  
  .topnav {
    font-size: 20px;
    width: 400px;
    margin: 20px;
  }
  </style>
  