<template>
  <header>Header</header>
  
  <main>Content</main>
  <nav>Navigation</nav>

  <div><h1>Heading</h1></div>



  <div class="grid-container">
    <div class ="grid-item-1"></div>
    <div class ="grid-item-2"></div>
    <div class ="grid-item-3"></div>
    <div class ="grid-item-4"></div>

  </div>

    

</template>

<script>
export default {
  name: "ProfileAccount",
}

</script>

<style scoped>
*{
  display: grid;
}
header{
  font-size: 16px;
  height:10vh;

 } 

/* header{
  height:20%;
}, */
main,
nav{
  background-color: steelblue;
  color:white;
  padding:20px;
  border:skyblue;
}
</style>