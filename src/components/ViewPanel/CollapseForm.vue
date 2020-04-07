<template>
  <div>
    <a-collapse v-model="activeKey" expandIconPosition="right" v-if="data.length">
      <a-collapse-panel
        :header="item.title"
        v-for="item in data"
        :key="item.key"
        :class="{active: activeCollapse === item.key && edit}"
      >
        <CollapseForm
          :data="item.children"
          :edit="edit"
          v-if="item.children && item.children.length"
        />
        <template v-else>
          <BaseForm :data="item.view" :edit="edit" :del="activeCollapse === item.key" />
          <template slot="extra" v-if="edit">
            <a-button
              v-if="activeCollapse !== item.key"
              type="primary"
              size="small"
              @click.stop="onClick(item)"
            >添加组件</a-button>
            <span class="t-primary" v-else>编辑中（可从左侧组件列表中选择需要添加的组件）</span>
          </template>
        </template>
      </a-collapse-panel>
    </a-collapse>
    <a-empty v-else description="暂无组件，可在左侧组件列表中点击添加组件" />
  </div>
</template>

<script>
import BaseForm from './BaseForm'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CollapseForm',
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
    BaseForm
  },
  data () {
    return {
      activeKey: []
    }
  },
  computed: {
    ...mapState({
      activeCollapse: state => state.vfc.activeCollapse
    })
  },
  methods: {
    ...mapMutations(['INIT_FORM_VIEW', 'SET_ACTIVE_COLLAPSE']),
    onClick (item) {
      const { key } = item
      this.activeKey = [key]
      this.INIT_FORM_VIEW({})
      this.SET_ACTIVE_COLLAPSE(key)
    }
  }
}
</script>

<style lang="less" scoped>
.active {
  border: 2px solid @primary-color !important;
}
</style>
