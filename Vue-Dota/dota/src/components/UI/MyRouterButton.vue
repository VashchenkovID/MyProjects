<template>
   <button class="routerBtn"><slot></slot></button>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.routerBtn{
width: 300px;
height: 50px;
background: #FFFFFF;
border-radius: 4px;
cursor: pointer;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #000;
}
</style>