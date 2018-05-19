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
</style>
