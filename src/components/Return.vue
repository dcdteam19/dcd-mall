<template>
    <img :src="arr" alt="<" @click="goBack">
</template>

<script>
import store from '../store'

export default {
    name:"return",
    data(){
        let arr=require("../assets/image/icon_ Return.png")
        return{
            arr
        }
    },
    methods:{
        goBack(){
            if(store.state.user.isLogin)
                this.$router.go(-1)
            else
                this.$router.push({path:'/'})
        }
    }
}
</script>

<style scoped>
img{
    width:23.5px;
    height: 23.5px;
    
}
</style>