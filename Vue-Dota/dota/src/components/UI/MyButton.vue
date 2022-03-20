<template>
  <button class="myButton"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style scoped>
.myButton {
  background: transparent;
  color: #fff;
  padding: 0px 15px 15px 15px;
  border: 1px solid #fff;
  cursor: pointer;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}
</style>