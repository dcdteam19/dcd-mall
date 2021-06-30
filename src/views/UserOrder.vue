<template>
    <van-sticky :offset-top="0">
        <div class="header">
            <v-header :title="title"></v-header>
            <div class="state-bar">
                <div :class="{selected:state==='全部'}" @click="state='全部'">
                    全部
                    <div class="line" v-show="state==='全部'"></div>
                </div>
                <div :class="{selected:state==='待付款'}" @click="state='待付款'">
                    待付款
                    <div class="line" v-show="state==='待付款'"></div>
                </div>
                <div :class="{selected:state==='待发货'}" @click="state='待发货'">
                    待发货
                    <div class="line" v-show="state==='待发货'"></div>
                </div>
                <div :class="{selected:state==='待收货'}" @click="state='待收货'">
                    待收货
                    <div class="line" v-show="state==='待收货'"></div>
                </div>
            </div>
        </div>
    </van-sticky>
    
    <div class="body">
        <div class="page-wrapper">
            <v-order-box v-for="i in [1,1]" :key="i" ></v-order-box>
        </div>
    </div>
    <div class="footer">

    </div>
</template>
<script>
import vHeader from '../components/Header.vue'
import vOrderBox from '../components/OrderBox.vue'
export default{
    name:'UserOrder',
    components:{
        vHeader,
        vOrderBox
    },
    data(){
        const title="我的订单";
        let state="全部";
        return{
            title,
            state
        }
    }
}
</script>
<style lang="scss" scoped>
    .header{
        position: absolute;
        width:100%;
        top:0;
        background: #fff;
        .state-bar{
            height:44px;
            display: flex;
            justify-content: center;
            text-align: center; 
            div{
                width:25%;
                line-height: 44px;
                font-size: 14px;
                color: #666666;
                letter-spacing: 0;
                font-weight: 500;
                position: relative;
                .line{
                    position: absolute;
                    left:50%;
                    bottom:5px;
                    transform: translateX(-50%);
                    height: 3px;
                    width:16px;
                    background: #1A1A1A;
                    border-radius: 1px;
                }
            }
            .selected{
                color: #1A1A1A;
                font-weight: 600;
            }
        }
    }
    .body{
        background: rgb(251,251,251);
        min-height: 100vh;
        .page-wrapper{
            height:fit-content;
            padding-top:98px;
            padding-bottom:10px;
        }
    }
</style>
