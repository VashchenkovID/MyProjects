<template>
  <div class="wrapper">
    <div class="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  >
body {
  margin: 0;
}
.wrapper {
  background: linear-gradient(
      to bottom,
      rgba(16, 0, 37, 0.8) 100px,
      rgba(16, 0, 37) 77%,
      rgba(16, 0, 37)
    )
    no-repeat;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  width: 100%;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  margin: 0;
  background-attachment: scroll;
  background: url(@/components/img/Image.jpg) no-repeat;
  background-attachment: fixed;
  background-position: top;
  background-size: 100%;
}
</style>