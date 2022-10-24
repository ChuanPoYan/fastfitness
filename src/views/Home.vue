<template>
<div class="container">

  <div class="left">
      <img src="../assets/homepage.png" alt="homepage">
  </div>

  <div class="right" id="card">
    <img src="../assets/promo2.png" alt="Promotion1" style="width:100%">
    <div class="text">
      <h4><b>Collaboration with Kydra Activewear!</b></h4>
      <p>Up to 75% discounts if you spend a minimum of $50!</p>
      <h5><b>Promotion up till 31st December 2022</b></h5>
    </div>
  </div>

  <div class="right" id="card">
    <img src="../assets/promo3.png" alt="Promotion1" style="width:100%">
    <div class="text">
      <h4><b>Collaboration with Barry's Bootcamp!</b></h4>
      <p>Get a complimentary class to Barry's Bootcamp if you purchase the Advanced Package!</p>
      <h5><b>Promotion up till 31st December 2022</b></h5>
    </div>
  </div>

</div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style scoped>
.container {  
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  grid-template-rows: 2.4fr;
  gap: 0px 41px;
  grid-auto-flow: row;
  grid-template-areas:
    ". .";
}

.left {
    width: 1000px;
    height: 800px;  
}
/* card */
#card {
  /* Add shadows to create the "card" effect */
  padding-top: 70px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  width: 500px;
  height: 500px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  float: left; 
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

.text {
  text-align: center;
}
       
</style>