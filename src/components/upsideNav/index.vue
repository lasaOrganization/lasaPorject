<template>
<div class="upsideNav">
    <div class="wrapper">
    <div v-for="(i, j) in navLists" :class="currents[j]" :key="j" @click="skip(i.href, j)">{{i.name}}<i class="icon iconfont icon-tubiao37"></i>|</div>
    </div>
</div>
</template>

<script>
export default {
  props: ['navLists'],
  data () {
    return {
      currents: ['', '', '', '', '']
    }
  },
  methods: {
    skip (router, index) {
      this.currents.forEach((el, index, arr) => {
        arr[index] = ''
      })
      this.$set(this.currents, index, 'current')
      this.$router.push(router)
    }
  }
}
</script>

<style scoped>
.wrapper{
    text-align: left;
    color: #35AD94;
    cursor: pointer;
}
.wrapper>div{
    display: inline-block;
    margin: 10px 20px;
}
.current{
    color: black!important;
}
</style>