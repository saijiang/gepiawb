import request from '@/utils/request'
// 获取验证码
export function getCodeImg() {
    return request({
      url: '/captchaImage',
      headers: {
        isToken: false
      },
      method: 'get',
      timeout: 20000
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