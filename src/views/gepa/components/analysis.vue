<template>
  <div>
    <div class="title-div">Survival Plots</div>
    <helpVue v-if="showHideHelp"></helpVue>
    <div class="center-div"><span @click="showOrHideHelpAction">--help--</span></div>
    <el-row :gutter="20">
        <el-col :span="8">
            <!-- <el-radio-group v-model="radio">
                <el-radio :label="1">Gene</el-radio>
                <el-radio :label="2">Signatures</el-radio>
            </el-radio-group> -->
            <!-- <div v-if="radio == 1" style="margin-bottom: 10px;">
              <div style="margin-top: 10px;">
                <span>Gene A</span>
                <el-input placeholder="e.g. ERBB2" style="margin-top: 10px;margin-bottom: 5px;"></el-input>
                <span>Input a gene symbol or id.</span>
              </div>
              <div style="margin-top: 10px;">
                <span @click="isShowgeneAction" class="t-span">Normalized by gene (optional)</span>
                <el-input v-if="showgene" style="margin-top: 10px;margin-bottom: 5px;"></el-input>
              </div>
              <div style="margin-top: 10px;">
                <span>Methods</span>
                <el-radio-group v-model="menthradio" class="radio-group-vertical">
                    <el-radio style="margin-bottom: 10px;" :label="1">Overall Survival</el-radio>
                    <el-radio :label="2">Disease Free Survival (RFS)</el-radio>
                </el-radio-group>
              </div>
              <div style="margin-top: 10px;">
                <span>Group Cutoff</span>
                <el-radio-group v-model="cutoffradio" class="radio-group-vertical">
                    <el-radio  :label="1">Median</el-radio>
                    <el-radio style="margin: 10px 0;" :label="2">Quartile</el-radio>
                    <el-radio :label="3">Custom</el-radio>
                </el-radio-group>
                <el-row :gutter="20" style="margin-top: 10px;">
                    <el-col :span="12">
                        <div>
                            <span>Cutoff-High(%)</span>
                            <el-input style="margin-top: 5px;"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                      <div>
                        <span>Cutoff-Low(%)</span>
                        <el-input style="margin-top: 5px;"></el-input>
                      </div>
                    </el-col>
                </el-row>

              </div>
            </div> -->
            <!-- <div v-if="radio == 2" style="margin-bottom: 10px;"> -->
                <div>
                    <div class="set-a-div">
                        <div><span>Gene Set A</span></div>
                        <div style="display: flex;align-items: center;flex-direction: row;">
                            <div class="custom-btn-div">
                              <span @click="handleUploadAction">Upload</span>
                              <input type="file" @change="handleFileChange" style="display: none;" ref="fileInput"/>
                               
                            </div>
                            <div class="custom-btn-div" @click="handleResetAction">Reset</div>
                        </div>
                    </div>
                    <div>
                        <el-input rows="4" v-model="fileContent" type="textarea" placeholder="e.g. ERBB2"></el-input>
                        <span>Input a list of signature genes.</span>
                    </div>
                </div>
                <div style="margin-top: 15px;">
                    <span>Suggested Signatures</span>
                    <div class="list-div">
                      <span v-for="(item,index) in leftArr" :key="index" :class="item.isclick ? 'select-p' :''" @click="handleSelectPAction(index)">{{ item.name }}</span>
                    </div>
                    <div style="margin-top: 10px;">
                        <span @click="sigShowgeneAction" class="t-span">Normalized by gene (optional)</span>
                        <el-input v-if="sigshowgene" style="margin-top: 10px;margin-bottom: 5px;"></el-input>
                    </div>
                </div>
                <div style="margin-top: 10px;">
                    <span>Methods</span>
                    <el-radio-group v-model="sigmenthradio" class="radio-group-vertical">
                        <el-radio style="margin-bottom: 10px;" :label="1">ConsensusClusterPlusAnalysis</el-radio>
                        <el-radio :label="2">NMFAnalysis</el-radio>
                    </el-radio-group>
              </div>
              <div style="margin-top: 10px;">
                <!-- <span>Group Cutoff</span>
                <el-radio-group v-model="sigcutoffradio" class="radio-group-vertical">
                    <el-radio  :label="1">Median</el-radio>
                    <el-radio style="margin: 10px 0;" :label="2">Quartile</el-radio>
                    <el-radio :label="3">Custom</el-radio>
                </el-radio-group> -->
                <el-row :gutter="20" style="margin-top: 10px;">
                    <el-col :span="12">
                        <div>
                            <span>Cutoff-High(%)</span>
                            <el-input style="margin-top: 5px;" placeholder="Cutoff-High"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                      <div>
                        <span>Cutoff-Low(%)</span>
                        <el-input style="margin-top: 5px;" placeholder="Cutoff-Low"></el-input>
                      </div>
                    </el-col>
                </el-row>

              </div>




            <!-- </div> -->

        </el-col>
        <el-col :span="8">
          <div v-if="sigmenthradio == '1'">
            <el-form :inline="true" :model="consenObj" class="el-form-div" label-position="left" label-width="90px">
              <el-form-item label="maxK">
                <el-input class="input-select-style" v-model="consenObj.maxK" type="number" placeholder="maxK"></el-input>
              </el-form-item>
              <el-form-item label="reps">
                <el-input class="input-select-style" v-model="consenObj.reps" type="number" placeholder="reps"></el-input>
              </el-form-item>
              <el-form-item label="pItem">
                <el-input class="input-select-style" v-model="consenObj.pItem" type="number" placeholder="pItem"></el-input>
              </el-form-item>
              <el-form-item label="clusterNum">
                <el-input class="input-select-style" v-model="consenObj.clusterNum" type="number" placeholder="clusterNum"></el-input>
              </el-form-item>
              <el-form-item label="clusterAlg">
                <el-select class="input-select-style" v-model="consenObj.clusterAlg" placeholder="请选择">
                  <el-option  v-for="(item,index) in clusterAlgObj" :key="index" :value="item.value" :label="item.name"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="distance">
                <el-select class="input-select-style" v-model="consenObj.distance" placeholder="请选择">
                  <el-option  v-for="(item,index) in distanceObj" :key="index" :value="item.value" :label="item.name"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="pFeature">
                <el-input class="input-select-style" v-model="consenObj.pFeature" type="number" placeholder="pFeature"></el-input>
              </el-form-item>
              <el-form-item label="seed">
                <el-input class="input-select-style" v-model="consenObj.seed" type="number" placeholder="seed"></el-input>
              </el-form-item>
              <el-form-item label="plot">
                <el-select class="input-select-style" v-model="consenObj.plot" placeholder="请选择">
                  <el-option  v-for="(item,index) in plotObj" :key="index" :value="item.value" :label="item.name"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>

          <div  v-if="sigmenthradio == '2'">
            <el-form :inline="true" :model="NMFAObj" class="el-form-div" label-position="left" label-width="90px">
              <el-form-item label="clusterNum">
                <el-input class="input-select-style" v-model="NMFAObj.clusterNum"  placeholder="clusterNum" oninput ="value=value.replace(/[^0-9.]/g,'')"></el-input>
              </el-form-item>
              <el-form-item label="method">
                <el-select class="input-select-style" v-model="NMFAObj.method" placeholder="请选择">
                  <el-option  v-for="(item,index) in methodArr" :key="index" :value="item.value" :label="item.name"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="nrun">
                <el-input class="input-select-style" v-model="NMFAObj.nrun" type="number" placeholder="nrun"></el-input>
              </el-form-item>
              <el-form-item label="seed">
                <el-input class="input-select-style" v-model="NMFAObj.seed" type="number" placeholder="seed"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <!-- <div style="display: flex;flex-direction: column;">
            <span>Hazards Ratio (HR)</span>
            <el-select v-model="ratioselect" style="margin: 10px 0;">
              <el-option label="YES" value="1"></el-option>
              <el-option label="NO" value="2"></el-option>
            </el-select>
            <span>Calculate the hazards ratio based on Cox PH Model.</span>
          </div>
          <div style="display: flex;flex-direction: column;">
            <span>95% Confidence Interval</span>
            <el-select v-model="intervalselect" style="margin: 10px 0;">
              <el-option label="YES" value="1"></el-option>
              <el-option label="NO" value="2"></el-option>
            </el-select>
            <span>Add the 95% CI as dotted line.</span>
          </div>
          <div style="display: flex;flex-direction: column;">
            <span>Axis Units</span>
            <el-select v-model="timerselect" style="margin: 10px 0;">
              <el-option label="Months" value="1"></el-option>
              <el-option label="Days" value="2"></el-option>
            </el-select>
            <div style="display: flex;flex-direction: row;justify-content: space-between;">
              <div style="display: flex;flex-direction: column;">
                <span>High Group</span>
                <el-color-picker style="margin-top: 5px;width: 50px;height: 20px;" v-model="highcolor1"></el-color-picker>
              </div>
              <div style="display: flex;flex-direction: column;">
                <span>Low Group</span>
                <el-color-picker style="margin-top: 5px;" v-model="lowcolor1"></el-color-picker>
              </div>
            </div>
          </div> -->
        </el-col>
        <el-col :span="8">
          <!-- <el-radio-group v-model="rightradio">
              <el-radio :label="1">Multiple Datasets</el-radio>
              <el-radio :label="2">Subtype Filter</el-radio>
          </el-radio-group> -->
          <!-- <div v-if="rightradio == 1" style="margin-bottom: 10px;"> -->
            <div>
            
               <div style="display: flex;flex-direction: row;margin: 5px 0;">
                <span>Datasets Selection</span>
                <span style="color: #4bc7a4;cursor: pointer;">(Cancer name)</span>
               </div>
               <span>Tips: Ctrl/Command + A: select all cancer types.</span>
               <div class="list-div" style="margin-bottom: 8px;">
                  <span v-for="(item,index) in rightArr" :key="index" :class="item.isselect ? 'select-p' : ''" @click="handleRightListAction(index)">{{ item.name }}</span>
               </div>
              <div class="right-ad-rest-style">
                <span>Datasets</span>
                <div style="display: flex;flex-direction: row;">
                  <div class="add-all-style" @click="handleRightAddAllAction">
                    <span>AddAll</span>
                  </div>
                  <div class="add-style" @click="handleRightAddAction">
                    <span>Add</span>
                  </div>
                  <div class="reset-style" @click="handleRightResetAction">
                    <span>Reset</span>
                  </div>
                </div>
              </div>
              <el-input v-model="rightTextareas" type="textarea" style="margin: 8px 0;" rows="4"></el-input>
              <div><span>The plot axis-x order will follow the list.</span></div>
              <el-button class="upBtns" @click="plotAction">Plot</el-button>
              <el-button class="upBtns" @click="downloadAction">Down</el-button>
            </div>
          <!-- </div> -->
          <!-- <div v-if="rightradio == 2" style="margin-bottom: 10px;">
            <div style="margin: 5px 0;">
              <span>Datasets Selection</span>
              <span style="color: #4bc7a4;cursor: pointer;"> (Cancer name)</span>
            </div>
            <el-select v-model="rightDatasetsselect" style="width: 100%;">
              <el-option value="1" label="ACC"></el-option>
            </el-select>
            <div style="display: flex;flex-direction: row;justify-content: space-between;margin: 5px 0;">
              <span>Subtypes</span>
              <el-checkbox v-model="checked">Select/Deselect AllSubtypes</el-checkbox>
            </div>
            <el-checkbox-group v-model="checkedCities" style="display: flex;flex-direction: column;">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
            <el-button style="background-color: #4bc7a4;color: #fff;margin-top: 10px;">Plot</el-button>
          </div> -->
        </el-col>
    </el-row>
  </div>
</template>

<script>
import helpVue from './help.vue'

import {rihtListModel,analysisModel,analysisNMFModel,downloadModel} from '@/api/gepia.js'

export default {
  data(){
    return{
        radio:2,
        showgene:false,
        menthradio:1,
        cutoffradio:1,
        sigshowgene:false,
        sigmenthradio:1,
        sigcutoffradio:1,

        ratioselect:'1',
        intervalselect:'1',
        timerselect:'1',

        highcolor1:'#0076ff',
        lowcolor1:'#0076ff',

        rightradio:1,

        rightDatasetsselect:'1',
        checked:false,
        checkedCities:[],
        cities:['CIMP-high (18)', 'CIMP-intermediate (27)', 'CIMP-low (31)'],

        showHideHelp:false,
        rightTextareas:'',
        fileContent:null, // 获取的文件内容
        rightSelectPath:'',
      
        leftArr:[
          {name:'Naïve T-Cell',isclick:false,sub:'CCR7\nLEF1\nTCF7\nSELL'},
          {name:'Effector T-Cell',isclick:false,sub:'CX3CR1\nFGFBP2\nFCGR3A'},
          {name:'Effector memory T-Cell',isclick:false,sub:'PDCD1\nDUSP4\nGZMK\nGZMA\nIFNG'},
          {name:'Central memory T-Cell',isclick:false,sub:'CCR7\nSELL\nIL7R'},
          {name:'Resident memory T-Cell',isclick:false,sub:'CD69\nITGAE\nCXCR6\nMYADM'},
          {name:'Exhausted T-Cell',isclick:false,sub:'HAVCR2\nTIGIT\nLAG3\nPDCD1\nCXCL13\nLAYN'},
          {name:'Resting Treg T-Cell',isclick:false,sub:'FOXP3\nIL2RA'},
          {name:'Effector Treg T-Cell',isclick:false,sub:'FOXP3\nCTLA4\nCCR8\nTNFRSF9'},
          {name:'Th1-like',isclick:false,sub:'CXCL13\nHAVCR2\nIFNG\nCXCR3\nBHLHE40\nCD4'}
        ],

        rightArr:[
          // {name:'ACC',isselect:false},
          // {name:'BLCA',isselect:false},
          // {name:'BRCA',isselect:false},
          // {name:'CESC',isselect:false},
          // {name:'CHOL',isselect:false},
          // {name:'COAD',isselect:false},
          // {name:'DLBC',isselect:false},
          // {name:'ESCA',isselect:false},
          // {name:'GBM',isselect:false},
          // {name:'HNSC',isselect:false},
          // {name:'KICH',isselect:false},
          // {name:'KIRC',isselect:false},
          // {name:'KIRP',isselect:false},
          // {name:'LAML',isselect:false},
          // {name:'LGG',isselect:false},
          // {name:'LIHC',isselect:false},
          // {name:'LUAD',isselect:false},
          // {name:'LUSC',isselect:false},
          // {name:'MESO',isselect:false},
          // {name:'OV',isselect:false},
          // {name:'PAAD',isselect:false},
          // {name:'PCPG',isselect:false},
          // {name:'PRAD',isselect:false},
          // {name:'READ',isselect:false},
          // {name:'SARC',isselect:false},
          // {name:'SKCM',isselect:false},
          // {name:'STAD',isselect:false},
          // {name:'TGCT',isselect:false},
          // {name:'THCA',isselect:false},
          // {name:'THYM',isselect:false},
          // {name:'UCEC',isselect:false},
          // {name:'UCS',isselect:false},
          // {name:'UVM',isselect:false}
        ],
       

        consenObj:{
          maxK:'9',
          reps:'1000',
          pItem:'0.8',
          clusterNum:'2',
          clusterAlg:'km',
          distance:'pearson',
          pFeature:'1',
          seed:'123456',
          plot:'png',
          gene:'',
          expFiles:''
         
        },
        clusterAlgObj:[
          {name:'hc',value:'hc'},
          {name:'pam',value:'pam'},
          {name:'km',value:'km'}
        ],
        distanceObj:[
          {name:'pearson',value:'pearson'},
          {name:'spearman',value:'spearman'},
          {name:'euclidean',value:'euclidean'},
          {name:'binary',value:'binary'},
          {name:'maximum',value:'maximum'},
          {name:'canberra',value:'canberra'},
          {name:'minkowski',value:'minkowski'},
        ],
        plotObj:[
          {name:'png',value:'png'}
        ],

        NMFAObj:{
          clusterNum:'2',
          method:'brunet',
          nrun:'10',
          seed:'123456',
          gene:'',
          expFiles:''
        },
        methodArr:[
          {name:'brunet',value:'brunet'},
          {name:'lee',value:'lee'},
          {name:'nsNMF',value:'nsNMF'},
          {name:'offset',value:'offset'},
          {name:'pe-nmf',value:'pe-nmf'},
          {name:'snmf/r',value:'snmf/r'},
          {name:'snmf/l',value:'snmf/l'},
          {name:'ls-nmf',value:'ls-nmf'},
        ]









    }
  },
  methods:{
    isShowgeneAction(){
        this.showgene = !this.showgene
    },
    sigShowgeneAction(){
        this.sigshowgene = !this.sigshowgene
    },
    showOrHideHelpAction(){
      this.showHideHelp = !this.showHideHelp
    },
    handleUploadAction(){
      this.$refs.fileInput.click();
    },
    handleFileChange(event){
      const file = event.target.files[0];
      if (!file) {
        return;
      }
 
      const reader = new FileReader();
      reader.onload = (e) => {
        this.fileContent = e.target.result;
      };
      reader.readAsText(file);
    },
    handleResetAction(){
      this.fileContent = ''
      this.leftArr.map(res =>{
          res.isclick = false
      })
    },
    handleSelectPAction(number){
      var item = this.leftArr[number]
      if(item.isclick){return}
      else{
        this.leftArr.map(res =>{
          res.isclick = false
        })
        item.isclick = true
        this.fileContent = item.sub

      }
    },
    handleRightListAction(index){
      var item = this.rightArr[index]
      if(item.isselect){return}
      else{
        this.rightArr.map(res =>{
          res.isselect = false
        })
        item.isselect = true

      }
    },
    handleRightAddAction(){
      this.rightArr.map(item =>{
        if(item.isselect){
          if(this.rightTextareas.length == 0){
            this.rightTextareas = item.name
            this.rightSelectPath = item.path
          }
          else{
            this.rightTextareas = this.rightTextareas  + '\n'   +  item.name
            this.rightSelectPath = this.rightSelectPath + '\n' + item.path
          }
  
        }
      })
    },
    handleRightResetAction(){
      this.rightTextareas = ''
      this.rightSelectPath = ''
      this.rightArr.map(res =>{
          res.isselect = false
      })
    },
    handleRightAddAllAction(){
      this.rightArr.map(item =>{
        if(this.rightTextareas.length == 0){
            this.rightTextareas = item.name
            this.rightSelectPath = item.path
          }
          else{
            this.rightTextareas = this.rightTextareas  + '\n'   +  item.name
            this.rightSelectPath = this.rightSelectPath + '\n' + item.path
          }

      })
    },
// 右侧列表
    getRightListModel(){
      rihtListModel().then((result) => {
        // console.log(result)
        if(result.code == 0){
          var dataArr = []
          dataArr  = result.data
          
          for(let i = 0;  i < dataArr.length ; i++){
            var names_str = dataArr[i].name
            var name_arrs = names_str.split('.')
            console.log(names_str)
            this.rightArr.push({name:name_arrs[0],isselect:false,path:dataArr[i].path})
          }
        }
      }).catch((err) => {
        
      });
    },
    // analysis 事件
    handleAnalysis(){
    
      this.consenObj.gene = this.fileContent
      this.consenObj.expFiles = this.rightTextareas
      analysisModel(this.consenObj).then((result) => {
       
      }).catch((err) => {
        
      });

    },
  // analysisNMF 事件
  handleAnalysisNMF(){
    
    this.NMFAObj.gene = this.fileContent
    this.NMFAObj.expFiles = this.rightSelectPath//this.rightTextareas
    analysisNMFModel(this.NMFAObj).then((result) => {
      
    }).catch((err) => {
      
    });

  },

    plotAction(){
      if(this.sigmenthradio == '1'){
         this.handleAnalysis()
      }
      else{
        this.handleAnalysisNMF()
      }
    },
    downloadAction(){
      downloadModel().then((result) => {
        
      }).catch((err) => {
        
      });
    }


  },
  components:{
    helpVue
  },
  mounted(){
   this.getRightListModel()
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

.center-div:hover{
  color: #333;
  cursor: pointer;
}

.t-span{
    color: #4bc7a4;
}
.t-span:hover{
    color: #333;
    cursor: pointer;
}

.radio-group-vertical {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
}

.set-a-div{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

.custom-btn-div{
    border: 1px solid #E6E9ED;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    padding: 0 8px;
    font-size: 13px;
    
}
.custom-btn-div:hover{
  cursor: pointer;
  background-color: rgba($color: #999, $alpha: 0.6);
}
}

.list-div{
    // width: 100%;
    height: 200px;
    border: 1px solid #E6E9ED;
    border-radius: 2px;
    margin-top: 5px;
    overflow: hidden;
    overflow-y: auto;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    // p{
    //   cursor: pointer;
    // }
    span{
      cursor: pointer;
      margin-top: 5px;
    }
    .select-p{
      background-color: rgba($color: #0076ff, $alpha: 0.6);
    }
}

.right-ad-rest-style{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .add-all-style{
    border: 1px solid #E6E9ED;
    border-radius: 2px;
    padding: 0 5px;
    cursor: pointer;
    margin-right: 5px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .add-style{
    border: 1px solid #E6E9ED;
    border-radius: 2px;
    padding: 0 5px;
    cursor: pointer;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .reset-style{
    border: 1px solid #E6E9ED;
    border-radius: 2px;
    padding: 0 5px;
    margin-left: 5px;
    cursor: pointer;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.el-form-div{

  margin-left: 0.2rem;
  .input-select-style{
    width: 12rem;
  }
}

.upBtns{
  background-color: #4bc7a4;
  color: #fff;
  margin-top: 10px;
}

// ::v-deep .el-color-picker--medium .el-color-picker__trigger{
//   width: 200px;
//   height: 30px;
// }
::v-deep .el-color-picker__trigger{
  width: 80px;
  height: 30px;
}
::v-deep .el-color-picker__icon {
    display: none;
}


</style>