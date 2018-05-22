<template>
<div>
  <div class="content">
    <div class="content_left">
      <el-table :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)" height="250" border stripe @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="户名"></el-table-column>
        <el-table-column prop="code" label="户号"></el-table-column>
        <el-table-column prop="orderCode" label="电表序列号"></el-table-column>
      </el-table>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[3, 5, 20, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
      </el-pagination>
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
          <el-button type="primary">删除列表</el-button>
          <el-button type="primary">高级查询</el-button>
          <div style="display:inline-block;color:teal">已经选择{{multipleSelection.length}}条</div>
        </div>
        <div class="content_bottom_item2"><span class="content_bottom_item_title">户名</span>{{multipleSelection[multipleSelection.length-1].code}}</div>
        <div class="content_bottom_item2"><span class="content_bottom_item_title">户号</span>{{multipleSelection[multipleSelection.length-1].name}}</div>
        <div class="content_bottom_item2"><span class="content_bottom_item_title">终端类型</span>{{multipleSelection[multipleSelection.length-1].type}}</div>
        <div class="content_bottom_item2"><span class="content_bottom_item_title">终端局号</span>{{multipleSelection[multipleSelection.length-1].terminalCode}}</div>
        <div class="content_bottom_item2"><span class="content_bottom_item_title">终端地址</span>{{multipleSelection[multipleSelection.length-1].terminalAddress}}</div>
        <div class="content_bottom_item2"><span class="content_bottom_item_title">终端状态</span>{{multipleSelection[multipleSelection.length-1].terminalState}}</div>
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
      multipleSelection: [],
      tableData: [
        {'code': '1013013414', 'name': '洛桑达旦1', 'type': '低压集中路', 'orderCode': '54300130', 'terminalCode': '05012030403434', 'terminalAddress': '05993', 'terminalState': '运行'},
        {'code': '1013013415', 'name': '洛桑达旦2', 'type': '中压集中路', 'orderCode': '54300131', 'terminalCode': '05012030403435', 'terminalAddress': '05994', 'terminalState': '运行'},
        {'code': '1013013416', 'name': '洛桑达旦3', 'type': '高压集中路', 'orderCode': '54300132', 'terminalCode': '05012030403436', 'terminalAddress': '05995', 'terminalState': '终止'},
        {'code': '1013013417', 'name': '洛桑达旦4', 'type': '低压集中路', 'orderCode': '54300133', 'terminalCode': '05012030403437', 'terminalAddress': '05996', 'terminalState': '运行'},
        {'code': '1013013419', 'name': '洛桑达旦5', 'type': '中压集中路', 'orderCode': '54300134', 'terminalCode': '05012030403438', 'terminalAddress': '05997', 'terminalState': '终止'},
        {'code': '1013013420', 'name': '洛桑达旦6', 'type': '高压集中路', 'orderCode': '54300135', 'terminalCode': '05012030403439', 'terminalAddress': '05998', 'terminalState': '运行'}
      ],
      currentPage: 1,
      pageSize: 3,
      changeMultiple: true,
      valueType: '',
      valueTypes: ['台区编号', '状态', '终端地址', '采集点名称', '终端局号', '终端类型'],
      valueSearch: ''
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.multipleSelection.push(this.tableData[0])
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
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