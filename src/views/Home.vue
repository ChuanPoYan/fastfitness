<template>
    <img id= "pic" src="../assets/homepage.png" alt="homepage">
<div id="card">
    <img src="../assets/promo2.png" alt="Promotion1" style="width:100%">
    <div class="container">
    <h4><b>Collaboration with Kydra Activewear!</b></h4>
    <p>Up to 75% discounts if you spend a minimum of $50!</p>
    <h5><b>Promotion up till 31st December 2022</b></h5>
</div>
</div>
    <!-- include Booking Successful Popup -temporary -->
    <div>
        <SavedModal v-show="showModal" @close-modal="showModal = false" />
      </div>
    <div class="save-btn">
        <button @click="showModal = true">Booking Successful Popup</button>
    </div>
    <button class="creditsbutton" role="button" > 20 CREDITS </button>
</template>

<script>
import SavedModal from '@/components/SavedModal.vue'

export default {
    name: "App",
    components: {
      SavedModal,
    },
    data() {
      return {
      showModal: false,
    }
  },
};
</script>

<style scoped>
#pic {
    width: 1100px;
    height: 800px;  
}
/* card */
#card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  width: 500px;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  float: right; 
  padding-top: 120px;
  padding-right: 30px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

/* credits button */
.creditsbutton{ 
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 1rem 3rem;
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    background: #ff7b31;
    border-radius: 9px;
    border: none;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
}
.creditsbutton:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
        
</style>