<template>
  <div>
    <h1>about</h1>
    {{ food }}
  </div>
</template>

<script>
  export default {
    name: "About",
    props: {
      food: {
        type: String,
        default: 'zz'
      }
    }
  }
</script>

<style scoped>

</style>
