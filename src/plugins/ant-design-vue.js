import Vue from 'vue'
import { Layout, Row, Col, Form, Input, Button, Card, Divider, Icon, Drawer, BackTop, notification } from 'ant-design-vue'
const { Header, Content, Sider, Footer } = Layout
const { Meta } = Card
const FormItem = Form.Item
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
  Button,
  Meta,
  Card,
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
