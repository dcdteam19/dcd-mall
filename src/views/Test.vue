<template>
    <van-button type="primary" class="my-button" @click="getData">获得数据</van-button>
    <div id="data">{{data}}</div>
</template>

<script>
import {getUserInfo} from '../api/index'
export default {
    data(){
        let data=''
        return{
            data
        }
    },
    methods:{
        getData(){
            // this.data=getUserInfo().data;
            getUserInfo().then(
                res=>{
                    // console.log(res)
                    this.data=res
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