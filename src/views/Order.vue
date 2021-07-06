<template>
    <div class="header">
        <v-header :title="title"></v-header>
    </div>
    <div class="body">
        <div class="orange-box">
        </div>
        <div class="address-wrapper">
            <div class="iconfont">
                &#xe632;
            </div>
            <div class="user-phone-address">
                <div class="user-phone">
                    <div class="user">
                        {{order_data.address.receiver_name}}
                    </div>
                    <div class="phone">
                        {{order_data.address.receiver_phone}}
                    </div>
                </div>
                <div class="address">
                    {{order_data.address.address_name}}
                </div>
            </div>
            <div class="iconfont">
                &#xe607;
            </div>
        </div>
        <div class="good-wrapper">
            <div class="content">
                <div class="shop-name">
                    车品商城
                </div>
                <div class="good-image-info-wrapper">
                    <div class="good-image">
                        <van-image
                        width="95px"
                        height="95px"
                        fit="fill"
                        :src="order_data.order.type_image"
                        />
                    </div>
                    <div class="good-info">
                        <div class="good-name">
                            {{order_data.order.good_name}}
                        </div>
                        <div class="good-type">
                            {{order_data.order.type_des}}
                        </div>
                        <div class="good-number-price">
                            <div class="good-number">
                                x{{order_data.order.number}}
                            </div>
                            <div class="good-price">
                                <span class="dollar">
                                    ￥
                                </span>
                                <span class="price">
                                    {{order_data.order.type_price}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="good-delivery-total-price">
                    <div class="good-delivery-price">
                        <div class="price">
                            <span>
                                货品总价：
                            </span>
                            <span>
                                ￥{{order_data.order.type_price*order_data.order.number}}
                            </span>
                        </div>
                        <div class="price">
                            <span>
                                物流费用：
                            </span>
                            <span>
                                ￥{{order_data.order.delivery_price}}
                            </span>
                        </div>
                    </div>
                    <div class="good-total-price">
                        <span class="total-price">总额: </span>
                        <span class="dollar"> ￥ </span>
                        <span class="price">{{order_data.order.order_price+order_data.order.delivery_price}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-wrapper">
            <div class="order-title">
                订单信息
            </div>
            <div class="order-info">
                <div class="order-number">
                    <span class="left">
                        订单编号
                    </span>
                    <span class="right">
                        {{order_data.order.order_id}}
                    </span>
                </div>
                <div class="order-time">
                    <span class="left">
                        下单时间
                    </span>
                    <span class="right">
                        {{order_data.order.order_createTime}}
                    </span>
                </div>
            </div>
        </div>
        <div class="tag">
            <v-tag :name="'确认收货'" :isSelected="'确认收货'" 
            @click="confirmOrder"
            v-show="order_data.order.order_state==2">
            </v-tag>
            <v-tag :name="'提醒发货'" :isSelected="'提醒发货'" 
            @click="remindOrder"
            v-show="order_data.order.order_state==1">
            </v-tag>
        </div>
        <div class="button">
            <van-button type="primary" class="my-button" @click="payOrder" v-show="order_data.order.order_state==0">确认</van-button>
        </div>
    </div>
</template>

<script>
import vHeader from '../components/Header'
import vTag from '../components/Tag.vue'
import {orderInfoGet,orderStatesUpdate} from '../api/index'
import {Toast,Dialog} from 'vant'

export default{
    watch:{
        'order_data.order.order_state':{
            handler(newValue,oldValue){
                console.log(newValue)
            },
            deep:true
        },
        
    },
    name:'Order',
    components:{
        vHeader,
        vTag
    },
    data(){
        let title="待收货"

        const order_data={
            address:{
                address_name:'',
                receiver_name:'',
                receiver_phone:''
            },
            order:{
                good_name:'',
                good_id:'',
                order_state:'',
                type_description:'',
                type_image:'',
                number:0,
                order_price:0,
                good_price:0,
                delivery_price:0,
                order_id:'',
                order_time:'',
            }
        }
        return {
            title,

            order_data
        }
    },
    activated(){
        orderInfoGet(this.$route.query.order_id).then(
            res=>{
                console.log(res)
                this.order_data=res.data
                switch(this.order_data.order.order_state){
                    case 0:
                        this.title='待付款'
                        break;
                    case 1:
                        this.title='待发货'
                        break;
                    case 2:
                        this.title='待收货'
                        break;
                    case 3:
                        this.title='已完成'
                        break;
                }
            }
        )
    },
    methods:{
        payOrder(){
            orderStatesUpdate(this.$route.query.order_id,1).then(
                res=>{
                    console.log(res)
                    Toast.success('支付成功')
                    this.$router.go(0)
                },
                err=>{
                    Toast.fail('支付失败')
                }
            )
        },
        confirmOrder(){
            Dialog.confirm({
                title: '确认收货',
                message: '请问您是否已收到货物？',
                confirmButtonColor:'#FFCC32'
            })
            .then(() => {
                // on confirm
                orderStatesUpdate(this.$route.query.order_id,3).then(
                    res=>{
                        // console.log(res)
                        Toast.success('收货成功')
                        this.$router.go(0)
                    },
                    err=>{
                        Toast.fail('收货失败')
                    }
                )
            })
            .catch(() => {
                // on cancel
                Toast.fail('取消收货')
            });
            
        },
        remindOrder(){
            Toast.success('提醒成功')
            // orderStatesUpdate(this.$route.query.order_id,2).then(
            //     res=>{
            //         console.log(res)
            //         Toast.success('提醒成功')
            //         this.$router.go(0)
            //     },
            //     err=>{
            //         Toast.fail('提醒失败')
            //     }
            // )
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        box-shadow: 0 0.5px 0 0 #E6E6E6;
    }
    .body{
        background:rgb(251,251,251);
        position:absolute;
        bottom: 0;
        top:0;
        left: 0;
        right: 0;
        .orange-box{
            margin-top: 44px;
            height: 100px;
            background-image: linear-gradient(135deg, #FF9100 0%, #FFE100 100%);
        }
        .address-wrapper{
            height: 78px;
            margin: -45px 5% 0;
            width:90%;
            background: #FFF;
            border-radius: 5px;
            display:flex;
            justify-content: center;
            text-align: center;
            .iconfont{
                flex:1;
                font-size: 28px;
                line-height:78px;
            }
            .user-phone-address{
                flex:5;
                .user-phone{
                    height:44.5px;
                    display: flex;
                    justify-content: center;
                    text-align: left;
                    line-height: 45px;
                    .user{
                        flex:1;
                        font-size: 14px;
                        color: #333333;
                        font-weight: 600;
                    }
                    .phone{
                        flex:2;
                        font-size: 12px;
                        color: #999999;
                        font-weight: 400;
                    }   
                }
                .address{
                    font-size: 12px;
                    color: #333333;
                    font-weight: 400;
                    text-align: left;

                }
            }
        }
        .good-wrapper{
            margin:12px 5% 0;
            min-height: 246px;
            width:90%;
            background: #FFF;
            border-radius: 5px;
            .content{
                width: 90%;
                margin-left: 5%;
                .shop-name{
                    height:44px;
                    line-height: 44px;
                    font-size: 14px;
                    color: #333333;
                    letter-spacing: 0;
                    font-weight: 600;
                }
                .good-image-info-wrapper{

                    display: flex;
                    .good-image{
                        flex:1;
                    }
                    .good-info{
                        flex:2;
                        .good-name{
                            height:40px;
                            font-size: 14px;
                            color: #333333;
                            letter-spacing: 0;
                            font-weight: 600;
                            overflow: hidden;
                        }
                        .good-type{
                            margin-top: 6px;
                            font-size: 12px;
                            color: #999999;
                            letter-spacing: 0;
                            font-weight: 400;
                        }
                        .good-number-price{
                            margin-top:7px;
                            display: flex;
                            justify-content: space-between;
                            .good-number{
                                font-size: 12px;
                                color: #999999;
                                letter-spacing: 0;
                            }
                            .good-price{
                                .dollar{
                                    font-size: 9px;
                                    color: #333333;
                                    text-align: center;
                                    font-weight: 700;
                                }
                                .price{
                                    font-size: 14px;
                                    color: #333333;
                                    text-align: right;
                                    font-weight: 700;
                                }
                            }
                        }
                    }
                }
                .good-delivery-total-price{
                    margin-top: 10px;
                    .good-delivery-price{
                        height:43.5px;
                        border-bottom: 0.5px solid #DDD;
                        .price{
                            margin-bottom: 1px;
                            font-size: 12px;
                            color: #999999;
                            font-weight: 400;
                        }
                    }
                    .good-total-price{
                        height:53.5px;
                        line-height: 53.5px;
                        text-align: right;
                        .total-price{
                            font-size: 12px;
                            color: #333333;
                            font-weight: 500;
                        }
                        .dollar{
                            font-size: 9px;
                            color: #FF9100;
                            text-align: center;
                            font-weight: 700;
                        }
                        .price{
                            font-size: 20px;
                            color: #FF9100;
                            text-align: right;
                            font-weight: 700;
                        }
                    }
                }

            }
        }
        .order-wrapper{
            margin:12px 5% 0;
            height: 113.5px;
            width:90%;
            background: #FFF;
            border-radius: 5px;
            .order-title{
                width:90%;
                margin-left:5%;
                height:55.5px;
                line-height: 55.5px;
                font-size: 14px;
                color: #333333;
                letter-spacing: 0;
                font-weight: 400;
            }
            .order-info{
                width:90%;
                margin-left:5%;
                height:58px;
                font-size: 14px;
                color: #999999;
                letter-spacing: 0;
                font-weight: 400;
                .order-number{
                    display: flex;
                    justify-content: space-between;
                    .right{
                        color: #333333;
                    }
                }
                .order-time{
                    margin-top: 10px;
                    display: flex;
                    justify-content: space-between;
                    .right{
                        color: #333333;
                    }
                }
            }
        }
        .tag{
            text-align: right;
            margin-right:2.5%;
        }
        .button{
            margin-top:19.5px;
            .my-button{
                margin-left: 5%;
                width:90%;
                font-size: 16px;
                color: #1F2129;
                letter-spacing: 0;
                text-align: center;
                line-height: 16px;
                font-weight: 600;
            }
        }
    }
</style>