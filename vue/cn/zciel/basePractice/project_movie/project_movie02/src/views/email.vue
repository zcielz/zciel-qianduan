<template>
  <div class="email">
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
  export default {
    name: "email",
    mounted() {
      console.log(this.$bus)
    },
    methods: {
      handleClick() {
        this.$bus.$emit('on-click', 'hello')
      }
    }
  }
</script>

<style scoped>
  .email {
    border: 1px solid green;
  }

</style>
