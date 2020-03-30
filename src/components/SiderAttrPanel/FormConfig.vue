<template>
  <a-form class="pd10">
    <a-form-item label="表单布局">
      <a-radio-group v-model="formLayout" buttonStyle="solid">
        <a-radio-button value="horizontal">水平</a-radio-button>
        <a-radio-button value="vertical">垂直</a-radio-button>
        <a-radio-button value="inline">内联</a-radio-button>
      </a-radio-group>
    </a-form-item>

    <a-form-item label="表单宽度">
      <a-input-number :min="1" :max="100" v-model="width" placeholder="1-24" />
    </a-form-item>

    <a-form-item label="标签的文本对齐方式">
      <a-radio-group v-model="align" buttonStyle="solid">
        <a-radio-button value="left">左对齐</a-radio-button>
        <a-radio-button value="right">右对齐</a-radio-button>
      </a-radio-group>
    </a-form-item>

    <a-form-item label="标签的文本占比">
      <a-input-number :min="1" :max="24" v-model="labelCol.span" placeholder="1-24" />
    </a-form-item>

    <a-form-item label="表单控件占比">
      <a-input-number :min="1" :max="24" v-model="wrapperCol.span" placeholder="1-24" />
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      formLayout: 'horizontal',
      width: 100,
      align: '',
      labelCol: {
        span: 2
      },
      wrapperCol: {
        span: 22
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
</style>
