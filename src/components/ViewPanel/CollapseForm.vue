<template>
  <div>
    <a-collapse v-model="activeKey" expandIconPosition="right" accordion>
      <a-collapse-panel :header="item.title" v-for="(item) in data" :key="item.key">
        <CollapseForm
          :data="item.children"
          :edit="edit"
          v-if="item.children && item.children.length"
        />
        <template v-else>
          <BaseForm :data="item.view" :edit="edit" />
          <a-button
            :type="activeCollapse === item.key ? 'primary' : ''"
            size="small"
            v-if="edit"
            slot="extra"
            @click.stop="onClick(item)"
          >{{activeCollapse === item.key ? '编辑中' : '开始编辑'}}</a-button>
        </template>
      </a-collapse-panel>
    </a-collapse>
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
      this.INIT_FORM_VIEW([])
      this.SET_ACTIVE_COLLAPSE(key)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
