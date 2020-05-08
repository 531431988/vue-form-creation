
import { axios } from '@/libs/request'

// 获取表单模板列表
const getProvinces = data => {
  return axios({
    url: '/provinces',
    method: 'post',
    data
  })
}

export {
  getProvinces
}
