<template>
<div class="leftNav">
    <ul>
        <li @click="go(1)" :class="currents[0]"><i class="icon iconfont icon-yonghu"></i><span>用户</span></li>
        <li @click="go(2)" :class="currents[1]"><i class="icon iconfont icon-diannao"></i><span>终端</span></li>
        <li @click="go(3)" :class="currents[2]"><i class="icon iconfont icon-qunzu1"></i><span>供电区域</span></li>
        <li @click="go(4)" :class="currents[3]"><i class="icon iconfont icon-qunzu"></i><span>群组</span></li>
        <li @click="go(5)" :class="currents[4]"><i class="icon iconfont icon-shezhi1"></i><span>管理区域</span></li>
    </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      currents: ['', '', '', '', ''],
      navArr: ['/pages/user', '/pages/terminal', '/pages/powerArea', '/pages/group', '/pages/managerArea']
    }
  },
  methods: {
    go (i) {
      this.currents.forEach((element, index, arr) => {
        arr[index] = ''
      })
      this.$set(this.currents, (i - 1), 'current')
      this.$router.push(this.navArr[i - 1])
    }
  }
}
</script>

<style scoped>
.leftNav{
    width:100%;
    word-wrap: break-word
}
li{
    writing-mode: tb-rl;
    background-color: #66CCCC;
    border-radius: 8px 0 0 8px;
    height: 120px;
    padding: 0 5px;
    letter-spacing: 5px;
    cursor: pointer;
    text-align: center;
}
li i{
    padding-bottom: 5px;
}
.current{
  color:#E2955A!important;
  background-color: #D0ECE7;
}
</style>