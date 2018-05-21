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
        {'name': '综合查询', 'href': '/pages/user/querySyn'},
        {'name': '数据分析', 'href': '/pages/user/dataAna'},
        {'name': '工单查询', 'href': '/pages/user/queryWork'},
        {'name': '报表管理', 'href': '/pages/user/managerRep'},
        {'name': '多表合一管理', 'href': '/pages/user/managerAIO'}
      ]
    }
  }
}
</script>

<style scoped>
</style>