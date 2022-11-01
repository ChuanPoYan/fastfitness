<template>
<div class="main">

  <div class="sub">
    <img src="../assets/spin.png" alt="Spin" style="width: 100%" />
  </div>

  <div class="sub" id="information">
    <h1> Booking Information </h1>
    <div>
      <h3> Category: Spin </h3>
      <h3> Studio: Ride the Current!  </h3>
      <h3> Instructor: Mandalyn Tan  </h3>
      <h3> Duration: 50mins </h3>
      <h3> Credits: 8 </h3>
      <h3> Description: Ride the Current! puts the fun factor into getting your sweat on. You decide how far to push yourself, their instructors are there to guide and encourage you the whole ride.
        It is the ultimate party on a bike experience for anyone looking for that full body workout </h3>
    </div>

    <div class="booking">
      <h3 > Pick an available time! </h3>
    </div>

  </div>

</div>
  
</template>

<script>
export default {

}
</script>

<style>
.main{
  padding-top: 70px;
  width: 100%; 
  display: flex;
}

.sub {
  width: 50%; 
  padding: 60px;
}

#information {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.booking {
  background-color: rgba(255, 106, 40);
  text-align: center;
  color: white; 
  border-radius: 30px;
  height: 200px; 
}


</style>