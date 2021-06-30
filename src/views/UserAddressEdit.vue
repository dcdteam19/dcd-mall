<template>
    <div class="main">
        <div class="header">
            <v-header :title="title"></v-header>
        </div>
        <div class="body">
            <div class="input-box">
                <v-input-box :name="address.name" :value="address.value" :placeholder="address.placeholder"></v-input-box>
            </div>
            <div class="input-box">
                <v-input-box :name="user.name" :value="user.value" :placeholder="user.placeholder"></v-input-box>
            </div>
            <div class="input-box">
                <v-input-box :name="phone.name" :value="phone.value" :placeholder="phone.placeholder"></v-input-box>
            </div>
        </div>
        <div class="footer">
            <van-button type="primary" class="my-button" @click="confirm">保存</van-button>
        </div>
    </div>

</template>

<script>
import vHeader from '../components/Header'
import vInputBox from '../components/InputBox.vue'
export default{
    name:'UserAddressEdit',
    components:{
        vHeader,
        vInputBox
    },
    data(){
        const title="编辑地址";
        const searchResult=[];
        const addressInfo={
            name:'林小嘉',
            tel:'18090281519',
        }
        const address={
            name:"地址",
            value:'',
            placeholder:'请输入您的收件地址'
        }
        const user={
            name:"收件人",
            value:'',
            placeholder:'请输入您的收件人姓名'
        }
        const phone={
            name:"手机号",
            value:'',
            placeholder:'请输入您的手机号'
        }
        return {
            title,
            address,
            user,
            phone
        }
    },
    methods:{
        onSave(){
            console.log(this.addressInfo)
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
        left:50%;
        transform: translateX(-50%);
        height:90px;
        background: #FFF;
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