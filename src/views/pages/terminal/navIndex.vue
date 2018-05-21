<template>
<div><templateNav :navLists="lists"></templateNav></div>
</template>

<script>
import templateNav from '@/components/upsideNav'
export default {
  components: {templateNav},
  data () {
    return {
      lists: [
        {'name': '档案管理', 'href': '/pages/terminal/recordMan'},
        {'name': '终端管理', 'href': '/pages/terminal/terminalMan'},
        {'name': '接口管理', 'href': '/pages/terminal/portMan'},
        {'name': '数据采集管理', 'href': '/pages/terminal/dataCollMan'}
      ]
    }
  }
}
</script>

<style scoped>
</style>