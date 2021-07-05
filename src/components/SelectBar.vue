<template>
    <div class="select-bar">
        <div class="select-name">{{name}}</div>
        <div class="select-value">{{value}}</div>
        <div class="arrow" >
            <img :src="arrow" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name:String,
        value:String
    },
    data(){
        const arrow=require('../assets/image/list_arrow_ic@3x.png')
        return{
            arrow
        }
    }
}
</script>

<style lang="scss" scoped>
.select-bar{
    height:37px;
    width: 100%;
    line-height: 37px;
    display: flex;
    justify-content: space-between;
    .select-name{
        width:33px;
        margin-left: 10px;
        font-size: 14px;
        color: #999999;
        letter-spacing: 0;
        font-weight: 500;
    }
    .select-value{
        width:273px;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
        font-weight: 500;
    }
    .arrow{
        width:36px;
        img{
            height: 12px;
            width: 12px;
        }
    }
}
</style>