import Vue from 'vue'
import {
  Layout,
  Row,
  Col,
  Form,
  Input,
  InputNumber,
  Select,
  Radio,
  Button,
  Card,
  Tabs,
  Divider,
  Icon,
  Drawer,
  BackTop,
  notification
} from 'ant-design-vue'
const { Header, Content, Sider, Footer } = Layout
const FormItem = Form.Item
const RadioGroup = Radio.Group
const SelectOption = Select.Option
const { Meta } = Card
const { TabPane } = Tabs

const components = [
  Layout,
  Header,
  Content,
  Sider,
  Footer,
  Row,
  Col,
  Form,
  FormItem,
  Input,
  InputNumber,
  Select,
  SelectOption,
  Radio,
  RadioGroup,
  Button,
  Meta,
  Card,
  Tabs,
  TabPane,
  Divider,
  Icon,
  Drawer,
  BackTop
]
components.map(component => {
  Vue.use(component)
})

Vue.prototype.$notification = notification
Vue.prototype.$Form = Form
