<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
*{
  margin: 0;
  padding: 0;
}
html,body{width: 100%;height: 100%;}
ul,li{
  list-style: none;
}
body{
  background-color: #C6E4E6;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.login{
  .el-form-item__label{
     font-weight: 700; // 登录页标签字体的粗细
  }
  .el-input__inner{
     height: 30px; // 登录页输入框的高度
  }
}
.leftNav{
  .el-icon-arrow-down:before{
    display: none!important;
  }
  .el-submenu__title{
    word-wrap: break-word;
    writing-mode: tb-rl;
    padding-left: 0!important;
  }
}
::-webkit-scrollbar{
    background-color: #F5F5F5;
}
// ::-webkit-scrollbar-track
// {
//     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
//     border-radius: 10px;
//   background-color: #009A99!important;
// }
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color:#009A99;
}


// 被选中节点的颜色
.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
    background-color: #F5E4B4;
}

.el-table th.is-leaf{
  text-align: center;
  background-color: #1CAFAE;
  color: white;
}
// 自定义斑马纹
.el-table__row .el-table__row--striped{
  background-color: #F5FFFE;
}

</style>
