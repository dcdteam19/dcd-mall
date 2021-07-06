<template>
    <div class="main">
        <div class="header">
            <v-header :title="title"></v-header>
        </div>
        <div class="body">
            <div class="input-box">
                <v-input-box :name="address.name" 
                :value="address_data.address_name" 
                @newValue="changeAddressName"
                :placeholder="address.placeholder">
                </v-input-box>
            </div>
            <div class="input-box">
                <v-input-box :name="user.name" 
                :value="address_data.receiver_name" 
                @newValue="changeReceiverName"
                :placeholder="user.placeholder">
                </v-input-box>
            </div>
            <div class="input-box">
                <v-input-box :name="phone.name" 
                :value="address_data.receiver_phone" 
                @newValue="changeReceiverPhone"
                :placeholder="phone.placeholder">
                </v-input-box>
            </div>
        </div>
        <div class="footer">
            <van-button type="primary" class="my-button" @click="onSave">保存</van-button>
        </div>
    </div>

</template>

<script>
import vHeader from '../components/Header'
import vInputBox from '../components/InputBox.vue'
import {userAddressAdd,userAddressUpdate} from '../api/index'

export default{
    name:'UserAddressEdit',
    components:{
        vHeader,
        vInputBox
    },
    data(){
        const title="编辑地址";
        const searchResult=[];

        const address={
            name:"地址",
            placeholder:'请输入您的收件地址'
        }
        const user={
            name:"收件人",
            placeholder:'请输入您的收件人姓名'
        }
        const phone={
            name:"手机号",
            placeholder:'请输入您的手机号'
        }

        const address_data={
            address_name:'',
            receiver_name:'',
            receiver_phone:''
        }

        return {
            title,
            address,
            user,
            phone,

            address_data
        }
    },
    methods:{
        onSave(){
            console.log(this.address_data)
            if(this.$route.query.address_id){
                userAddressUpdate(this.$route.query.address_id,
                this.address_data.address_name,
                this.address_data.receiver_name,
                this.address_data.receiver_phone).then(
                    res=>{
                        // console.log(res)
                        this.$router.go(-1)
                    },
                    err=>{
                        console.log(err)
                    }
                )
            }
            else{
                userAddressAdd(this.$route.query.user_id,
                this.address_data.address_name,
                this.address_data.receiver_name,
                this.address_data.receiver_phone).then(
                    res=>{
                        // console.log(res)
                        this.$router.go(-1)
                    },
                    err=>{
                        console.log(err)
                    }
                )
            }
            
        },
        changeAddressName(addressName){
            this.address_data.address_name=addressName
        },
        changeReceiverName(receiverName){
            this.address_data.receiver_name=receiverName
        },
        changeReceiverPhone(receiverPhone){
            this.address_data.receiver_phone=receiverPhone
        }
    },
    mounted(){
        if(this.$route.query.address_id){
            // console.log(this.$route.query.address_id)
            // console.log(this.$route.query.address_name)
            // console.log(this.$route.query.receiver_name)
            // console.log(this.$route.query.receiver_phone)
            this.address_data.address_name=this.$route.query.address_name;
            this.address_data.receiver_name=this.$route.query.receiver_name;
            this.address_data.receiver_phone=this.$route.query.receiver_phone;
        }
    }
}
</script>

<style lang="scss" scoped>

.main{
    .header{
        box-shadow: 0 0.5px 0 0 #E6E6E6;
    }
    
    .body{
        margin-top: 10px;
        .input-box{
            width: 86%;
            margin-left: 7%;
            margin-bottom: 0.5px;
        }
        .input-box:first-child,.input-box:nth-child(2){
            border-bottom: 1px solid  #EDEDED;;
        }
    }
    .footer{
        position: absolute;
        bottom: 0;
        height:90px;
        width:100vw;
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
}

</style>