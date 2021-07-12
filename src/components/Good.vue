<template>
    <div class="good-wrapper">
        <div class="good-box" v-for="i in good" :key="i">
            <router-link :to="'/good?good_id='+i.good_id">
                <div>
                    <van-image
                    width="169px"
                    height="169px"
                    fit="fill"
                    lazy-load
                    :src="i.good_image"
                    />
                    <div class="good-name">
                        {{i.good_name}}
                    </div>
                    <div class="price-wrapper">
                        <div class="good-price">
                            <span class="dollar">￥</span>
                            <span class="price">{{i.price}}</span>
                        </div>
                        <div class="good-origin-price">￥{{i.origin_price}}</div> 
                    </div>  
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"Good",
    props:[
        "good"
    ]
}
</script>

<style lang="scss" scoped>
    .good-wrapper{
        display: flex;
        flex-wrap:wrap;
        justify-content:flex-start;
        width: 95%;
        margin-left:3%;
        .good-box:nth-child(odd){
            margin-right: 7px;
        }
        .good-box{
            height: 253px;
            width: 169px;
            margin-bottom:7px; 
            background: #F6F6F6;
            border-radius: 4px 4px 4px 4px;
            overflow: hidden;
            .good-name{
                overflow: hidden;
                margin-top:10px;
                height: 36px;
                width: 151px;
                margin-left: 12px;
                font-size: 14px;
                color:#333;
                letter-spacing: 0;
                font-weight: 500;
            }
            .price-wrapper{
                display: flex;
                justify-content: space-between;
                .good-price{
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
                    font-size: 12px;
                    margin-top:10px;
                    margin-right: 10px;
                    color:#999;
                    text-decoration: line-through;
                    font-weight: 600;
                }
            }
        }
    }
</style>