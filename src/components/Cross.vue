<template>
    <div class="cross"></div>
</template>

<style lang="scss" scoped>
.cross{
    position: absolute;
    transform: rotate(45deg);
 }
.cross::before{
    content:'';
    display: inline-block;
    height: 20px;
    width:2px;
    background: #1A1A1A;
    position:absolute;
}
.cross::after{
    content:'';
    display: inline-block;
    height: 2px;
    width:20px;
    background: #1A1A1A;
    position:absolute;
    top:9px;
    left:-9px;
}
</style>