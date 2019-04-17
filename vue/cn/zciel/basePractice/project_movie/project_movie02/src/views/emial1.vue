<template>
  <div class="email">
    <button @click="handleClick">按我</button>
  </div>
</template>

<script>
  export default {
    name: "emial1",
    methods: {
      handleClick() {
        this.$emit('on-click', 'hello')
      }
    },
    mounted() {
      this.$on('on-click', mes => {
        console.log(mes);
      })
    }
  }

</script>

<style scoped>

</style>
