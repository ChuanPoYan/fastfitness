<template>
<div class="container">
  <div class="left">
      <img src="../assets/homepage.png" alt="homepage" >
  </div>
  <div class="innerright">
    <div class="card">
      <img src="../assets/promo2.png" alt="Promotion1" style="width:100%">
      <div class="text">
        <h4><b>Collaboration with Kydra Activewear!</b></h4>
        <p>Up to 75% discounts if you spend a minimum of $50!</p>
        <h5><b>Promotion up till 31st December 2022</b></h5>
      </div>
    </div>

    <div class="card">
      <img src="../assets/promo3.png" alt="Promotion1" style="width:100%">
      <div class="text">
        <h4><b>Collaboration with Barry's Bootcamp!</b></h4>
        <p>Get a complimentary class to Barry's Bootcamp if you purchase the Advanced Package!</p>
        <h5><b>Promotion up till 31st December 2022</b></h5>
      </div>
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
  /* grid-template-columns: 1.3fr 0.7fr;
  grid-template-rows: 2.4fr;
  gap: 0px 41px;
  grid-auto-flow: row;
  grid-template-areas:
    ". ."; */
  
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  /* background-color: grey; */
  /* padding: 2px 16px; */
  /* grid-auto-flow: row; */
}
.container img{
  width:87%;
  height:auto;
  background-position: center;
}
.left {
    width: 1200px;
    height: 800px;  
    /* background-color: orange; */
    /* float:left */
    /* align-content: center; */
    overflow:auto;

}
.innerright {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  /* overflow:auto; */
  /* padding-top: 100px; */
}
/* card */
.card {
  /* Add shadows to create the "card" effect */
  /* padding-top: 70px; */
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  /* transition: 0.3s; */
  border-radius: 5px; /* 5px rounded corners */
  width: 400px;
  height: 380px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  float: left; 
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.text {
  text-align: center;
}
       
</style>