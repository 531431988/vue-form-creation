
import { axios } from '@/libs/request'

// 获取自定义校验规则
const getValidRulesList = () => {
  return axios({
    url: '/getValidRulesList',
    method: 'get'
  })
}
// 新增自定义校验规则
const addValidRule = data => {
  return axios({
    url: '/addValidRule',
    method: 'post',
    data
  })
}

export {
  getValidRulesList,
  addValidRule
}
