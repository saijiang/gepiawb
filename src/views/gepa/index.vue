<template>
  <div class="contain">
     <div class="top-title-div">
        <span>Survival Analysis</span>
     </div>
     <div class="infor-mes-div">
        <span>In this pane, you can perform survival analysis based on the expression status of one gene or a multi-gene signature and plot a Kaplan-Meier curve. Some gene signature lists are provided.</span>
     </div>
     <div class="bottom-infor-contain">
        <span style="color: #0076ff;">Example</span>
        <div class="bottom-mess-div">
            <div class="top-button-div">
                <div class="one-div"></div>
                <div class="two-div"></div>
                <div class="last-div">
                    <!-- <div class="btns-div" :style="btnsflag == '1' ? btnClickStyle() : ''" @click="btnClickOne">
                        <span>Survival Map</span>
                    </div>
                    <div class="btns-div" :style="btnsflag == '2' ? btnClickStyle() : ''" @click="btnClickTwo">
                        <span>Most Differential Survival Genes</span>
                    </div> -->
                    <div class="btns-div" :style="btnsflag == '3' ? btnClickStyle() : ''" @click="btnClickThree">
                        <span>Survival Analysis </span>
                    </div>
                </div>
            </div>
            <analysisVue v-if="btnsflag == '3'"></analysisVue>
            <genesVue v-if="btnsflag == '2'"></genesVue>
            <mapVue v-if="btnsflag == '1'"></mapVue>
        </div>
     </div>
  </div>
</template>

<script>
import analysisVue from './components/analysis.vue'
import genesVue from './components/genes.vue'
import mapVue from './components/map.vue'

export default {
   data(){
    return{
       btnsflag:'3'
    }
   },
   methods:{
    btnClickOne(){
      this.btnsflag = '1'
    },
    btnClickTwo(){
      this.btnsflag = '2'
    },
    btnClickThree(){
      this.btnsflag = '3'
    },
    btnClickStyle(){
        return{
            'border-bottom': 'none',
            'border-right': '5px solid #E6E9ED',
            'color':'#333',
            'background-color':'#fff'
        }
    }
   },
   components:{
    analysisVue,
    genesVue,
    mapVue
   }


}
</script>

<style lang="scss" scoped>

    .contain{
      
        height: 100%;
        background-color: #F7F7F7;
        padding: 0 15px;
    }

    .top-title-div{
        font-size: 2rem;
        font-weight: 600;
        width: 50%;
        border-bottom: 1px solid #E6E9ED;
        box-sizing: border-box;
        // margin-top: 1rem;
        padding-top: 15px;
        padding-bottom: 10px;
        padding-left: 10px;
        color: #73879C;
    }

    .infor-mes-div{
        padding: 10px;
        color: #73879C;
        font-size: 13px;
        font-weight: 400;
        line-height: 1.471;
    }

    .bottom-infor-contain{
        padding: 0 10px;
        .bottom-mess-div{
            border: 1px solid #E6E9ED;
            box-sizing: border-box;
            padding: 10px;
            background-color: #fff;
            min-height: 300px;
            .top-button-div{
                height: 50px;
                border-bottom: 1px #F7F7F7;
                box-sizing: border-box;
                position: relative;
                .one-div{
                    width: 100%;
                    height: 30px;
                    
                }
                .two-div{
                    width: 100%;
                    height: 20px;
                    background-color: #F5F7FA;
                }
                .last-div{
                    width: 100%;
                    height: 40px;
                    background-color:transparent;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    display: flex;
                    flex-direction: row-reverse;
                    .btns-div{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid #E6E9ED;
                        padding: 0 15px;
                        margin-right: 15px;
                        color: #4bc7a4;
                        background-color: #F5F7FA;
                        border-top-right-radius: 5px;
                        border-top-left-radius: 5px;
                    }
                    .btns-div:hover{
                        color: #333333;
                        background-color: #fff;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .btn-active{
        border-bottom: none;
        border-left: 5px solid #E6E9ED;
    }


</style>