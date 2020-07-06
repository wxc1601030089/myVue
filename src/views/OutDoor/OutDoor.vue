<template>
  <div class = "OutDoor">
    <el-table
      :data="data"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="uid"
        label="UID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "OutDoor",
      data(){
        return{
          columns: [
            {
              title: '设备UID',
              key: 'uid'
            },
            {
              title: '出入库时间',
              key: 'time'
            },
            {
              title: '设备类型',
              key: 'type'
            },
            {
              title: '状态',
              key: 'state'
            }
          ],
          data: [
            {
              uid: 'ae86',
              time: '2016-10-03',
              type: '冲压模具',
              state: '出库'
            },
            {
              uid: 'ae86',
              time: '2016-10-03',
              type: '冲压模具',
              state: '出库'
            },
            {
              uid: 'ae86',
              time: '2016-10-03',
              type: '冲压模具',
              state: '入库'
            },
            {
              uid: 'ae86',
              time: '2016-10-03',
              type: '冲压模具',
              state: '出库'
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
