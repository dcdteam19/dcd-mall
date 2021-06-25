<template>
    <div class="good-wrapper">
        <div class="good-box" v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
            <van-image
            width="169px"
            height="169px"
            fit="fill"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="good-name">
                这是一段最多显示两行的文字，多余的内容会被省略
            </div>
            <div class="good-price">
                <span class="dollar">￥</span>
                <span class="price">9.9</span>
            </div>
            <div class="good-origin-price">￥20.8</div>   
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
            .good-name{
                overflow: hidden;
                margin-top:10px;
                height: 36px;
                width: 151px;
                margin-left: 9px;
                font-size: 14px;
                color:#333;
                letter-spacing: 0;
                font-weight: 500;
            }
            .good-price{
                display: inline-block;
                margin-top:6px;
                color: #FF9100;
                font-size: 16px;
                font-weight: 900;
                font-family: PingFangSC;
                .dollar{
                    display: inline-block;
                    margin-right:2px;
                    margin-left: 8px;
                    font-size: 12px;
                }
                .price{
                    display: inline-block;
                }
            }
            .good-origin-price{
                display: inline-block;
                margin-left:78px;
                font-size: 12px;
                color:#999;
                text-decoration: line-through;
                font-weight: 600;
            }
        }
    }
</style>