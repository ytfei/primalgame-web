<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { ElPagination } from 'element-plus'

const prefixCls = useNamespace('battlefield-report')
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
]
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <el-table :data="tableData" style="--el-table-border-color: none;--el-table-bg-color: none;--el-table-tr-bg-color: none;--el-table-header-bg-color: none;">
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <div class="pagination">
<!--      <el-pagination />-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'battlefield-report';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  ::v-deep(.el-table__cell) {
    padding: 3px 0;
  }
  background-image: url("src/assets/img/game/resources-back.webp");
  padding: 40px 50px;
  box-sizing: border-box;
  .pagination {
    margin-top: 10px;
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
