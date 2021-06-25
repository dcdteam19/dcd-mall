<template>
    <div class="good-wrapper">
        <div class="good-box" v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
            <van-image
            width="169px"
            height="169px"
            fit="fill"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="good-name">123</div>
            <div class="price">￥9.9</div>
            <div class="origin-price">￥20.8</div>   
        </div>
    </div>
</template>

<script>
export default {
    name:"Good"
}
</script>

<style lang="scss" scoped>
    .good-wrapper{
        display: flex;
        flex-wrap:wrap;
        justify-content:center;
        .good-box{
            height: 253px;
            width: 169px;
            margin-right: 7px;
            margin-bottom:7px; 
            background: #F6F6F6;
            border-radius: 4px 4px 4px 4px;
            overflow: hidden;
        }
    }
</style>