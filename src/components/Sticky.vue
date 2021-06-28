<template>
    <div class="sticky-wrapper">
        <div class="shop">
            <img :src="shop" alt="">
            <span>商城</span>
        </div>
        <div class="user">
            <img :src="user" alt="">
            <span>我的</span>
        </div>
    </div>
</template>

<script>

export default {
    name:"Sticky",
    data(){
        let shop=require('../assets/image/shop.jpg')
        let user=require('../assets/image/common_icon_tabbar_my_unselect@2x.png')
        return{
            shop,
            user
        }
    }
}
</script>

<style lang="scss" scoped>
    .sticky-wrapper{
        display: flex;
        justify-content: center;
        height: 82px;
        .shop{
            height: 32px;
            width: 32px;
            position: relative;
            margin-right: 118px;
            margin-top: 5px;
            img{
                height:100%;
                width:100%;
            }
            span{
                display: block;
                position: absolute;
                top:30px;
                left:3px;
                font-size: 10px;
                color: #1F2129;
                letter-spacing: 0;
            }
        }
        .user{
            margin-top: 5px;
            height: 32px;
            width: 32px;
            position: relative;
            img{
                height:100%;
                width:100%;
            }
            span{
                display: block;
                position: absolute;
                top:30px;
                left:4px;
                font-size: 10px;
                color: #1F2129;
                letter-spacing: 0;
            }
        }
    }
</style>