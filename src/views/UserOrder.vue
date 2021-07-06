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
                <div :class="{selected:state==='已完成'}" @click="state='已完成'">
                    已完成
                    <div class="line" v-show="state==='已完成'"></div>
                </div>
            </div>
        </div>
    </van-sticky>
    
    <div class="body">
        <div class="page-wrapper">
            <v-order-box 
            v-for="order in curr_order_data" 
            :key="order.order_id" 
            :order="order" 
            :userId="$route.query.user_id">
            </v-order-box>
        </div>
    </div>
    <div class="footer">

    </div>
</template>
<script>
import vHeader from '../components/Header.vue'
import vOrderBox from '../components/OrderBox.vue'
import {userOrderGet} from '../api/index'

export default{
    watch:{
        state(newValue){
            switch(newValue){
                case '全部':
                    this.curr_order_data=this.order_data;
                    break;
                case '待付款':
                    this.curr_order_data=[];
                    for(let order of this.order_data){
                        if(order.order_state==0){
                            this.curr_order_data.push(order)
                        }
                    }
                    break;
                case '待发货':
                    this.curr_order_data=[];
                    for(let order of this.order_data){
                        if(order.order_state==1){
                            this.curr_order_data.push(order)
                        }
                    }
                    break;
                case '待收货':
                    this.curr_order_data=[];
                    for(let order of this.order_data){
                        if(order.order_state==2){
                            this.curr_order_data.push(order)
                        }
                    }
                    break;
                case '已完成':
                    this.curr_order_data=[];
                    for(let order of this.order_data){
                        if(order.order_state==3){
                            this.curr_order_data.push(order)
                        }
                    }
                    break;
            }
        }
    },
    name:'UserOrder',
    components:{
        vHeader,
        vOrderBox
    },
    data(){
        const title="我的订单";
        let state="全部";

        const order_data=[
            {
                order_id:'',
                order_state:'',
                order_price:0,
                good_name:'',
                type_des:'',
                type_image:'',
                number:'',
            }
        ]

        const curr_order_data=[]

        return{
            title,
            state,

            order_data,
            curr_order_data
        }
    },
    created(){
        userOrderGet(this.$route.query.user_id).then(
            res=>{
                console.log(res)
                // this.order_data=res.orders;
                this.order_data=res.data.ordersResult
                this.curr_order_data=res.data.ordersResult
                // console.log(this.order_data)
            }
        )
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
