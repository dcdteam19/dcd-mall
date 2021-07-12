<template>
    <div class="tag" :class="{selected:id==isSelected}">
        {{name}}
    </div>
</template>

<script>
export default {
    name:"Tag",
    props:[
        "name",
        "isSelected",
        "id"
    ]
}
</script>

<style lang="scss" scoped>
.tag{
    display: inline-block;
    width:fit-content;
    height: 24px;
    color: #999;
    font-size: 12px;
    line-height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    border: #ccc 1px solid;
    border-radius: 14px;
    margin-top:12px;
    margin-right: 6px;
    margin-left: 6px;
}
.selected{
    font-size: 12px;
    color: #333333;
    border: #333 1px solid;
    font-weight: 600;
}
</style>