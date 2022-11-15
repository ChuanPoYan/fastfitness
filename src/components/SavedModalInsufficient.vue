//Popup for Insufficient Credits 
// Popup for credits purchase 
<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <img class= "check" src="../assets/insufficient.png" alt="insufficienticon">
      <h6>Insufficient Credits!</h6>
      <p>Please top up.</p>
      <!-- Button has currently no usage -->
      <button><router-link to="/profile">Back to Page</router-link></button> 
    </div>
    <div class="close" @click="$emit('close-modal')">
      <img class="close-img" src="../assets/closeicon.png" alt="closeicon" />
    </div>
  </div>
</template>

<script>
  export default {
}
</script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 400px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}
.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
  font-family: Arial, Helvetica, sans-serif;
}

p {
  font-size: 16px;
  margin: 20px 0;
  font-family: Arial, Helvetica, sans-serif;
}

button {
  background-color:#FF6A28;
  padding: 1rem 3rem;
  text-align: center;
  font-size: 16px;
  width: 200px;
  height: 60px;
  color: white;
  border-radius: 9px;
  margin-top: 50px;
  letter-spacing: 0px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}

</style>