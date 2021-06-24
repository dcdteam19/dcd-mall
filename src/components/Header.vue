<template>
    <div id="header">
        {{title}}
    </div>
</template>
<script>
export default{
    name:'Header',
    data(){
        let title='登录'
        return{
            title
        }
    }
}
</script>
<style scoped>
    #header{
        width: 100%;
        background:  #FFFFFF;
        height: 44px;
        box-shadow: 0 0.5px 0 0 #E6E6E6;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        font-weight: 400;
        color:#333;
        text-align: center;
        line-height: 44px;
    }
</style>