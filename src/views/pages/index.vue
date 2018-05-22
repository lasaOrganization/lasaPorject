<template>
<div>
    <top></top>
    <router-view name="nav"></router-view>
    <div class="box">
        <div class="box_left">
          <leftNav></leftNav>
        </div>
        <div class="box_right">
          <router-view></router-view>
        </div>
    </div>
    <bottom></bottom>
</div>
</template>

<script>
import top from '@/components/top'
import leftNav from '@/components/leftNav'
import bottom from '@/components/bottom'
export default {
  components: {top, leftNav, bottom},
  data () {
    return {}
  }
}
</script>

<style scoped>
.box{
  display: flex;
}
</style>