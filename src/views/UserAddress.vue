<template>
    <div class="header">
        <v-header :title="title"></v-header>
    </div>
    <div class="body">
        <div class="address-wrapper" v-for="i in [1,1,1,1,1,1,1,1,1,1,1]" :key="i">
            <div class="iconfont">
                &#xe632;
            </div>
            <div class="address-info">
                <div class="address">
                    北京市海淀区花园东路19号中兴大厦7层东侧501室
                </div>
                <div class="user-phone">
                    <div class="user">
                        懂车帝
                    </div>
                    <div class="phone">
                        18888888888
                    </div>
                </div>
            </div>
            <div class="iconfont">
                &#xe607;
            </div>
        </div>
    </div>
    <van-sticky :offset-bottom="0" position="bottom">
        <div class="footer">
            <van-button type="primary" class="my-button" @click="confirm">添加新地址</van-button>
        </div>
    </van-sticky>
</template>
<script>
import vHeader from '../components/Header.vue'
export default{
    name:'UserAddress',
    components:{
        vHeader
    },
    data(){
        const title="我的地址"
        return{
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
        .address-wrapper{
            width:90%;
            margin-left: 5%;
            margin-top:10.5px;
            height: 73px;
            display: flex;
            .iconfont{
                width:24px;
                height: 73px;
                line-height: 73px;
                font-size: 24px;
                color:#1F2129;
            }
            .address-info{
                width: 100%;
                height:100%;
                .address{
                    height:44px;
                    font-size: 16px;
                    color: #333333;
                    letter-spacing: 0;
                    font-weight: 500;
                }
                .user-phone{
                    display: flex;
                    height:29px;
                    line-height: 29px;
                    .user{
                        flex:1;
                        font-size: 12px;
                        color: #666666;
                        letter-spacing: 0;
                        font-weight: 400;
                    }
                    .phone{
                        flex:2;
                        font-size: 12px;
                        color: #666666;
                        letter-spacing: 0;
                        font-weight: 400;
                    }
                }
            }
        }
    }
    .footer{
        height:90px;
        background: #FFF;
        text-align: center;
        .my-button{
            color:black;
            font-weight: 900;
            border: 0;
            border-radius: 22px;
            width:311px;
            margin-top:8px;
        }
    }
</style>