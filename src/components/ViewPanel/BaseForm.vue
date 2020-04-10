<template>
  <div>
    <FormItem
      v-for="(item, index) in data"
      :key="index"
      :options="item.options"
      :type="item.type"
      :edit="edit"
      :del="del"
      @on-click="onClickItem(index)"
      @on-del="onDel(index)"
    />
    <a-empty v-if="!data.length && edit" description="暂无组件，可在左侧组件列表中点击添加组件" />
    <AttrPanel :visible="visible" @close="visible = false" />
  </div>
</template>

<script>
import AttrPanel from '../AttrPanel/index'
import FormItem from './FormItem'
import { mapMutations } from 'vuex'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    edit: {
      type: Boolean,
      default: true
    },
    del: {
      type: Boolean,
      default: true
    }
  },
  components: {
    FormItem,
    AttrPanel
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    ...mapMutations(['SET_ACTIVE_COMPONENT', 'DEL_COMPONENT']),
    // 表单元素单击
    onClickItem (index) {
      // 编辑中才可展开属性面板
      if (this.edit && this.del) {
        this.SET_ACTIVE_COMPONENT(index)
        this.visible = true
      }
    },
    // 删除
    onDel (index) {
      console.log(index)
      this.DEL_COMPONENT(index)
    }
  }

}
</script>
<style lang="less" scoped>
.ant-layout-content {
  padding: 15px;
  border: 1px solid #ddd;
  border-top: none;
  border-bottom: none;
}
</style>
