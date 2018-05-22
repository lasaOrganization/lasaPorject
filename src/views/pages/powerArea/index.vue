<template>
<div>
  <div class="content">
    <div class="content_left">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" highlight-current default-expand-all></el-tree>
      <div class="bottom">
        <p class="bottom_title">{{changed.label}}</p>
        <div class="bottom_title_circle">专变</div>
        <div class="bottom_title_content"><span class="title_tag">用户</span><span>{{changed.value.zBian.user}}</span><span class="title_tag">采集点</span><span>{{changed.value.zBian.colPoint}}</span></div>
        <div class="bottom_title_circle">公变</div>
        <div class="bottom_title_content"><span class="title_tag">用户</span><span>{{changed.value.gBian.user}}</span><span class="title_tag">采集点</span><span>{{changed.value.gBian.colPoint}}</span></div>
        <div class="bottom_title_circle">低压</div>
        <div class="bottom_title_content"><span class="title_tag">用户</span><span>{{changed.value.dVoltage.user}}</span><span class="title_tag">采集点</span><span>{{changed.value.dVoltage.colPoint}}</span></div>
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
      changed: {value: {'zBian': {'user': '3721', 'colPoint': '4759'}, 'gBian': {'user': '3721', 'colPoint': '4759'}, 'dVoltage': {'user': '3721', 'colPoint': '4759'}},
        label: '国网拉萨供电公司'},
      data: [{
        value: {'zBian': {'user': '3721', 'colPoint': '4759'}, 'gBian': {'user': '3721', 'colPoint': '4759'}, 'dVoltage': {'user': '3721', 'colPoint': '4759'}},
        label: '国网拉萨供电公司',
        children: [{
          value: {'zBian': {'user': '21', 'colPoint': '49'}, 'gBian': {'user': '37', 'colPoint': '49'}, 'dVoltage': {'user': '21', 'colPoint': '479'}},
          label: '洋湖电场',
          children: [{
            value: {'zBian': {'user': '721', 'colPoint': '479'}, 'gBian': {'user': '321', 'colPoint': '49'}, 'dVoltage': {'user': '31', 'colPoint': '49'}},
            label: '洋湖电场子电场1'
          }, {
            value: {'zBian': {'user': '21', 'colPoint': '59'}, 'gBian': {'user': '721', 'colPoint': '49'}, 'dVoltage': {'user': '21', 'colPoint': '59'}},
            label: '洋湖电场子电场2'
          }, {
            value: {'zBian': {'user': '321', 'colPoint': '759'}, 'gBian': {'user': '21', 'colPoint': '459'}, 'dVoltage': {'user': '21', 'colPoint': '47'}},
            label: '洋湖电场子电场3'
          }]
        },
        {
          value: {'zBian': {'user': '37231', 'colPoint': '47'}, 'gBian': {'user': '32721', 'colPoint': '479'}, 'dVoltage': {'user': '31', 'colPoint': '59'}},
          label: '纳金电场',
          children: [{
            value: {'zBian': {'user': '121', 'colPoint': '359'}, 'gBian': {'user': '13', 'colPoint': '472'}, 'dVoltage': {'user': '31', 'colPoint': '4713'}},
            label: '纳金电场子电场1'
          }]
        },
        {
          value: {'zBian': {'user': '31', 'colPoint': '49'}, 'gBian': {'user': '31', 'colPoint': '49'}, 'dVoltage': {'user': '31', 'colPoint': '47'}},
          label: '直孔电场',
          children: [{
            value: {'zBian': {'user': '721', 'colPoint': '49'}, 'gBian': {'user': '31', 'colPoint': '47'}, 'dVoltage': {'user': '21', 'colPoint': '59'}},
            label: '直孔电场子电场1'
          }]
        }]
      }, {
        value: {'zBian': {'user': '31', 'colPoint': '49'}, 'gBian': {'user': '31', 'colPoint': '59'}, 'dVoltage': {'user': '21', 'colPoint': '49'}},
        label: '其他国家电场',
        children: [{
          value: {'zBian': {'user': '21', 'colPoint': '49'}, 'gBian': {'user': '37', 'colPoint': '479'}, 'dVoltage': {'user': '37', 'colPoint': '49'}},
          label: '其他国家电场某子电场',
          children: [{
            value: {'zBian': {'user': '37', 'colPoint': '49'}, 'gBian': {'user': '31', 'colPoint': '49'}, 'dVoltage': {'user': '37', 'colPoint': '49'}},
            label: '其他国家电场某子电场的子电场'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
      this.changed = data
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
.content_left .el-tree{
  height: 400px;
  overflow-y: scroll;
}
.bottom{
  text-align: left;
  border-radius: 13px;
  border: 3px solid #01B0B2;
}
.bottom_title{
   border-radius: 13px;
  background-color: #01B0B2;
  color:white;
  text-align: left;
  padding-left: 10px;
}
.bottom_title_circle{
border: 1px solid #01B0B2;
border-radius: 13px;
display: inline-block;
padding: 5px;
color: teal;
font-weight: 700;
letter-spacing: 5px;
}
.bottom_title_content{
  display: flex;
}
.title_tag{
  display: block;
  width: 20%;
  padding: 3px;
  background-color: #93D2CA;
}
span{
  display: block;
  width: 30%;
  padding: 3px;
  background-color: white;
}

</style>