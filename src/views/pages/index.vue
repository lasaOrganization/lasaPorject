<template>
<div>
    <top></top>
    <router-view name="nav"></router-view>
    <div>
    <leftNav></leftNav>
    </div>
</div>
</template>

<script>
import top from '@/components/top'
import leftNav from '@/components/leftNav'
export default {
  components: {top, leftNav},
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>