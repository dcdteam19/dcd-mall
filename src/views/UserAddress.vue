<template>
    <div class="header">
        <v-header :title="title"></v-header>
    </div>
    <div class="body" v-if="address_data.length!=0">
        <div class="address-wrapper" v-for="address in address_data" :key="address.address_id" >
            <div class="iconfont">
                &#xe632;
            </div>
            <div class="address-info">
                <div class="address">
                    {{address.address_name}}
                </div>
                <div class="user-phone">
                    <div class="user">
                        {{address.receiver_name}}
                    </div>
                    <div class="phone">
                        {{address.receiver_phone}}
                    </div>
                </div>
            </div>
            <div class="iconfont" @click="updateAddress(address)">
                &#xe607;
            </div>

            
        </div>
    </div>
    <van-sticky :offset-bottom="0" position="bottom">
        <div class="footer">
            <van-button type="primary" class="my-button" @click="addNewAddress">添加新地址</van-button>
        </div>
    </van-sticky>
</template>
<script>
import vHeader from '../components/Header.vue'
import {userAddressGet} from '../api/index'

export default{
    name:'UserAddress',
    components:{
        vHeader
    },
    methods:{
        addNewAddress(){
            this.$router.push({path:'/user/address/edit',query:{user_id:this.$route.query.user_id}})
        },
        updateAddress(address){
            this.$router.push({path:'/user/address/edit',query:{
                address_id:address.address_id,
                address_name:address.address_name,
                receiver_name:address.receiver_name,
                receiver_phone:address.receiver_phone
                }})
        }
    },
    data(){
        const title="我的地址"

        const address_data=[
            {
                address_id:'',
                address_name:'',
                receiver_name:'',
                receiver_phone:''
            }
        ]
        return{
            title,

            address_data
        }
    },
    created(){
        const token=window.localStorage.getItem('token')
        userAddressGet(token).then(
            res=>{
                this.address_data=res.data.result;
                console.log(res)
            },
            err=>{
                console.log(err)
            }
        )
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