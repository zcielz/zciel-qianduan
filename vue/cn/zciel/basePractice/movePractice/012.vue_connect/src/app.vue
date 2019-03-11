<template>
    <div>
        <subVue></subVue>
        <button @click="listen">父类接电话</button>
    </div>
</template>
<script>
    //引入连接器
    import connect from './connector.js';

    export default {
        data() {
            return {
                text2: 'hha'
            }
        },
        methods: {
            listen() {
                connect.$on('phone', function (msg) {
                    console.log(msg);
                })
            }
        }
    }
</script>
<style>
    .red {
        background-color: red;
    }

    .green {
        background-color: yellowgreen;
    }

    .blue {
        background-color: skyblue;
    }

    .pink {
        background-color: hotpink;
    }
</style>