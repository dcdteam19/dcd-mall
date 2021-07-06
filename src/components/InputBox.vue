<template>
    <div class="wrapper">
        <div class="name">{{name}}</div>
        <div class="value-wrapper">
            <input type="text" class="value" v-model="value" :placeholder="placeholder" @blur="changeValue">
            <div class="iconfont" v-show="value.length!==0" @click="value=''">
                &#xe633;
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    // watch:{
    //     value(newValue,oldValue){
    //         console.log(newValue)
    //     }
    // },
    methods:{
        changeValue(){
            // console.log(this.value)
            this.$emit('newValue',this.value)
        }
    },
    props:{
        "name":String,
        "value":String,
        "placeholder":String
    }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        text-align: center;
        line-height: 48px;
        height:48px;
        width: 100%;
        display: flex;
        .name{
            text-align: center;
            flex:1;
            font-size: 16px;
            color: #222222;
            letter-spacing: 0;
            font-weight: 400;
        }
        .value-wrapper{
            flex:5;
            position: relative;
            .value{
                border:0;
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
                font-weight: 400;
            }
            .iconfont{
                position: absolute;
                top:0;
                right:15px;
                color:#666666;
            }
        }
    }
</style>