<template>
<div>
    <top></top>
    <router-view name="nav"></router-view>
    <div>
    <el-row>
      <el-col :span="2">
        <leftNav></leftNav>
      </el-col>
      <el-col :span="22">
        <router-view></router-view>
      </el-col>
    </el-row>
    <bottom></bottom>
    </div>
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
</style>