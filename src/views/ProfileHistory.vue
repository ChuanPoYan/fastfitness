<template>
  <h1> Profile History</h1>
  <div class="sidenav" style="width:15%">
        <router-link to="/profile">Profile</router-link>
        <router-link to="/profile/account">Account</router-link>
        <router-link to="/profile/history">Profile History</router-link>
        <router-link to="/profile/membership">Membership</router-link>
        <router-view />
  </div>
  <div style="margin-left:15%">
    <div class="w3-container w3-teal">
      <br><br>
      <h1>My Page</h1>
    </div>
</div>

</template>

<script>
export default {
    name:"ProfileHistory",
    
}
</script>

<style>

.sidenav {
  margin-top: 95px !important;
  height: 100%; 
  /* width: 300px; Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: rgba(241, 241, 241, 1); /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 40px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
}
</style>