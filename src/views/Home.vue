<template>
    <img id= "pic" src="../assets/homepage.png" alt="homepage">
<div class="card">
    <img src="../assets/promo1.png" alt="Promotion1" style="width:100%">
    <div class="container">
    <h4><b>Collaboration with Cheak Activewear!</b></h4>
    <p>Up to 75% discounts if you spend minimum $50!</p>
</div>
</div>
    <!-- include Booking Successful Popup -temporary -->
    <div>
        <SavedModal v-show="showModal" @close-modal="showModal = false" />
      </div>
    <div class="save-btn">
        <button @click="showModal = true">Booking Successful Popup</button>
    </div>
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
    padding-top: 100px;
    width: 950px;
    height: 800px;  
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  max-width: 30%;
  max-height: 30%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  float: right; 
  padding-top: 120px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

</style>