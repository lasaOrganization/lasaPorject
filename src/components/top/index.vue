<template>
<div class="top">
    <img src="../../../static/img/topLeft.png" alt="" class="img"/>
    <div class="info"><span>版本:{{version}}</span><span><i class="icon iconfont icon-portrait"></i>欢迎您:{{name}}[当前在线人数{{num}}人]</span></div>
    <div class="nav">
      <ul class="nav_top">
        <li @click="go(1)" :class="currents[0]"><i class="icon iconfont icon-ai-book"></i><span>基础应用</span></li>
        <li @click="go(2)" :class="currents[1]"><i class="icon iconfont icon-msnui-computer"></i><span>高级应用</span></li>
        <li @click="go(3)" :class="currents[2]"><i class="icon iconfont icon-shezhi"></i><span>运行管理</span></li>
        <li @click="go(4)" :class="currents[3]"><i class="icon iconfont icon-tongji"></i><span>统计查询</span></li>
        <li @click="go(5)" :class="currents[4]"><i class="icon iconfont icon-guanli"></i><span>系统管理</span></li>
      </ul>
      <div class="nav_down">
         <ul>
           <li>监控台</li>
           <li>主页</li>
           <li>修改密码</li>
           <li>锁定</li>
           <li @click="$cookie.set('userName', '', -1);$router.push('/xxx')">注销</li>
           <li>技术支持</li>
           <li>公告</li>
           <li>帮助</li>
         </ul>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      version: '',
      name: '',
      num: 0,
      currents: ['current', '', '', '', ''],
      activeName: 1
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.version = 'Ver4.01'
      this.name = this.$cookie.get('userName') ? this.$cookie.get('userName') : '您还未登录哦'
      this.num = 8
    },
    go (i) {
      this.currents.forEach((element, index, arr) => {
        arr[index] = ''
      })
      this.$set(this.currents, (i - 1), 'current')
    }
  }
}
</script>

<style scoped>
.top{
  width: 100%;
  background-color: #018B8D;
  display: flex;
}
.img{
  border:0;vertical-align: top;
  width: 30%;
}
.info{
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  color: yellow;
}
.nav{
  width: 40%;
}
.nav_top{
  height: 60%;;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}
.nav_down{
  margin-left: 10%;
  width: 70%;
  height: 40%;
  margin-top: 10px; 
}
.nav_down>ul{
  display: flex;
  align-items:flex-end;
  color: white;
  font-size: 0.8rem;
  background-color: #05B7BC;
  border-radius: 10px;
  justify-content: space-around;
  cursor: pointer;
  padding-top: 0.5%;
}
.icon{
  font-size: 1.3rem;
}
.current{
  color:yellow!important;
}
</style>