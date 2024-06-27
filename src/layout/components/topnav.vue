<template>
    <div class="topcontain">
      <div class="left-div">
        <el-image :src="require('@/assets/logo.png')" class="image-icon"></el-image>
        <span class="logo-title">Themism</span>
      </div>
      <div class="right-div">
        <el-dropdown>
          <span class="contact-span">联系我们</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>联系电话</el-dropdown-item>
            <el-dropdown-item>联系地址</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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
  .topcontain{
  
    height: 100%;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;  
    justify-content: space-between;
    // position: fixed;
    // top: 0;
    // left: 0;
    // z-index: 999;///$base-z-index;
    .left-div{
      display: flex;
      align-items: center;
      .image-icon{
        width: 40px;
        height: 40px;
        margin-left: 50px;
        margin-right: 5px;
      }
      .logo-title{
        font-size: 18px;
        font-weight: 800;
      }
    }

    .right-div{
      margin-right: 50px;
      .contact-span{
        cursor: pointer;
        font-size: 14px;
      }
    }

  }
  </style>