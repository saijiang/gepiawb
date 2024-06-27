<template>
  <div class="app-wrapper">
    <!-- <topnav></topnav>
    <appMainVue></appMainVue>
     <router-view class="router-divs"></router-view>
    <bottomfooter></bottomfooter> -->
    <el-container style="height: 100%;">
      <el-header style="background-color: aqua;">
        <topnav></topnav>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      
      <!-- <el-footer height="40px">Footer</el-footer> -->
    </el-container>

  </div>
</template>

<script>
import topnav from './components/topnav.vue';
import bottomfooter from './components/bottomfooter.vue';
import appMainVue from './components/appMain.vue'

export default {
  data(){
    return{

    }
  },
  components:{
    topnav,
    bottomfooter,
    appMainVue
  }
}
</script>

<style lang="scss" scoped>

.app-wrapper{
 
    position: relative;
    height: 100vh;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    // .router-divs{
    //   flex: 1;
    //   top: 60px;
    // }
}

::v-deep .el-header{
  padding: 0;
}

::v-deep .el-footer{
  padding: 0;
}


</style>