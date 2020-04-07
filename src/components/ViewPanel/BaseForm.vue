<template>
  <div>
    <FormItem
      v-for="(item, index) in data"
      :key="index"
      :options="item.options"
      :type="item.type"
      :edit="edit"
      @click.native="onClickItem(index)"
    />
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
    ...mapMutations(['SET_ACTIVE_COMPONENT']),
    // 表单元素单击
    onClickItem (index) {
      if (this.edit) {
        this.SET_ACTIVE_COMPONENT(index)
        this.visible = true
      }
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
