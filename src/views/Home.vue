<template>
<div class="child" id="pic">
    <img src="../assets/homepage.png" alt="homepage">
</div>
<div class="child" id="card">
    <img src="../assets/promo2.png" alt="Promotion1" style="width:100%">
    <div class="container">
    <h4><b>Collaboration with Kydra Activewear!</b></h4>
    <p>Up to 75% discounts if you spend a minimum of $50!</p>
    <h5><b>Promotion up till 31st December 2022</b></h5>
    </div>
</div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style scoped>
#pic {
    padding-top: 20px;
    width: 800px;
    height: 600px;  
}
/* card */
#card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  width: 500px;
  height: 500px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  float: left; 
  padding-top: 20px;
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