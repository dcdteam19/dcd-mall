<template>
    <div id="header">
        <v-return class="return"></v-return>
        {{title}}
    </div>
</template>
<script>
import vReturn from './Return'
export default{
    name:'Header',
    components:{
        vReturn
    },
    props:[
        "title"
    ]
}
</script>
<style scoped>
    #header{
        position: relative;
        width: 100%;
        background:  #FFFFFF;
        height: 44px;
        /* box-shadow: 0 0.5px 0 0 #E6E6E6; */
        font-family: PingFangSC;
        font-size: 16px;
        font-weight: 400;
        color:#333;
        text-align: center;
        line-height: 44px;
        z-index: 99;
    }
    .return{
        position:absolute;
        margin:0;
        top:10px;
        left:8px;
    }
</style>