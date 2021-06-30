<template>
    <div class="header">
        <v-header :title="title"></v-header>
    </div>
    <div class="body">
        <div class="user-info-wrapper">
            <van-image
            round
            width="60px"
            height="60px"
            fit="fill"
            src=""
            class="user-image"
            />
            <div class="user-name-signature">
                <div class="user-name">
                    懂车小王子
                </div>
                <div class="user-signature">
                    专注于性能、操控、改装、乐趣的汽车视频
                </div>
            </div>
        </div>
        <v-devide></v-devide>
        <div class="user-address-order-wrapper">
            <div class="address-wrapper">
                <img :src="address" alt="" class="icon">
                <span>我的地址</span>
                <img :src="arrow" alt=">" class="arrow">
            </div>
            <div class="order-wrapper">
                <img :src="order" alt="" class="icon">
                <span>我的订单</span>
                <img :src="arrow" alt=">" class="arrow">
            </div>
        </div>
        <v-devide></v-devide>
        <div class="changeAcount">切换账号</div>
    </div>
    <van-sticky :offset-bottom="0" position="bottom">
        <div class="footer">
            <v-sticky></v-sticky>
        </div>
    </van-sticky>
</template>
<script>
import vHeader from '../components/Header.vue'
import vDevide from '../components/Devide.vue'
import vSticky from '../components/Sticky.vue'
export default{
    name:'User',
    components:{
        vHeader,
        vDevide,
        vSticky
    },
    data(){
        const title="我的";
        const arrow=require('../assets/image/more_ic@2x.png');
        const address=require('../assets/image/address.png');
        const order=require('../assets/image/order.png')
        return {
            title,
            arrow,
            address,
            order
        }
    }
}
</script>
<style lang="scss" scoped>
    .header{
        box-shadow: 0 0.5px 0 0 #E6E6E6;
    }
    .body{
        background: #F7F8FC;
        height:auto;
        position:absolute;
        right: 0;
        left:0;
        top:44px;
        bottom:0;
        .user-info-wrapper{
            height:122px;
            background-image: linear-gradient(180deg, #E8ECF7 0%, #FFFFFF 100%);
            display: flex;
            justify-content: space-between;
            align-items: center;
            .user-image{
                margin-left: 16px;
            }
            .user-name-signature{
                width:267px;
                height: 60px;
                margin-right:16px;
                .user-name{
                    font-size: 24px;
                    color: #1F2129;
                    letter-spacing: 0;
                    line-height: 34px;
                    font-weight: 600;
                }
                .user-signature{
                    font-size: 12px;
                    color: #979AA8;
                    letter-spacing: 0;
                    line-height: 18px;
                    font-weight: 400;
                }
            }
        }
        .user-address-order-wrapper{
            height: 112px;
            background: #FFFFFF;
            .address-wrapper,.order-wrapper{
                height: 55.5px;
                border-bottom: 0.5px solid #E6E8F2;
                position:relative;
                .icon{
                    position: absolute;
                    height: 24px;
                    width: 24px;
                    left:13px;
                    top:16px;
                }
                span{
                    position: absolute;
                    top:17px;
                    left:47px;
                    font-size: 16px;
                    color: #1F2129;
                    letter-spacing: 0;
                    line-height: 22px;
                    font-weight: 400;
                }
                .arrow{
                    height:12px;
                    width:12px;
                    position: absolute;
                    right:20px;
                    top:22px;
                }
            }
        }
        .changeAcount{
            height:54px;
            background: #FFFFFF;
            font-size: 16px;
            color: #1F2129;
            letter-spacing: 0;
            line-height: 22px;
            text-align: center;
            line-height: 54px;
        }
    }
    .footer{
        position: absolute;
        bottom:0;
        width: 100%;
        height: fit-content;
        background: #FFFFFF;
    }
</style>