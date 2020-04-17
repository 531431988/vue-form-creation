import Mock from 'mockjs'
import getValidRulesList from './getValidRulesList'
// import addValidRule from './addValidRule'
import getFormTable from './getFormTable'
import './getFormTemplate'

Mock.mock('/getValidRulesList', getValidRulesList)
// Mock.mock('/addValidRule', addValidRule)
Mock.mock('/getFormTable', getFormTable)
