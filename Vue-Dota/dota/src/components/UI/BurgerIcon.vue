<template>
    <div class="navbar__burger" ></div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.navbar__burger {
  position: relative;
  display: inline-block;
  margin-top: 5px;
  width: 20px;
  height: 1px;
  padding-top: 3px;
  border-top: 0.2em solid #fffbfb;
  border-bottom: 0.2em solid #fffcfc;
  text-shadow: 0 1px 0 #151414;
}

.navbar__burger:before {
  content: "";
  position: absolute;
  top: 0.7em;
  left: 0px;
  width: 100%;
  border-top: 0.2em solid #f7efef;
}
</style>