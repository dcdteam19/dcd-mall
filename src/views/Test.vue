<template>
    <van-button type="primary" class="my-button" @click="getUserInfo">获得数据</van-button>
    <div id="data">{{data}}</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        let data=''
        return{
            data
        }
    },
    methods:{
        getUserInfo(){
            axios.get('/user/userinfo')
            .then(
                res=>{
                    // console.log(res)
                    this.data=res.data
                },
                err=>{
                    console.log(err)
                }
            )
        }
    },
    mounted(){

    }
}
</script>

<style lang="less" scoped>
.my-button{
    color:black;
    font-weight: 900;
    border: 0;
}

</style>