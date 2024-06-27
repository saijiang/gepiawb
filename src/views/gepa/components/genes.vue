<template>
    <div>
      <div class="center-div"><span>--help--</span></div>
      <el-row :gutter="20">
        <el-col :span="8">
          <div style="display: flex;flex-direction: column;">
            <span>Datasets Selection</span>
            <el-select v-model="daselect" style="margin-top: 5px;">
              <el-option label="ACC" value="1"></el-option>
            </el-select>
            <span>Gene/Isoform</span>
            <el-radio-group v-model="leftradio" style="display: flex;flex-direction: column;margin-top: 5px;">
              <el-radio style="margin: 10px 0;" :label="1">Gene</el-radio>
              <el-radio :label="2">Isoform</el-radio>
            </el-radio-group>
          </div>
        </el-col>
        <el-col :span="8">
            <span>Methods</span>
            <el-radio-group v-model="centerradio" style="display: flex;flex-direction: column;margin-top: 5px;">
              <el-radio style="margin: 10px 0;" :label="1">Overall Survival</el-radio>
              <el-radio :label="2">Disease Free Survival (RFS)</el-radio>
            </el-radio-group>
        </el-col>
        <el-col :span="8">
          <div style="display: flex;flex-direction: row;">
            <div>
              <span>Methods</span>
              <el-radio-group v-model="centerradio" style="display: flex;flex-direction: column;margin-top: 5px;">
                <el-radio style="margin: 10px 0;" :label="1">Overall Survival</el-radio>
                <el-radio :label="2">Disease Free Survival (RFS)</el-radio>
              </el-radio-group>
            </div>
            <div class="custom-btn">List</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        daselect:'1',
        leftradio:1,
        centerradio:1
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
.center-div{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4bc7a4;
    padding: 10px 0;
    margin-bottom: 10px;
}

.custom-btn{
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4bc7a4;
  color: #fff;
  cursor: pointer;
}
  </style>