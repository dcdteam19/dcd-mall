<template>
    <img :src="arr" alt="<">
</template>

<script>

export default {
    name:"return",
    data(){
        let arr=require("../assets/image/icon_ Return.png")
        return{
            arr
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