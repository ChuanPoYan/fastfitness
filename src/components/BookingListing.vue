<template>
  <article class="article">
    <a
      href="https://www.figma.com/file/9EXPTUK9zgE8OQ0Xh8IwyY/BT3103-MockUp"
      class="link"
    >
      <figure class="image">
        <img src="../assets/logo.png" alt="Booking" />
      </figure>
      <div class="content">
        <h3 class="title">Exercise</h3>
        <hr class="solid" />
        <div style="width: 40%; float: left">
          <img src="../assets/person.png" alt="Icon" class="icon" />
          <span class="post">Jirapat</span>
        </div>
        <div style="margin-left: 40%">
          <img src="../assets/time.png" alt="Icon" class="icon" />
          <span class="post">8:00AM - 11:00AM</span>
        </div>
      </div>
    </a>
  </article>
</template>

<style>
.article {
  width: 400px;
  height: 340px;
  border-radius: 10px;
  border: solid 2px;
  margin-right: 30px;
  float: left;
}

.link {
  text-decoration: none;
}

.image {
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  height: 200px;
}

.content {
  color: black;
  text-align: left;
}

.title {
  margin: auto;
  width: 90%;
}

.icon {
  width: 40px;
  height: 40px;
  margin: 5px;
}

.post {
  margin: 5px;
  position: relative;
  bottom: 15px;
}
</style>
