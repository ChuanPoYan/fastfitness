<template>
<div class="main">
  <!-- LEFT COMPONENT -->
  <div class="sub">
    <img class="bigimage" src="../assets/homepage.png" alt="homepage" />
  </div>
  <!-- RIGHT COMPONENT -->
  <div class="sub">
  <!-- CARD 1 -->
  <div class="information3">
        <img class="image" src="../assets/promo4.png" alt="Promotion1" />
        <h4><b>Collaboration with Kydra Activewear!</b></h4>
        <p>Up to 75% discounts if you spend a minimum of $50!</p>
        <h5><b>Promotion up till 31st December 2022</b></h5>
  </div>
  <br>
  <!-- CARD 2 -->
  <div class="information4">
        <img class="image" src="../assets/promo3.png" alt="Promotion1" />
        <h4><b>Collaboration with Barry's Bootcamp!</b></h4>
        <p> FREE Barry's Bootcamp Class for GOLD members! </p>
        <h5><b>Promotion up till 31st December 2022</b></h5>
  </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.bigimage {
  width: 840px;
}
.image {
  width: 480px; 
}
.main{
  padding-top: 50px;
  width: 100%; 
  display: flex;
}

.sub {
  width: 90%; 
  padding: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.information3 {
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px; 
  line-height: 0.5em;
  width: 480px;
  height: 330px;
}

.information4 {
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px; 
  line-height: 0.5em;
  width: 480px;
  height: 330px;
}

</style>

