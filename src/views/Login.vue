<template>
    <div class="header">
        <v-header :title="title"></v-header>
    </div>
    <div class="main">
        <div class="title">
            登录车品商城
        </div>
        <div class="form">
            <div class="form-item">
                <div class="form-item-name">用户名</div>
                <input type="text" class="username" placeholder="请输入您的用户名" v-model="username">
                <span class="iconfont" @click="clear" v-show="show">&#xe633;</span>
            </div>
            <div class="form-item">
                <div class="form-item-name">密码</div>
                <input type="password" placeholder="请输入您的密码">
            </div>
            <div class="button">
                <van-button type="primary" class="my-button" @click="confirm">确认</van-button>
            </div>
            <div class="tip">
                未注册用户会自动注册并登录
            </div>
        </div>
    </div>
    <!-- <van-sticky :offset-bottom="0" position="bottom">
        <div class="footer">
            <v-sticky></v-sticky>
        </div>
    </van-sticky> -->
</template>
<script>
import vHeader from '../components/Header.vue'
import vSticky from '../components/Sticky.vue'

export default{
    name:'Login',
    watch:{
        username(newValue,oldValue){
            if(newValue!==''){
                this.show=true;
            }
            else{
                this.show=false;
            }
        }
    },
    data(){
        const title="登录";
        let show=false;
        let username='';
        return{
            title,
            show,
            username
        }
    },
    components:{
        vHeader,
        vSticky
    },
    methods:{
        clear(){
            this.show=!this.show;
            this.username='';
        },
        confirm(){

        }
    }
}
</script>
<style lang="scss" scoped>
    input::-webkit-input-placeholder {
        color:#999;
    }
    .header{
        box-shadow: 0 0.5px 0 0 #E6E6E6;
    }
    .main{

        .title{
            height: 94px;
            line-height: 94px;
            font-size: 24px;
            color: #1F2129;
            letter-spacing: 0;
            font-weight: 600;
            margin-left: 24px;
        }
        .form{
            width: 100%;
            .form-item{
                margin-left:auto; 
                margin-right:auto;
                height: 48.24px;
                line-height: 48.24px;
                width: 311px;
                border-bottom: solid 1px #E6E6E6;
                .iconfont{
                    color:#333;
                }
                .form-item-name{
                    display: inline-block;
                    font-size: 16px;
                    color: #222222;
                    letter-spacing: 0;
                    width: 48px;
                    margin-right:20px;
                }
                input{
                    outline-style: none;
                    color:#333;
                    border: 0;
                    width:240px;
                }
                .username{
                    height: 47px;
                    width:218px;
                }
                .iconfont{
                    opacity: 0.9;
                }
                
            }
            .button{
                margin-top: 30.36px;
                text-align: center;
                .my-button{
                    color:black;
                    font-weight: 900;
                    border: 0;
                    width:311px;
                }
            }
            .tip{
                margin-top: 11px;
                text-align: center;font-size: 12px;
                color: #979AA8;
                letter-spacing: 0;
                line-height: 18px;
                font-weight: 400;
            }
        }
    }

    .footer{
        width: 100%;
        height: fit-content;
        background: #FFFFFF;
        position:absolute;
        bottom:0;
    }
</style>