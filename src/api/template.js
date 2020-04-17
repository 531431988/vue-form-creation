
import { axios } from '@/libs/request'

// 获取表单模板列表
const getFormTable = () => {
  return axios({
    url: '/getFormTable',
    method: 'get'
  })
}

// 查询模板数据
const getFormTemplate = params => {
  return axios({
    url: '/getFormTemplate',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
export {
  getFormTable,
  getFormTemplate
}
