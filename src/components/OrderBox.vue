<template>
    <router-link :to="'/user/order/info?order_id='+order.order_id">
        <div class="wrapper">
            <div class="header">
                <div class="shop-name">车品商城</div>
                <div class="state">{{state}}</div>
            </div>
            <div class="body">
                <div class="order-image">
                    <van-image
                    width="95px"
                    height="95px"
                    fit="fill"
                    :src="order.type_image"
                    />
                </div>
                <div class="order-info-wrapper">
                    <div class="order-info">
                        <div class="good-name">
                            {{order.good_name}}
                        </div>
                        <div class="good-type">
                            {{order.type_des}}
                        </div>
                        <div class="good-number-price">
                            <div class="good-number">
                                x{{order.number}}
                            </div>
                            <div class="good-price">
                                <div class="dollar">￥</div>
                                <div class="price">{{order.order_price}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="button">
                    {{operation}}
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props:{
        "order":Object,
        "userId":String
    },
    data(){
        let state='';
        let operation='';
        return{
            state
        }
    },
    created(){
        switch(this.order.order_state){
            case 0:
                this.state='待付款';
                this.operation='立即付款'
                break;
            case 1:
                this.state='待发货'
                this.operation='提醒发货'
                break;
            case 2:
                this.state='待收货'
                this.operation='确认收货'
                break;
            case 3:
                this.state='已完成'
                this.operation='已完成'
                break;
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        margin-left: 4%;
        margin-bottom:10px;
        background: #fff;
        width:92%;
        height:174.5px;
        border-radius: 5px;
        .header,.body,.footer{
            width: 90%;
            margin-left: 5%;
        }
        .header{
            height: 42.5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .shop-name{
                font-size: 13px;
                color: #333333;
                letter-spacing: 0;
                font-weight: 600;
            }
            .state{
                font-size: 12px;
                color: #FF9100;
                letter-spacing: 0;
                text-align: right;
                font-weight: 400;
            }
        }
        .body{
            height: 95px;
            .order-image{
                width:95px;
                position: absolute;
                height:95px;
            }
            .order-info-wrapper{
                width:100%;
                height: 95px;
                .order-info{
                    margin-left:103px;
                    margin-right: 9.5px;
                    overflow: hidden;
                    .good-name{
                        word-wrap: break-word;
                        height:40px;
                        width: 100%;
                        line-height: 20px;
                        font-size: 14px;
                        color: #333333;
                        letter-spacing: 0;
                        font-weight: 600;
                    }
                    .good-type{
                        margin-top:6px;
                        height: 17px;
                        font-size: 12px;
                        color: #999999;
                        letter-spacing: 0;
                        font-weight: 400;
                    }
                    .good-number-price{
                        margin-top: 7.5px;
                        display: flex;
                        justify-content: space-between;
                        .good-number{
                            font-size: 12px;
                            color: #999999;
                            letter-spacing: 0;
                            font-weight: 400;
                        }
                        .good-price{
                            .dollar{
                                display: inline-block;
                                color: #333333;
                                font-size:9px;
                            }
                            .price{
                                display: inline-block;
                                font-size: 14px;
                                color: #333333;
                                font-weight: 600;
                            }
                        }
                    }
                }
            }

        }
        .footer{
            height:37px;
            text-align: right;
            .button{
                display: inline-block;
                margin-top: 10px;
                height:22px;
                width:75px;
                border:1px solid #FF9100;
                border-radius: 11px;
                font-size: 12px;
                color: #FF9100;
                letter-spacing: 0;
                text-align: center;
                line-height: 22px;
                font-weight: 400;
            }
        }
    }
</style>