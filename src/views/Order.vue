<template>
    <div class="header">
        <v-header :title="title"></v-header>
    </div>
    <div class="body">
        <div class="orange-box">
        </div>
        <div class="address-wrapper">

        </div>
        <div class="good-wrapper">

        </div>
        <div class="order-wrapper">

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
        }
        .good-wrapper{
            margin:12px 5% 0;
            min-height: 246px;
            width:90%;
            background: #FFF;
            border-radius: 5px;
        }
        .order-wrapper{
            margin:12px 5% 0;
            height: 113.5px;
            width:90%;
            background: #FFF;
            border-radius: 5px;
        }
    }
</style>