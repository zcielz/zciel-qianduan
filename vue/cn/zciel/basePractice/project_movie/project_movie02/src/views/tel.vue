<template>
  <div class="tel">
    {{message}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: ''
      }
    },
    mounted() {
      //时间监听
      this.$bus.$on('on-click', mes => {
        this.message = mes;
      })
    }
  }
</script>

<style scoped>
  .tel {
    border: 1px solid red;
  }

</style>
