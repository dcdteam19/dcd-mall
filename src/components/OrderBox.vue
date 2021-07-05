<template>
    <router-link to="/user/order/info">
        <div class="wrapper">
            <div class="header">
                <div class="shop-name">车品商城</div>
                <div class="state">待付款</div>
            </div>
            <div class="body">
                <div class="order-image">
                    <van-image
                    width="95px"
                    height="95px"
                    fit="fill"
                    src=""
                    />
                </div>
                <div class="order-info-wrapper">
                    <div class="order-info">
                        <div class="good-name">
                            360行车记录仪 G300 迷你隐藏 高清夜视 无限车速 黑灰色
                        </div>
                        <div class="good-type">
                            深空灰
                        </div>
                        <div class="good-number-price">
                            <div class="good-number">
                                x1
                            </div>
                            <div class="good-price">
                                <div class="dollar">￥</div>
                                <div class="price">222.1</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="button">
                    立即付款
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props:{
        "oid":String
    },
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
                height:100%;
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