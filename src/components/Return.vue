<template>
    <img :src="arr" alt="<" @click="goBack">
</template>

<script>
import {useRouter} from 'vue-router'
export default {
    name:"return",
    data(){
        let arr=require("../assets/image/icon_ Return.png")
        const router=useRouter();
        return{
            arr,
            router
        }
    },
    methods:{
        goBack(){
            this.router.go(-1)
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