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

//下载
export function downloadModel() {
  return request({
    url: '/R/download?delete=false',
    headers: {
      isToken: false
    },
    method: 'get'
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