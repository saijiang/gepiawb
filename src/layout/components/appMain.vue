<template>
    <div class="contain">
         <router-view></router-view>
        
    </div>
  </template>
  
  <script>
  
  export default {
    data(){
      return{
  
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .contain{
    //   width: 100%;
    //   height: calc(100vh - 40px);
    height: 100vh;
    //   overflow: auto;
    //   position: relative;
    overflow-x: hidden;
      

  }
  </style>