<template>
  <div class="top-tool">
    <a-button type="danger" size="small" class="mr10">清空</a-button>
    <a-button type size="small" class="mr10">预览</a-button>
    <a-button type size="small" class="mr10">导入JSON</a-button>
    <a-button type="primary" size="small" class="mr10" @click="onCreateJSON">生成JSON</a-button>
    <a-button type="primary" size="small" class="mr10" @click="onCreateVue">生成VUE</a-button>
    <a-drawer
      width="40%"
      placement="right"
      :closable="false"
      :visible="visible"
      @close="visible = false"
    >
      <VueView :code="ExCode" />
    </a-drawer>
  </div>
</template>

<script>
import ExCode from '!!raw-loader!./index'
import VueView from './VueView'
export default {
  components: {
    VueView
  },
  data () {
    return {
      visible: false,
      ExCode
    }
  },
  methods: {
    onCreateVue () {
      this.visible = true
      // this.$bus.$emit('on-create-vue')
    },
    onCreateJSON () {
      this.$bus.$emit('on-create-json')
    }
  }
}
</script>

<style lang="less" scoped>
.top-tool {
  padding: 10px 10px 9px;
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid #ddd;
}
</style>
