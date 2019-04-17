<template>
  <input @input="handleInput" :value="value"/>
</template>

<script>
  export default {
    name: "AInput",
    props: {
      value: {
        type: [String, Number],
        defalut: ''
      }
    },
    methods: {
      handleInput(event) {
        const value = event.target.value
        this.$emit('input', value)
      }
    }
  }
</script>

<style scoped>

</style>
