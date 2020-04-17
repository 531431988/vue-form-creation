import Vue from 'vue'
import {
  Layout,
  Row,
  Col,
  Form,
  FormModel,
  Input,
  InputNumber,
  Select,
  Radio,
  Checkbox,
  Switch,
  Button,
  Tag,
  Card,
  Table,
  Tabs,
  Tree,
  Collapse,
  Divider,
  Icon,
  Modal,
  Drawer,
  BackTop,
  Tooltip,
  Empty,
  message,
  notification
} from 'ant-design-vue'
const { Header, Content, Sider, Footer } = Layout
const FormItem = Form.Item
const FormModelItem = FormModel.Item
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group
const SelectOption = Select.Option
const { Meta } = Card
const { TabPane } = Tabs
const CollapsePanel = Collapse.Panel

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
  FormModel,
  FormModelItem,
  Input,
  InputNumber,
  Select,
  SelectOption,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Switch,
  Button,
  Tag,
  Meta,
  Card,
  Table,
  Tabs,
  TabPane,
  Tree,
  Collapse,
  CollapsePanel,
  Divider,
  Icon,
  Modal,
  Drawer,
  BackTop,
  Tooltip,
  Empty
]
components.map(component => {
  Vue.use(component)
})

Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$destroyAll = Modal.destroyAll
Vue.prototype.$message = message
Vue.prototype.$Form = Form
