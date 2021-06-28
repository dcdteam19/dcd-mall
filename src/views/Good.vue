<template>
    <div class="header">
        <v-header :title="title"></v-header>
    </div>
    <div class="main">
        <van-overlay :show="buy||address" @click="buy = false;address=false" />
        <div class="banner">
            <van-swipe :autoplay="3000" style="height: 225px;" indicator-color="white" lazy-render>
                <van-swipe-item v-for="image in banner" :key="image">
                    <van-image
                    width="100%"
                    height="225px"
                    fit="contain"
                    :src="image"
                    />
                </van-swipe-item>
            </van-swipe>
            <div class="good-price-wrapper">
                <div class="good-price">
                    <span class="dollar">
                        ￥
                    </span>
                    <span class="price">
                        299.9
                    </span>
                </div>
                <div class="good-origin-price">
                    <span class="dollar">
                        ￥
                    </span>
                    <span class="price">
                        320.9
                    </span>
                </div>
            </div>
        </div>
        <div class="good-brief-info">
            <div class="header">
                <div class="good-name">
                    360行车记录仪 G300 迷你隐藏 高清夜视 无限车速 黑灰色
                </div>
                <div class="line"></div>
                <div class="collection">
                    <img :src="collection[0]" alt="" class="star" v-show="!collected" @click="collected=!collected">
                    <img :src="collection[1]" alt="" class="star" v-show="collected" @click="collected=!collected">
                </div>
            </div>
            <div class="brief-description">
                6月10日秒杀价308元，报价618，买贵退差价！360行车记录仪，超300万车主的选择
            </div>
        </div>
        <v-devide/>
        <div class="type-address-wrapper">
            <v-select-bar :name="selectType.name" :value="selectType.value" @click="buy=true"></v-select-bar>
            <v-select-bar :name="selectAddress.name" :value="selectAddress.value" @click="address=true"></v-select-bar>
        </div>
        <v-devide/>
        <div class="info-service-bar">
            <div class="info-bar" :class="{selected:info_service}" @click="info_service=true">
                商品介绍
                <div class="line" v-show="info_service"></div>
            </div>
            <div class="service-bar" :class="{selected:!info_service}" @click="info_service=false">
                售后保障
                <div class="line" v-show="!info_service"></div>
            </div>
        </div>
        <div class="good-info" v-show="info_service">
            123
        </div>
        <div class="good-service" v-show="!info_service">
            321
        </div>
    </div>

    <div class="pop-wrapper" v-show="buy">
        <div class="pop-content">
            <div class="header">
                <v-cross class="cross" @click="buy=false"></v-cross>
                <van-image
                    width="90px"
                    height="90px"
                    fit="contain"
                    :src="good-image"
                />
                <div class="good-price-wrapper">
                    <div class="good-price">
                        <span class="dollar">
                            ￥
                        </span>
                        <span class="price">
                            299.9
                        </span>
                    </div>
                    <div class="good-origin-price">
                        <span class="dollar">
                            ￥
                        </span>
                        <span class="price">
                            320.9
                        </span>
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="content">
                    <v-tag :id="1" :name="name" :isSelected="1"></v-tag>
                </div>
            </div>
            <div class="footer">
                <div class="number-wrapper">
                    <span>数量</span>
                    <div class="number">
                        <div class="sub" @click="number>0?number=number-1:number=number"></div>
                        <div class="num">{{number}}</div>
                        <div class="add" @click="number<100?number=number+1:number=number"></div>
                    </div>
                </div>
                <div class="button">
                    <van-button type="primary" class="pop-button">立即购买</van-button>
                </div>
            </div>
        </div>
    </div>
    <div class="pop-wrapper-address" v-show="address">
        <div class="pop-content">
            <div class="header">
                <span>配送至</span>
                <v-cross class="cross" @click="address=false"></v-cross>
            </div>
            <div class="body">
                <div class="address-wrapper">
                    <div class="address-row" v-for="i of [1,2,3,4,5,6,7,8]" :key="i" :class="{selected:selectAddress.value=='重庆市江北区'}">
                        <div class="iconfont">&#xe632;</div>
                        <div class="address">
                            北京市海淀区花园东路19号中兴大厦7层东侧501室
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="button">
                    <van-button type="primary" class="pop-button">添加新地址</van-button>
                </div>
            </div>
        </div>
    </div>

    <van-sticky :offset-bottom="0" position="bottom">
        <div class="footer">
            <div class="button">
                <van-button type="primary" class="my-button" @click="buy=true;">立即购买</van-button>
            </div>
        </div>
    </van-sticky>
</template>
<script>
import vHeader from '../components/Header.vue'
import vDevide from '../components/Devide.vue'
import vTag from '../components/Tag.vue'
import vSelectBar from '../components/SelectBar.vue'
import vCross from '../components/Cross.vue'

export default{
    name:'Good',
    components:{
        vHeader,
        vDevide,
        vTag,
        vSelectBar,
        vCross
    },
    data(){
        const title="商品详情"
        const banner=[
            'https://img.yzcdn.cn/vant/apple-1.jpg',
            'https://img.yzcdn.cn/vant/apple-2.jpg',
            ''
        ];
        const collection=[];
        collection.push(require('../assets/image/star-not.png'));
        collection.push(require('../assets/image/star-col.png'));
        let collected=false;
        let info_service=true;
        let address=false;
        let buy=false;
        let name="black";
        let number=1;
        const selectType={
                name: "已选",
                value: "深灰 * 1"
            };
        const selectAddress={
                name:"送至",
                value:"重庆市江北区"
            }
        
        return {
            title,
            banner,
            collection,
            collected,
            info_service,
            address,
            buy,
            name,
            number,
            selectType,
            selectAddress,
        }
    }
}
</script>
<style lang="scss" scoped>
    .main{
        .banner{
            width:100%;
            height: 225px;
            position: relative;
            .good-price-wrapper{
                position: absolute;
                background: rgba(0,0,0,0.50);
                bottom:0;
                height:48px;
                width: 100%;
                line-height: 48px;
                .good-price{
                    display: inline-block;
                    color: #FF9100;
                    font-size: 24px;
                    margin-left: 10px;
                    font-weight: 900;
                    font-family: PingFangSC;
                    .dollar{
                        display: inline-block;
                        font-size: 16px;
                    }
                    .price{
                        display: inline-block;
                    }
                }
                .good-origin-price{
                    display: inline-block;
                    font-size: 12px;
                    margin-left:6px;
                    color:#999;
                    text-decoration: line-through;
                    font-weight: 500;
                }
            }
        }
        .good-brief-info{
            height:110px;
            .header{
                display: flex;
                justify-content: space-around;
                height: 64px;
                line-height: 44px;
                .good-name{
                    font-size: 18px;
                    color: #333333;
                    letter-spacing: 0;
                    line-height: 22px;
                    font-weight: 600;
                    width: 290px;
                    height: 44px;
                    margin:10px;
                }
                .line{
                    margin-top:12px;
                    height: 40px;
                    border-left:1px solid #BBB;
                }
                .collection{
                    display: inline-block;
                    width:64px;
                    height: 64px;
                    text-align: center;
                    .star{
                        height:24px;
                        width: 24px;
                        margin-top:20px;
                    }
                }
            }
            .brief-description{
                margin: 0 10px;
                font-size: 12px;
                color: #999999;
                letter-spacing: 0;
                line-height: 18px;
                font-weight: 500;
            }
        }
        .type-address-wrapper{
            height: 74px;
        }
        .info-service-bar{
            height:44px;
            display: flex;
            justify-content: center;
            text-align: center; 
            div{
                width:50%;
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
    .pop-wrapper{
        height:410px;
        width:100%;
        position: absolute;
        bottom:0;
        z-index: 100;
        background: #FFF;
        border-radius: 8px 8px 0 0;
        .pop-content{
            position: relative;
            margin-top: 15px;
            height: 360px;
            .header{
                position: absolute;
                left:5%;
                width:90%;
                height:100px;
                .cross{
                    top:0;
                    right:0px;
                }
                .good-price-wrapper{
                    display: inline-block;
                    div{
                        display: inline-block;
                        margin-left:8px;
                    }
                    .good-price{
                        font-size: 16px;
                        color: #FF9100;
                        letter-spacing: 0;
                        text-align: center;
                        font-weight: 600;
                        .price{
                            font-size: 24px;
                        }
                    }
                    .good-origin-price{
                        font-size: 12px;
                        color: #999999;
                        letter-spacing: 0;
                        text-align: right;
                        line-height: 12px;
                        font-weight: 400;
                        text-decoration: line-through;
                    }
                }
            }
            .body{
                position: absolute;
                left:5%;
                top:100px;
                width:90%;
                height: 160px;
                overflow-y: scroll;
                .content{
                    height: fit-content;
                }
            }
            .footer{
                position: absolute;
                left:5%;
                width:90%;
                top:260px;
                height: 102px;
                .number-wrapper{
                    height: 28px;
                    position: relative;
                    span{
                        font-size: 12px;
                        color: #333333;
                        letter-spacing: 0;
                        font-weight: 500;
                    }
                    .number{
                        position: absolute;
                        top:0;
                        right:0;
                        width: 96px;
                        display: flex;
                        justify-content: center;
                        .sub,.add{
                            height: 28px;
                            width:28px;
                            background: #F7F8FA;
                            border-radius: 50%;
                            position:relative;
                        }
                        .sub::before,.add::before{
                            width:10px;
                            height:1.5px;
                            background-color:#1D2129;
                            display: inline-block;
                            content:"";
                            position: absolute;
                            top:13px;
                            left:9px;
                        }
                        .add::after{
                            position: absolute;
                            width:1.5px;
                            height:10px;
                            background-color:#1D2129;
                            display: inline-block;
                            content:"";
                            top:9px;
                            left:13px;
                        }
                        .num{
                            width:40px;
                            text-align: center;
                            line-height: 28px;
                            color:#1D2129;
                        }
                    }
                }
                .button{
                    width: 100%;
                    margin-top: 26px;
                    .pop-button{
                        width:343px;
                        height: 44px;
                        border:0;
                        color:black;
                        font-weight: 900;
                        font-size: 16px;
                    }
                }
            }
           
        }
    }
    .pop-wrapper-address{
        height:410px;
        width:100%;
        position: absolute;
        bottom:0;
        z-index: 100;
        background: #FFF;
        border-radius: 8px 8px 0 0;
        .pop-content{
            position: relative;
            height: 376px;
            text-align: center;
            .header{
                height:42.3px;
                line-height: 42.3px;
                position: relative;
                .cross{
                    top:12px;
                    right:16px;
                }
                span{
                    font-size: 16px;
                    color: #1A1A1A;
                    font-weight: 600;
                }
                
            }
            .body{
                height:284.7px;
                overflow-y: scroll;
                .address-wrapper{
                    min-height: 284.7px;
                    .address-row{
                        margin-left:5%;
                        width:90%;
                        height:44px;
                        position: relative;
                        div{
                            position: absolute;
                        }
                        .iconfont{
                            top:4px;
                            font-size: 24px;
                            color:#333;
                        }
                        .address{
                            left:32px;
                            font-size: 16px;
                            color: #333333;
                            letter-spacing: 0;
                            font-weight: 500;
                            width:85%;
                            height: 44px;
                            overflow: hidden;

                        }
                    }
                    .selected{
                        .iconfont{
                            color:#FF9100;
                        }
                    }
                }
            }
            .footer{
                position: absolute;
                top:327px;
                .button{
                    width: 100%;
                    margin-top: 8px;
                    .pop-button{
                        width:343px;
                        height: 44px;
                        border:0;
                        color:black;
                        font-weight: 900;
                        font-size: 16px;
                    }
                }
            }
        }
    }

    .footer{
        position: absolute;
        bottom:0;
        width: 100%;
        height: 80px;
        background: #FFF;
        z-index:99;
        .button{
            text-align: center;
            position: relative;
            .my-button{
                position: absolute;
                top:8px;
                right:14px;
                color:black;
                font-weight: 900;
                border: 0;
                border-radius: 20px;
                height: 40px;
                width:160px;
                font-size: 16px;
            }
        }
    }
</style>