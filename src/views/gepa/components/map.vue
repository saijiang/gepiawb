<template>
    <div>
      <div class="title-div">Survival Map</div>
      <div class="center-div"><span>--help--</span></div>
      <el-row :gutter="20">
        <el-col :span="8">
          <div style="display: flex;flex-direction: row;justify-content: space-between;">
            <span>Gene or Transcript</span>
            <div style="display: flex;flex-direction: row;">
              <div style="height: 20px;padding: 0 5px;border-radius: 2px;border: 1px solid #E6E9ED;">Upload</div>
              <div style="height: 20px;padding: 0 5px;border-radius: 2px;border: 1px solid #E6E9ED;margin-left: 5px;">Reset</div>
            </div>
          </div>
          <el-input style="margin-top: 5px;" type="textarea"></el-input>
          <span>Input genes or transcripts using symbol or id.</span>
          <div style="margin: 10px 0;"><span>Methods</span></div>
          <el-radio-group v-model="menthradio" style="display: flex;flex-direction: column;">
            <el-radio :label="1" style="margin: 10px 0;">Overall Survival</el-radio>
            <el-radio :label="2">Disease Free Survival (RFS)</el-radio>
          </el-radio-group>
          <div style="display: flex;flex-direction: column;margin-top: 8px;">
            <span>Survival Time Units</span>
            <el-select v-model="timervalue" style="margin-top: 5px;">
              <el-option label="Months" value="Months"></el-option>
              <el-option label="Days" value="Days"></el-option>
            </el-select>
          </div>

        </el-col>
        <el-col :span="8">
          <div style="display: flex;flex-direction: column;">
            <span>Significance Level</span>
            <el-input-number v-model="num" controls-position="right"  :min="0" :max="1" :step="0.01" style="width: 100%;margin-top: 5px;"></el-input-number>
          </div>
          <div style="display: flex;flex-direction: column;margin-top: 5px;">
            <span>P-Value Adjustment</span>
            <el-select v-model="pvalue">
              <el-option label="No Adjustment" value="1"></el-option>
              <el-option label="FDR" value="2"></el-option>
            </el-select>
            <span>Group Cutoff</span>
          </div>
          <el-radio-group v-model="Cutoffradio" style="display: flex;flex-direction: column;margin-top: 15px;">
            <el-radio :label="1">Median</el-radio>
            <el-radio style="margin: 10px 0;" :label="2">Quartile</el-radio>
            <el-radio :label="3">Custom</el-radio>
          </el-radio-group>
          <div style="margin-top: 10px;display: flex;flex-direction: row;justify-content: space-between;">
            <div style="display: flex;flex-direction: column;">
              <span>Cutoff-High(%)</span>
              <el-input style="margin-top: 5px;"></el-input>
            </div>
            <div style="display: flex;flex-direction: column;">
              <span>Cutoff-Low(%)</span>
              <el-input style="margin-top: 5px;"></el-input>
            </div>
          </div>

        </el-col>
        <el-col :span="8">
          <div style="margin-bottom: 5px;">
            <span>Datasets Selection </span>
            <span style="color: #4bc7a4;cursor: pointer;"> (Cancer name)</span>
          </div>
          <span>Tips: Ctrl/Command + A: select all cancer types. </span>
          <div class="list-views"></div>
          <div style="display: flex;flex-direction: row;justify-content: space-between;margin-bottom: 5px;">
            <span>Active Datasets</span>
            <div style="display: flex;flex-direction: row;">
              <div class="custom-btns" ><span>Add</span></div>
              <div class="custom-btns"><span>Reset</span></div>
            </div>
          </div>
          <el-input type="textarea" style="margin-bottom: 2px;"></el-input>
          <span>The patients are based on above cancer list.</span>
          <div class="custom-plot-btns"><span>Plot</span></div>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        menthradio:1,
        timervalue:'Months',
        num:0,
        pvalue:'1',
        Cutoffradio:1
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .title-div{
    color: #333;
    border-bottom: 2px solid #E6E9ED;
    box-sizing: border-box;
    padding: 15px 10px;
}

.center-div{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4bc7a4;
    padding: 10px 0;
}

.list-views{
  width: 100%;
  height: 300px;
  border: 1px solid #E6E9ED;
  border-radius: 2px;
  margin: 5px 0;
}

.custom-btns{
  height: 20px; 
  border: 1px solid #E6E9ED;
  border-radius: 2px; 
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}

.custom-plot-btns{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4bc7a4;
  color: #fff;
  cursor: pointer;
  height: 30px;
  width: 50px;
  margin-top: 10px;
  cursor: pointer;
}

::v-deep .el-textarea__inner{
  line-height: 3;
}
  </style>