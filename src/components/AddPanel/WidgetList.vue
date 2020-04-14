<template>
  <div class="widget-list">
    <p class="title">{{title}}</p>
    <a-row :gutter="5">
      <draggable :list="data" v-bind="dragOptions" @start="dragging = true" @end="onEnd">
        <a-col :span="12" v-for="(item, index) in data" :key="index" v-if="item.attrs">
          <a-button block size="small" @click.self.stop="onClick(item)" class="tl mb5">
            <a-icon :type="item.icon"></a-icon>
            {{item.name}}
          </a-button>
        </a-col>
      </draggable>
    </a-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { antvComponents } from '@/config/form'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: {
    draggable
  },
  data () {
    return {
      dragging: false
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        disabled: false,
        ghostClass: 'drag-move',
        group: { name: 'component', pull: 'clone', put: false },
        sort: false
      }
    }
  },
  methods: {
    // 单击添加
    onClick (item) {
      this.add(item)
    },
    onEnd (e) {
      // console.log(e)
    },
    add (item) {
      if (item.attrs) {
        this.$store.commit('ADD_COMPONENT', item)
      } else {
        this.$message.info('通宵开发中……')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.widget-list {
  padding: 10px;
  margin-bottom: 20px;
  .title {
    margin: 5px 0;
  }
}
</style>
