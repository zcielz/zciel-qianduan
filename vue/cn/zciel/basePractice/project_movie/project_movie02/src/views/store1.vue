<template>
  <div>
    <a-input :value="inputValue" @input="handleInput"/>
    <a-show :content="inputValue"></a-show>
    <p>{{ inputValue }}</p>
  </div>
</template>

<script>
  import AInput from '_c/AInput.vue'
  import AShow from '_c/AShow.vue'

  export default {
    name: "store1",
    data() {
      return {
        inputValue: ''
      }
    },
    components: {
      AInput,
      AShow
    },
    methods: {
      handleInput(value) {
        this.inputValue = value
      }
    }
  }
</script>

<style scoped>

</style>
