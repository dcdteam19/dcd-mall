<template>
    <div class="main">
        <div class="header">
            <v-return v-if="true" class="return"></v-return>
            <v-header v-if="false"></v-header>
        </div>
        <div class="banner">
        </div>
        <div class="category-wrapper">
            <div class="category" v-for="i in category1" :key="i">
                <div>
                    <router-link :to="'/category?category_1_id='+i._id">
                        <van-image
                        round
                        width="44px"
                        height="44px"
                        :src="i.category_1_image"
                        />
                        <div class="category-name">{{i.category_1_name}}</div>
                    </router-link>
                </div>
            </div>
        </div>
        <v-devide/>
        <div class="discount-wrapper">
            <div class="discount-header">
                <span class="title">限时抢购 优惠直降</span>
                <div class="discount-time">
                    <van-count-down :time="discount.time">
                        <template #default="timeData">
                            <span class="block">{{ timeData.hours }}</span>
                            <span class="colon">:</span>
                            <span class="block">{{ timeData.minutes }}</span>
                            <span class="colon">:</span>
                            <span class="block">{{ timeData.seconds }}</span>
                        </template>
                    </van-count-down>
                </div>
            </div>
            <div class="good-wrapper">
                <div class="good" v-for="i in discount.good" :key="i">
                    <router-link :to="'/good?good_id=60e05bdcb1e31102251109b9&user_id=60df2674b1e311022511092e'">
                        <div class="price-wrapper">
                            <div class="good-price">
                                <span class="dollar">￥</span>
                                <span class="price">{{i.good_price}}</span>
                            </div>
                            <div class="good-origin-price">
                                <span class="dollar">￥</span>
                                <span class="price">{{i.good_origin_price}}</span>
                            </div>
                        </div>
                        <van-image
                        width="82px"
                        height="82px"
                        :src="i.good_image"
                        />
                    </router-link>
                </div>
            </div>
        </div>
        <v-devide/>
        <div class="category-good-wrapper" v-for="i in good" :key="i">
            <div class="header">
                <span>{{i.category_1_name}}</span>
            </div>
            <div class="content">
                <v-good :good="i.good"></v-good>
            </div>
        </div>
    </div>
    <van-sticky :offset-bottom="0" position="bottom">
        <div class="footer">
            <v-sticky></v-sticky>
        </div>
    </van-sticky>

</template>

<script>
// @ is an alias to /src
import vHeader from '../components/Header.vue'
import vReturn from '../components/Return.vue'
import vDevide from '../components/Devide.vue'
import vGood from '../components/Good.vue'
import vSticky from '../components/Sticky.vue'
import {getCategory1,getShopGood,getShopDiscount} from '../api/index'

export default {
  name: 'Shop',
  components: {
    vHeader,
    vReturn,
    vDevide,
    vGood,
    vSticky
  },
  methods:{
      
  },
  data(){
      const category1=[];
      const good=[];
      const discount={
          time:0,
          good:[]
      }
      let time=0;
      return{
          category1,
          good,
          discount
      }
  },
  created(){
      getCategory1().then(
            value=>{
                this.category1=value.data.category_1
                // console.log(value)
            },
            reason=>{
                console.log(reason)
            }
      )
      getShopDiscount().then(
          value=>{
              this.discount.time=value.time;
              this.discount.good=value.good;
          },
          reason=>{
              console.log(reason)
          }
      )
      getShopGood().then(
          value=>{
              this.good=value.data;
            //   console.log(this.good)
          },
          reason=>{
              console.log(reason)
          }
      )
      
  }
}
</script>
<style lang="scss" scoped>
    .main{
        padding: 0;
        .return{
            position: absolute;
            margin: 0;
            top:10px;
            left: 8px;
        }
        .banner{
            height: 210px;
            width:100%;
            background: yellowgreen;
        }
        .category-wrapper{
            height: 168px;
            width:100%;
            background: #FFFFFF;
            display: flex;
            flex-flow: row wrap;
            align-content:flex-start;
            .category{
                margin-top:12px;
                flex:0 0 25%;
                height: 64px;
                text-align: center;
                .category-name{
                    color:#333333;
                    font-size: 12px;
                    font-weight: 500;
                }
            }
        }
        .discount-wrapper{
            width:100%;
            .discount-header{
                position: relative;
                height:44px;
                width: 100%;
                line-height: 44px;
                .title{
                    display: inline-block;
                    font-family: PingFangSC;
                    font-size: 16px;
                    font-weight: 900;
                    color: #333333;
                    letter-spacing: 0;
                    margin-left: 15px;
                }
                .discount-time{
                    position: absolute;
                    top:12px;
                    left:160px;
                    .colon {
                        display: inline-block;
                        margin: 0 4px;
                        color: #111;
                    }
                    .block {
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        text-align: center;
                        line-height: 16px;
                        color: #fff;
                        font-size: 12px;
                        text-align: center;
                        background-color: #111;
                        border-radius: 2.13px;
                    }
                }
            }
            .good-wrapper{
                display: flex;
                justify-content: center;
                width: 100%;
                height: 130px;
                .good{
                    margin-right:1.83px;
                    width: 112.3px;
                    height:112.3px;
                    background: #F6F6F6;
                    text-align: center;
                    .price-wrapper{
                        display: flex;
                        justify-content: space-between;
                        .good-price{
                            margin-top:9px;
                            margin-left: 5px;
                            color: #FF9100;
                            font-weight: 600;
                            .dollar{
                                display: inline-block;
                                font-size: 12px;
                            }
                            .price{
                                display: inline-block;
                                font-size: 16px;
                            }
                        }
                        .good-origin-price{
                            margin-top:11px;
                            margin-right: 5px;
                            color: #999;
                            text-decoration: line-through;
                            font-size: 12px;
                            .dollar{
                                display: inline-block;
                            }
                            .price{
                                display: inline-block;
                            }
                        }
                    }

                }
                .good:first-child{
                    border-radius: 4px 0 0 4px;
                }
                .good:last-child{
                    border-radius: 0 4px 4px 0;
                }
            }
        }
        .category-good-wrapper{
            .header{
                width: 100%;
                height: 44px;
                line-height: 44px;
                font-family: PingFangSC;
                color: #333333;
                letter-spacing: 0;
                font-weight: 900;
                font-size: 16px;
                span{
                    display: inline-block;
                    margin-left: 15px;
                }
            }
            .content{
                width: 100%;
                display: flex;
                justify-content: center;
            }
        }


    }
    

    .footer{
        width: 100%;
        height: fit-content;
        background: #FFFFFF;
    }
</style>