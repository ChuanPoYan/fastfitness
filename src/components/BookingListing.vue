<template>
  <article class="article">
    <a href="http://localhost:8080/vue/dist/bookInfo" class="link">
      <figure class="image">
        <img src="@/assets/logo.png" alt="Booking" />
      </figure>
      <div class="content">
        <h3 class="title">{{ this.classCategory }}</h3>
        <hr class="solid" />
        <div style="width: 40%; float: left">
          <img src="../assets/person.png" alt="Icon" class="icon" />
          <span class="post">{{ this.classInstructor }}</span>
        </div>
        <div style="margin-left: 40%">
          <img src="../assets/time.png" alt="Icon" class="icon" />
          <span class="post">8:00AM - 11:00AM</span>
        </div>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  name: "BookingListing",
  //Pass classID from Booking to this component
  props: {
    Category: String,
    Instructor: String,
  },
  data() {
    return {
      classCategory: "",
      classInstructor: "",
    };
  },
  //Get details based on classID
  updated: function () {
    this.classCategory = this.Category;
    this.classInstructor = this.Instructor;
  },
};
</script>

<style>
.article {
  width: 400px;
  height: 340px;
  border-radius: 10px;
  /* border: solid 2px; */
  margin-right: 30px;
  float: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
.solid {
  display: block;
  border: none;
  height: 3px;
  background-color: grey;
}
</style>
