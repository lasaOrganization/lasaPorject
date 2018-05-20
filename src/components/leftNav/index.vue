<template>
<div class="leftNav">
    <ul>
        <li><i class="icon iconfont icon-yonghu"></i><span>用户</span></li>
        <li><i class="icon iconfont icon-diannao"></i><span>终端</span></li>
        <li><i class="icon iconfont icon-qunzu1"></i><span>供电区域</span></li>
        <li><i class="icon iconfont icon-qunzu"></i><span>群组</span></li>
        <li><i class="icon iconfont icon-shezhi1"></i><span>管理区域</span></li>
    </ul>
</div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.leftNav{
    width:30px;
    word-wrap: break-word
}
li{
    writing-mode: tb-rl;
    background-color: #66CCCC;
    border-radius: 8px 0 0 8px;
    height: 120px;
    padding: 0 5px;
    letter-spacing: 5px;
}
li i{
    padding-bottom: 5px;
}
</style>