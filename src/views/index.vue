<template>
  <div>
    <router-link to="/add">
      <a-button type="primary">添加模板</a-button>
    </router-link>
    <a-table :columns="columns" :dataSource="tableData" :pagination="false">
      <template v-slot:type="{type}">{{type ? '嵌套' : '基础'}}</template>
      <template v-slot:action="{type}">
        <span>
          <router-link :to="`/edit?id=${type}`">编辑</router-link>
          <a-divider type="vertical" />
          <router-link to="/view">详情</router-link>
        </span>
      </template>
    </a-table>
  </div>
</template>

<script>
import { getFormTable } from '@/api/template'
export default {
  components: {
  },
  data () {
    return {
      columns: [{
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '表单类型',
        key: 'type',
        scopedSlots: { customRender: 'type' }
      }, {
        title: '操作',
        key: 'action',
        scopedSlots: { customRender: 'action' }
      }],
      tableData: []
    }
  },
  created () {
    getFormTable().then(res => {
      const { data } = res
      this.tableData = data
    })
  },
  methods: {
  }

}
</script>
<style lang="less" scoped>
</style>
