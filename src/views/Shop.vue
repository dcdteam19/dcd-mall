<template>
    <div class="main">
        <div class="header">
            <v-return v-if="true" class="return"></v-return>
            <v-header v-if="false"></v-header>
        </div>
        <div class="banner">
        </div>
        <div class="category-wrapper">
            <van-image
                round
                width="44px"
                height="44px"
                v-for="i in [1,2,3,4]"
                :key="i"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
        </div>
        <v-devide/>
        <div class="discount-wrapper">
            <div class="discount-header">
                <span>限时抢购 优惠直降</span>
                
            </div>
            <div class="good-wrapper">
                <div class="good" v-for="i in [1,2,3]" :key="i">
                </div>
            </div>
        </div>
        <v-devide/>
        <div class="category-good-wrapper" v-for="i in ['车载电器','车行辅助']" :key="i">
            <div class="header">
                <span>{{i}}</span>
            </div>
            <div class="content">
                <v-good></v-good>
            </div>
        </div>
    </div>
    <van-sticky :offset-bottom="0" position="bottom">
        <div class="footer"></div>
    </van-sticky>

</template>

<script>
// @ is an alias to /src
import vHeader from '../components/Header.vue'
import vReturn from '../components/Return.vue'
import vDevide from '../components/Devide.vue'
import vGood from '../components/Good.vue'
export default {
  name: 'Shop',
  components: {
    vHeader,
    vReturn,
    vDevide,
    vGood
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
        }
        .discount-wrapper{
            width:100%;
            .discount-header{
                height:44px;
                width: 100%;
                line-height: 44px;
                span{
                    display: inline-block;
                    font-family: PingFangSC;
                    font-size: 16px;
                    font-weight: 900;
                    color: #333333;
                    letter-spacing: 0;
                    margin-left: 15px;
                }
            }
            .good-wrapper{
                display: flex;
                justify-content: center;
                width: 100%;
                height: 129px;
                .good{
                    margin-right:1.83px;
                    width: 112.3px;
                    height:112.3px;
                    background: #F6F6F6;
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
        height: 48px;
        background: #FFFFFF;
    }
</style>