<template>
  <div>
    <!-- 两个兄弟组件的通行， a-input 和 a-show通信 -->
    <!--<a-input v-model="inputValue"></a-input>-->
    <a-input @input="handleInput"/>
    {{inputValue}}
    <a-show :content="inputValue"/>
    <p>{{ appName }}</p>
    <p>{{userName}}</p>
  </div>
</template>

<script>
  import AInput from '_c/AInput.vue'
  import AShow from '_c/AShow.vue'
  // import {mapState} from 'vuex'
  //上面这个叫做结构赋值 等价下面
  /*import vuex from 'vuex'
  const mapState = vuex.mapState*/
  //使用命名空间
  import {createNamespacedHelpers} from 'vuex'

  const {mapState} = createNamespacedHelpers('user')

  export default {
    name: "store",
    data() {
      return {
        inputValue: ''
      }
    },
    components: {
      AShow,
      AInput
    },
    computed: {
      /*...mapState([
        'appName'
      ])*/
      // ...mapState({
      //   appName: state => state.appName,
      //   userName: state => state.user.userName
      // })
      //使用命名空间后
      ...mapState({
        userName: state => state.userName
      }),
      // appName() {
      //   return this.$store.state.appName
      // },
      // userName() {
      //   return this.$store.state.user.userName
      // }
      inputValueLastLetter() {
        return this.inputValue.substr(-1, 1)
      }
    },
    methods: {
      handleInput(val) {
        this.inputValue = val
      }
    }
  }
</script>

<style scoped>

</style>
