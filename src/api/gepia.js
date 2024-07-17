import request from '@/utils/request'




// analysis 分析
export function analysisModel(paramess) {
    return request({
      url: '/R/analysis',
      headers: {
        isToken: false
      },
      method: 'post',
      data:paramess
    
    })
}
//NMF 分析
export function analysisNMFModel(paramess) {
  return request({
    url: '/R/analysisNMF',
    headers: {
      isToken: false
    },
    method: 'post',
    data:paramess
  })
}







  // 右侧列表
export function rihtListModel() {
    return request({
      url: '/R/list',
      headers: {
        isToken: false
      },
      method: 'post'
    })
  }