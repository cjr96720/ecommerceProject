<template>
  <div>
    <Nav />

    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

h1 {
  text-align: center;
  margin: 20px auto;
}


</style>
