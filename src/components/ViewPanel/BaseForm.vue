<template>
  <div>
    <draggable
      :list="data"
      v-bind="dragOptions"
      :disabled="!edit"
      @start="dragging = true"
      @end="onEnd"
      group="component"
    >
      <FormItem
        v-for="(item, index) in data"
        :key="index"
        :attrs="item.attrs"
        :type="item.type"
        :edit="edit"
        :del="del"
        @on-click="onClickItem(index)"
        @on-del="onDel(index)"
      />
    </draggable>
    <a-empty v-if="!data.length && edit" description="暂无组件，可在左侧组件列表中点击添加组件" />
    <AttrPanel :visible="visible" @close="onClose" />
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import AttrPanel from '../AttrPanel/index'
import FormItem from './FormItem'
import { mapState, mapMutations } from 'vuex'

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
    draggable,
    FormItem,
    AttrPanel
  },
  data () {
    return {
      visible: false,
      dragging: false
    }
  },
  watch: {
    data: {
      handler () {
        this.UPDATE_FORM_LIST(this.baseForm)
      },
      deep: true
    }
  },
  computed: {
    ...mapState({
      type: state => state.vfc.type,
      baseForm: state => state.vfc.baseForm
    }),
    dragOptions () {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      }
    }
  },
  methods: {
    ...mapMutations(['SET_ACTIVE_COMPONENT', 'DEL_COMPONENT', 'UPDATE_FORM_LIST']),
    // 表单元素单击
    onClickItem (index) {
      // 编辑中才可展开属性面板
      if (this.edit && this.del) {
        this.SET_ACTIVE_COMPONENT(index)
        this.visible = true
      }
    },
    onClose () {
      this.visible = false
      this.SET_ACTIVE_COMPONENT()
    },
    // 删除
    onDel (index) {
      console.log(index)
      this.DEL_COMPONENT(index)
    },
    // 拖拽排序
    onEnd (e) {
      this.dragging = false
      this.UPDATE_FORM_LIST(this.baseForm)
    }
  }

}
</script>
<style lang="less" scoped>
</style>
