<template>
  <FormConfig>
    <a-form-item label="嵌套表单层级配置">
      <a-tree
        class="form-config-tree"
        :draggable="draggable"
        :treeData="collapseForm"
        :expandedKeys="expandCollapseKey"
        showLine
        defaultExpandParent
        autoExpandParent
        :blockNode="true"
        @dragenter="onDragEnter"
        @drop="onDrop"
        @expand="onExpand"
      >
        <a-icon slot="switcherIcon" type="caret-down" />
        <template slot="title" slot-scope="item">
          <div class="vui-flex vui-flex-middle">
            <a-input
              :defaultValue="item.title"
              size="small"
              @mousemove.native.stop
              @mousedown.native.stop
              @change="onChange($event, item)"
              @focus="draggable = false"
              @blur="draggable = true"
              class="vui-flex-item mr30"
            />
            <a-button type="link" size="small" shape="circle" @click="onAdd(item)">
              <a-icon type="plus" v-color="$color.primary"></a-icon>
            </a-button>
            <a-button type="link" size="small" shape="circle" @click="onDel(item)">
              <a-icon type="delete" v-color="$color.error"></a-icon>
            </a-button>
          </div>
        </template>
      </a-tree>
      <div class="tc">
        <a-button type="primary" :size="formConfig.size" @click="onAddParent">添加层级</a-button>
      </div>
    </a-form-item>
  </FormConfig>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { createUID, addCollapseFormChild } from '@/libs/utils'
import FormConfig from './FormConfig'
export default {
  components: {
    FormConfig
  },
  data () {
    return {
      draggable: true
    }
  },
  computed: {
    ...mapState({
      expandCollapseKey: state => state.vfc.expandCollapseKey,
      formConfig: state => {
        const { type, baseFormConfig, collapseFormConfig } = state.vfc
        return type === 0 ? baseFormConfig : collapseFormConfig
      },
      collapseForm: state => state.vfc.collapseForm
    })
  },
  created () {
  },
  methods: {
    ...mapMutations(['EDIT_COLLAPSE_FORM_NAME', 'DEL_COLLAPSE_FORM', 'INIT_FORM_VIEW', 'ADD_COLLAPSE_FORM', 'SET_EXPAND_COLLAPSE']),
    onDragEnter (info) {
      console.log(info)
      // expandedKeys 需要受控时设置
      // this.expandedKeys = info.expandedKeys
    },
    onDrop (info) {
      console.log(info)
      const dropKey = info.node.eventKey
      const dragKey = info.dragNode.eventKey
      const dropPos = info.node.pos.split('-')
      const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])
      const loop = (data, key, callback) => {
        data.forEach((item, index, arr) => {
          if (item.key === key) {
            return callback(item, index, arr)
          }
          if (item.children) {
            return loop(item.children, key, callback)
          }
        })
      }
      const data = [...this.collapseForm]

      // Find dragObject
      let dragObj
      loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1)
        dragObj = item
      })
      if (!info.dropToGap) {
        // Drop on the content
        loop(data, dropKey, item => {
          item.children = item.children || []
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.push(dragObj)
        })
      } else if (
        (info.node.children || []).length > 0 && // Has children
        info.node.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
      ) {
        loop(data, dropKey, item => {
          item.children = item.children || []
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.unshift(dragObj)
        })
      } else {
        let ar
        let i
        loop(data, dropKey, (item, index, arr) => {
          ar = arr
          i = index
        })
        if (dropPosition === -1) {
          ar.splice(i, 0, dragObj)
        } else {
          ar.splice(i + 1, 0, dragObj)
        }
      }
      this.INIT_FORM_VIEW({
        component: data,
        type: 'change'
      })
    },
    // 折叠或展开
    onExpand (expandedKeys) {
      this.SET_EXPAND_COLLAPSE(expandedKeys)
    },
    // 修改名称
    onChange (e, item) {
      this.EDIT_COLLAPSE_FORM_NAME({ key: item.key, name: e.target.value })
    },
    // 添加父级
    onAddParent () {
      let component = JSON.parse(JSON.stringify(this.collapseForm))
      component.push(addCollapseFormChild(createUID('collapse')))
      this.INIT_FORM_VIEW({
        component,
        type: 'change'
      })
    },
    // 添加子级
    onAdd (item) {
      this.ADD_COLLAPSE_FORM(item.key)
    },
    // 删除
    onDel (item) {
      this.$confirm({
        title: '删除确认',
        content: '您确定要删除此项吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          this.DEL_COLLAPSE_FORM(item.key)
          this.$message.success('删除成功')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.form-config-tree {
  /deep/ li .ant-tree-node-content-wrapper {
    padding: 0;
    height: auto;
    line-height: 1.5;
    cursor: move;
  }
}
</style>
