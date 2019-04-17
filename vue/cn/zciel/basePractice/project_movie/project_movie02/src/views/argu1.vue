<template>
  <div>
    {{name}}
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: 'lison'
      }
    },
    beforeRouteUpdate(to, from, next) { //组件路由发生变化，组件被复用的时候调用
      console.log(to.name, from.name);
    }
  }
</script>

<style scoped>

</style>
