<template>
<div>
  <div class="content">
    <div class="content_left">
      <el-table :data="tableData" border stripe @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="state" label="状态">
          <template slot-scope="scoped">
            <div class="circle" :class="scoped.row.state==='运行'?'green':'red'"></div>
          </template>
        </el-table-column>
        <el-table-column prop="terminalAddress" label="终端地址"></el-table-column>
        <el-table-column prop="addressName" label="采集点名称"></el-table-column>
      </el-table>
      <div class="content_bottom">
        <div class="content_bottom_item">
          <el-checkbox v-model="changeMultiple">多选</el-checkbox>
          <el-select v-model="valueType" placeholder="请选择" style="width:30%">
            <el-option v-for="(i, j) in valueTypes" :key="j" :value="i" :label="i"></el-option>
          </el-select>
          <el-input v-model="valueSearch" style="width:30%"></el-input>
          <el-button icon="el-icon-search" type="primary" size="mini" style="width:10%"></el-button>
        </div>
        <div class="content_bottom_item">
          <el-checkbox v-model="isReserve">保留</el-checkbox>
          <el-button type="primary">删除</el-button>
          <el-button type="primary">高级查询</el-button>
          <div style="display:inline-block;color:teal">已经选择{{multipleSelection.length}}条</div>
        </div>
        <div class="content_bottom_item2"><span class="content_bottom_item_title">终端类型</span>{{multipleSelection[multipleSelection.length-1].type}}</div>
        <div class="content_bottom_item2"><span class="content_bottom_item_title">终端局号</span>{{multipleSelection[multipleSelection.length-1].terminalCode}}</div>
        <div class="content_bottom_item2"><span class="content_bottom_item_title">终端地址</span>{{multipleSelection[multipleSelection.length-1].terminalAddress}}</div>
        <div class="content_bottom_item2"><span class="content_bottom_item_title">采集点编号</span>{{multipleSelection[multipleSelection.length-1].code}}</div>
        <div class="content_bottom_item2"><span class="content_bottom_item_title">终端状态</span>{{multipleSelection[multipleSelection.length-1].state}}</div>
      </div>
    </div>
    <div class="content_right">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {'state': '运行', 'type': '负荷控制终端', 'terminalAddress': '00645', 'code': '110001391', 'terminalCode': '0521432434', 'addressName': '文化厅'},
        {'state': '运行', 'type': '负荷控制终端', 'terminalAddress': '00646', 'code': '110001392', 'terminalCode': '0521432435', 'addressName': '区总工会'},
        {'state': '终止', 'type': '负荷控制终端', 'terminalAddress': '00647', 'code': '110001393', 'terminalCode': '0521432436', 'addressName': '拉鲁北侧'},
        {'state': '运行', 'type': '负荷控制终端', 'terminalAddress': '00648', 'code': '110001394', 'terminalCode': '0521432437', 'addressName': '文化厅'},
        {'state': '终止', 'type': '负荷控制终端', 'terminalAddress': '00649', 'code': '110001395', 'terminalCode': '0521432438', 'addressName': '区总工会'},
        {'state': '运行', 'type': '负荷控制终端', 'terminalAddress': '00650', 'code': '110001396', 'terminalCode': '0521432439', 'addressName': '文化厅'},
        {'state': '终止', 'type': '负荷控制终端', 'terminalAddress': '00651', 'code': '110001397', 'terminalCode': '0521432432', 'addressName': '拉鲁北侧'},
        {'state': '运行', 'type': '负荷控制终端', 'terminalAddress': '00652', 'code': '110001398', 'terminalCode': '0521432433', 'addressName': '区总工会'}
      ],
      multipleSelection: [],
      changeMultiple: true,
      valueType: '',
      valueTypes: ['台区编号', '状态', '终端地址', '采集点名称', '终端局号', '终端类型'],
      valueSearch: '',
      isReserve: true
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.multipleSelection.push(this.tableData[0])
      console.log(this.multipleSelection)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
</script>

<style scoped>
.content{
  display: flex;
  width: 100%;
  height: 100%;
}
.content_left{
  width: 400px;
}
.content_left .el-table{
  height: 400px;
  overflow-y: scroll;
}
.circle{
  border: 1px solid black;
  border-radius:  12px;
  height: 12px;
  width: 12px;
  display: inline-block;
}
.green{
  background-color: #01F802;
}
.red{
  background-color: #F90503;
}
.content_bottom{
  background-color: #D4F2EE;
  padding: 2px;
}
.content_bottom_item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.content_bottom_item2{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top:5px;
  border-top: 1px solid teal;
  background-color: white;
}
.content_bottom_item_title{
  color:teal;
}
</style>