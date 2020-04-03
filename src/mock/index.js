import Mock from 'mockjs'
import getValidRulesList from './getValidRulesList'
import addValidRule from './addValidRule'

Mock.mock('/getValidRulesList', getValidRulesList)
Mock.mock('/addValidRule', addValidRule)
