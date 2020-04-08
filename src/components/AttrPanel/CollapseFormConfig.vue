<template>
  <CommonFormConfig>
    <a-form-item label="嵌套表单层级配置">
      <a-tree
        class="form-config-tree"
        draggable
        @dragenter="onDragEnter"
        @drop="onDrop"
        :treeData="treeData"
        showLine
      >
        <a-icon slot="switcherIcon" type="down" />
        <template slot="title" slot-scope="{title, key}">
          <div class="vui-flex vui-flex-middle">
            <span class="vui-flex-item">{{title}}</span>
            <a-icon type="delete"></a-icon>
          </div>
        </template>
      </a-tree>
    </a-form-item>
  </CommonFormConfig>
</template>

<script>
import { mapState } from 'vuex'
import CommonFormConfig from './CommonFormConfig'
export default {
  components: {
    CommonFormConfig
  },
  data () {
    return {
      treeData: []
    }
  },
  computed: {
    ...mapState({
      collapseForm: state => {
        const initData = obj => {
          obj.forEach(item => {
            if (item.children && item.children.length) {
              initData(item.children)
            }
            item.slots = {
              title: 'title'
            }
            item.scopedSlots = {
              title: 'title',
              key: 'key',
              view: 'view',
              children: 'children'
            }
          })
        }
        initData(state.vfc.collapseForm)
        return state.vfc.collapseForm
      }
    })
  },
  created () {
    this.treeData = this.collapseForm
    console.log(this.treeData)
  },
  methods: {
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
      const data = [...this.treeData]

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
        });
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
      this.treeData = data
    }
  }
}
</script>

<style lang="less" scoped>
.form-config-tree {
  /deep/ .ant-tree-node-content-wrapper {
    width: 100%;
  }
}
</style>
