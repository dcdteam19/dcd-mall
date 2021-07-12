<template>
    <van-sticky :offset-top="0">
        <div class="header">
            <v-header :title="title"></v-header>
            <div class="category-pop">
                <div class="tags">
                    <div class="category-item" v-show="!show">
                        <span v-for="i in category2" :key="i" 
                        :class="{selected:isSelected===i.category2_id}"
                        :id="i.category2_id"
                        @click="changeCategory(i.category2_id)">
                        {{i.category2_name}}
                        </span>
                    </div>
                    <span class="category-all" v-show="show">
                        全部分类
                    </span>
                </div>
                <div class="gradient"></div>
                <div class="arrow">
                    <img :src="arrow_up" alt="" @click="showPopup" v-show="!show">
                    <img :src="arrow_down" alt="" @click="showPopup" v-show="show">
                </div>
                <div class="pop" v-show="show">
                    <v-tag
                    v-for="i in category2" :key="i.category2_id"
                    @click="changeCategory(i.category2_id)"
                    :name="i.category2_name"
                    :id="i.category2_id"
                    :isSelected="isSelected">
                    </v-tag>
                </div>
            </div>
        </div>
    </van-sticky>
    <div class="body">
        <van-overlay :show="show" @click="showPopup">
        </van-overlay>
        <div class="good-wrapper">
            <div class="good">
                <v-good :good="good"></v-good>
            </div>
            <div class="tip" v-show="showTip">
                —— 更多好物敬请期待 ——
                <br/>
                懂车帝精选 价格优惠 品质保障
            </div>
        </div>
    </div>
    <van-sticky :offset-bottom="0" position="bottom">
        <div class="footer">
            <v-sticky></v-sticky>
        </div>
    </van-sticky>

</template>
<script>
import vHeader from '../components/Header.vue'
import vSticky from '../components/Sticky.vue'
import vGood from '../components/Good.vue'
import vTag from '../components/Tag.vue'
import {getCategory2Good,getCategory2} from '../api/index'

export default{
    name:'Category',
    components:{
        vHeader,
        vSticky,
        vGood,
        vTag
    },
    data(){
        let title="";
        let arrow_up=require('../assets/image/arrow_up@2x.png');
        let arrow_down=require('../assets/image/arrow_down@2x.png');
        let show =false;
        let good=[];
        let category2=[];
        let isSelected='';
        //无限请求商品
        let showTip=true;
        let io;
        let target;
        let goodBox;
        let page=1;
        return {
            title,
            arrow_up,
            arrow_down,
            show,
            good,
            category2,
            isSelected,

            showTip,
            io,
            target,
            goodBox,
            page
        }
    },
    methods:{
        showPopup(){
            this.show=!this.show;
        },
        changeCategory(Category2_id){
            this.isSelected=Category2_id
            this.good=[];
            this.page=1;
            getCategory2Good(this.$route.query.category1_id,this.isSelected,this.page).then(
                value=>{
                    this.good=value.data.goods;
                    if(this.good.length<=1){
                        this.showTip=true;
                    }
                    else{
                        this.setObserver()
                    }
                }
            )
        },
        setObserver(){
            setTimeout(()=>{
                this.io=new IntersectionObserver(config=>this.getMoreGood(config));
                this.goodBox=document.querySelector('.good').childNodes[0].childNodes;
                this.target=this.goodBox[this.goodBox.length-2]
                this.io.observe(this.target); 
            })
        },
        getMoreGood(config){
            if(config[0].intersectionRatio>0){
                // console.log(config)
                this.io.unobserve(this.target)
                getCategory2Good(this.$route.query.category1_id,this.isSelected,this.page)
                .then(
                    res=>{
                        if(res.data.goods.length<1){
                            this.showTip=true;
                        }
                        else{
                            this.page++;
                            this.good=[...this.good,...res.data.goods]
                            this.target=this.goodBox[this.goodBox.length-2];
                            this.io.observe(this.target)
                        }
                    }
                )
            };
        }
    },
    created(){
        this.title=this.$route.query.category1_name;
        this.category2=[];
        this.isSelected='';
        this.good=[];
        
        getCategory2(this.$route.query.category1_id).then(
            value=>{
                this.category2=value.data.result;
                if(this.category2.length) 
                {
                    this.isSelected=this.category2[0].category2_id;
                    getCategory2Good(this.$route.query.category1_id,this.isSelected,this.page).then(
                        value=>{
                            // console.log(value)
                            this.good=value.data.goods;
                            //上拉加载更多商品
                            if(this.good.length<=1){
                                this.showTip=true;
                            }
                            else{
                                this.page++;
                                this.setObserver()
                            }
                        }
                    )
                }
                
            }
        )

    }
}
</script>
<style lang="scss" scoped>
    /*定义滚动条高宽及背景
    高宽分别对应横竖滚动条的尺寸*/
    ::-webkit-scrollbar
    {
        width:0;
        height:0;
    }
    .header{
        position: absolute;
        width:100%;
        top:0;
        background: #fff;
        .cover{
            position:absolute;
            top:84px;
            height: 100vh;
            width:100%;
            background:rgba(0, 0, 0, 0.5);
            z-index: 99;
        }
        .category-pop{
            display: flex;
            position: relative;
            width: 100%;
            background:  #FFFFFF;
            height: 40px;
            box-shadow: 0 0.5px 0 0 #E6E6E6;
            font-family: PingFangSC;
            font-size: 16px;
            font-weight: 400;
            color:#333;
            text-align: center;
            line-height: 44px;
            z-index:100;
            .tags{
                width:90%;
                overflow-x: scroll;
                text-align: left;
                .category-item{
                    margin-left:15px;
                    //子元素宽度总和撑开父元素
                    display: inline-block;
                    white-space: nowrap;
                    span{
                        display: inline-block;
                        margin-right: 24px;
                        font-size: 14px;
                        color: #999999;
                        letter-spacing: 0;
                        line-height: 14px;
                    }
                    .selected{
                        font-size: 14px;
                        color: #333333;
                        letter-spacing: 0;
                        line-height: 14px;
                        font-weight: 600;
                    }
                }
                .category-all{
                    margin-left:15px;
                    font-size: 14px;
                    color: #333333;
                    letter-spacing: 0;
                    line-height: 14px;
                    font-weight: 900;
                }
            }
            .gradient{
                position: absolute;
                background-image: linear-gradient(90deg, rgba(255,255,255,0.00) 0%, #FFFFFF 69%);
                width:21px;
                height:100%;
                right: 36px;
            }
            .arrow{
                position: absolute;
                right:0;
                width:40px;
                img{
                    width: 30%;
                    height: 30%;
                }
            }
            .pop{
                position:absolute;
                top:39px;
                width: 100%;
                height:fit-content;
                background: #fff;
                // display: flex;
                // flex-wrap:wrap;
                // justify-content: center;
                padding-bottom: 24px;
                
            }
        }
    }
    .body{
        min-height: 90vh;
        .good-wrapper{
            padding-top:44px;
            height: fit-content;
            .good{
                margin-top:12px;
                margin-left:4px;
            }
            .tip{
                margin-top:24px;
                text-align: center;
                font-size: 14px;
                color:#999;
            }
        }
    }

    .footer{
        width: 100%;        
        height: fit-content;
        background: #FFFFFF;
    }
</style>