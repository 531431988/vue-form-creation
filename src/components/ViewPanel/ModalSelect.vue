<template>
  <a-modal title="表单模式选择" width="40%" :closable="false" :visible="visible" class="modal-select">
    <a-row :gutter="12">
      <a-col :span="12" v-for="(item, index) in list" :key="index">
        <Card :data="item" @click.native="onSelect(index)" />
      </a-col>
    </a-row>
    <div class="tc" slot="footer">
      <a-button type="primary" @click="onOk">确定</a-button>
    </div>
  </a-modal>
</template>

<script>
const Card = {
  props: ['data'],
  template: `
    <a-card :class="{active: data.checked}" hoverable>
      <img
        alt="example"
        :src="data.src"
        slot="cover"
      />
      <a-card-meta :title="data.title">
        <template slot="description">{{data.desc}}</template>
      </a-card-meta>
    </a-card>
  `
}
export default {
  props: ['visible'],
  components: {
    Card
  },
  data () {
    return {
      list: [{
        src: require('@/assets/imgs/base-form.png'),
        title: '基础表单',
        desc: '常规表单，单层无嵌套',
        checked: true
      }, {
        src: require('@/assets/imgs/collapse-form.png'),
        title: '高级表单',
        desc: '可实现多层折叠嵌套的表单',
        checked: false
      }],
      active: 0
    }
  },
  methods: {
    // 选择模式
    onSelect (index) {
      this.list.map(item => Object.assign(item, { checked: !item.checked }))
      this.active = index
    },
    onOk () {
      this.$emit('on-click')
      this.$store.commit('SET_TYPE', this.active)
    }
  }
}
</script>

<style lang="less" scoped>
.modal-select {
  .active {
    overflow: hidden;
    border: 2px solid @primary-color;
  }
}
</style>
