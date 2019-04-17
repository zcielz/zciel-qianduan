<template>
  <div>
    <h1>home</h1>
    <!-- 通过编程式的导航 编程控制页面的跳转返回 -->
    <button @click="handleClick('back')"> 返回上一页</button>
    <button @click="handleClick('push')"> 返回下一页</button>
    <button @click="handleClick('replace')"> 替换</button>
    <button @click="handleClick('goargu')">跳转到argu</button>
    {{ food }}
  </div>
</template>

<script>
  export default {
    name: "Home",
    props: {
      food: {
        type: String,
        default: 'apple'
      }
    },
    beforeRouteEnter(to, from, next) {  //to ,跳转哪个页面，代表当前路由对象； from 从哪里跳转过里啊，next()接下来跳转哪里去
      //这个页面还没渲染
      /*console.log('to' + to.name);
      console.log('from' + from.name);*/
      next();
      //如果想用this 使用
      /*next(vm => {
        console.log(vm);
      })*/
    },
    beforeRouteLeave(to, from, next) { //在即将离开的时候调用这个方法
      /*const leave = confirm('你确定要离开吗?');
      if (leave) next()
      else next(false)*/
      next()
    },
    methods: {
      /*handleClick() {
           // this.$router.go(-1) //返回上一页 router 路由实例
        this.$router.back()
      }*/
      /*handleClick(type) {
        if(type === 'back') this.$router.back()
        else if(type === 'push') this.$router.push('/parent')
      }*/
      handleClick(type) {
        if (type === 'back') this.$router.back()
        else if (type === 'push') this.$router.push({
          name: 'parent',
          query: {
            name: 'lison' //添加参数
          }
        })
        else if (type === 'replace') {
          this.$router.replace({
            name: 'parent'
          })
        }
        /* else if (type === 'goargu') {
           this.$router.push({
             name: 'argu',
             params: {
               name: 'lison' //添加参数
             }
           })
         }*/
        else if (type === 'goargu') {
          const name = 'lison'
          this.$router.push({
            path: `/argu/${name}`
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
