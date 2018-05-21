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
        {'name': '计算在线检测', 'href': '/pages/powerArea/computedOnline'},
        {'name': '线损分析', 'href': '/pages/powerArea/lineLoss'},
        {'name': '配变检测分析', 'href': '/pages/powerArea/distribution'},
        {'name': '重点用户检测', 'href': '/pages/powerArea/primaryUser'},
        {'name': '问题交流平台', 'href': '/pages/powerArea/problemPlat'}
      ]
    }
  }
}
</script>

<style scoped>
</style>