<template>
  <div>
    <div class="infor-title">
        <p>GEPIA performs overall survival (OS) or disease free survival (DFS, also called relapse-free survival and RFS) analysis based on gene expression. GEPIA uses Log-rank test, a.k.a the Mantel–Cox test, for hypothesis test. Cohorts thresholds can be adjusted, and gene-pairs can be used. The cox proportional hazard ratio and the 95% confidence interval information can also be included in the survival plot.</p>
    </div>
    <div class="title-style">
        <span>Parameters</span>
    </div>
    <div>
       <ul>
        <li class="lin-styles"><strong>Gene:</strong> Input a gene/isoform of interest.</li>
        <li class="lin-styles"><strong>Normalized by gene:</strong> Set the gene/isoform used for normalizing in "Gene" field.</li>
        <li class="lin-styles"><strong>Methods:</strong> Select the OS or DFS survival method.</li>
        <li class="lin-styles"><strong>Axis Units:</strong> Select Month or Day unit for plotting.</li>
        <li class="lin-styles"><strong>Datasets Selection/Datasets:</strong> Select one or multiple cancer types of interest in the "Dataset Selection" field and click "add" to build dataset list in the "Datasets" field. Also, manual input of cancer types split by comma (e.g. COAD,READ) is also acceptable. Meanwhile, users can also choose cancer subtype (For example, the Breast Lumina A subtype) by clicking the "Subtype Filter" check-box.</li>
        <li class="lin-styles"><strong>Color Reverse:</strong> Choose whether to reverse the default color.</li>
        <li class="lin-styles"><strong>Group Cutoff:</strong> Select a suitable expression threshold for splitting the high-expression and low-expression cohorts.</li>
        <li class="lin-styles"><strong>Cutoff-High(%):</strong> Samples with expression level higher than this threshold are considered as the high-expression cohort.</li>
        <li class="lin-styles"><strong>Cutoff-Low(%):</strong> Samples with expression level lower than this threshold are considered the low-expression cohort.</li>
       </ul>
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

.infor-title{
    color: #73879C;
    font-family: "Helvetica Neue", Roboto, Arial, "Droid Sans", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.471;
    padding: 0 50px;
}

.title-style{
    color: #73879C;
    font-family: "Helvetica Neue", Roboto, Arial, "Droid Sans", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.471;
    padding: 0 30px;
}
.lin-styles{
    color: #73879C;
    font-family: "Helvetica Neue", Roboto, Arial, "Droid Sans", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.471;
}
</style>