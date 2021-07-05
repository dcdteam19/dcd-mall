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
                        收货人姓名
                    </div>
                    <div class="phone">
                        18818881888
                    </div>
                </div>
                <div class="address">
                    重庆市江北区江北嘴IFS国金大厦T1-31层
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
                        src=""
                        />
                    </div>
                    <div class="good-info">
                        <div class="good-name">
                            360行车记录仪 G300 迷你隐藏 高清夜视 无限车速 黑灰色
                        </div>
                        <div class="good-type">
                            深空灰
                        </div>
                        <div class="good-number-price">
                            <div class="good-number">
                                x2
                            </div>
                            <div class="good-price">
                                <span class="dollar">
                                    ￥
                                </span>
                                <span class="price">
                                    222.1
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
                                ￥444.2
                            </span>
                        </div>
                        <div class="price">
                            <span>
                                物流费用：
                            </span>
                            <span>
                                ￥100.0
                            </span>
                        </div>
                    </div>
                    <div class="good-total-price">
                        <span class="total-price">总额: </span>
                        <span class="dollar"> ￥ </span>
                        <span class="price">222.1</span>
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
                        BX202010154812
                    </span>
                </div>
                <div class="order-time">
                    <span class="left">
                        下单时间
                    </span>
                    <span class="right">
                        2020-08-18  16:18:18
                    </span>
                </div>
            </div>
        </div>
        <div class="button">
            <van-button type="primary" class="my-button" @click="confirm">确认</van-button>
        </div>
    </div>
</template>

<script>
import vHeader from '../components/Header'
export default{
    name:'Order',
    components:{
        vHeader
    },
    data(){
        let title="待收货"
        return {
            title
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