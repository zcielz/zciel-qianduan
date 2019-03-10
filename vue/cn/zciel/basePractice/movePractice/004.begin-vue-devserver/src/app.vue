<template>
    <div>
        我们的一个test1测试程序<br/>
        {{text}}
        输入:<input type="text" v-model="text">
        <ul>
            <li v-for="person in list">
                {{person.name}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        //配置
        // 类似$scope.xxx = '初始化'
        // data:function(){

        // },
        data() {
            return {
                text: '打搅好',
                list: [{name: 'jack'}, {name: 'rose'}]
            }
        }
    }
</script>
<style>

</style>