<template>
  <div>
    <input type="text" placeholder="Поиск по сайту..." />
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
input {
  width: 640px;
  height: 61px;
  left: 480px;
  top: 0px;

  background: rgba(16, 0, 37, 0.25);
  border-radius: 4px 4px 1px 1px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 50px 0px;
   color: #fff;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding-left: 15px;
}
input::-webkit-input-placeholder {
  color: #fff;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  
}
</style>
