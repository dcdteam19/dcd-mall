import axios from 'axios'
import { Toast } from 'vant';
import router from '../router'

//开发本地代理
if(process.env.NODE_ENV=='dev'){
    axios.defaults.baseURL = 'https://yapi.baidu.com/mock/71812/api' 
    // console.log('dev')
}
else{
    // axios.defaults.baseURL = '/api' 
    axios.defaults.baseURL = 'https://qc5amp.fn.thelarkcloud.com' 
    // console.log(process.env.NODE_ENV)
}


//设置头部
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
//设置响应超时时间
axios.defaults.timeout = 200000;
//设置请求拦截
axios.interceptors.request.use(
    config => {
        //如果有一个接口需要认证才可以访问，就在这统一设置
        const token=window.localStorage.getItem('token');

        if(token){
            config.headers.Authorization='Bearer '+token;
        }

        return config
});

axios.interceptors.response.use(
    res=>{
        // console.log(res)
        return res
    },
    err=>{
        if(err.response.status=='401'){
            Toast.fail('请先登录')
            router.push({path:'/login'})
        }
        console.log(err.response.data.errors)
    }
)

//使用promise构造get请求
function Get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        })        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {    
            console.log('出现错误')              
            reject(err.data)        
        })    
    });
}
//使用promise构造post请求
function Post(url, params) {    
    return new Promise((resolve, reject) => {         
        axios.post(url, params)        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {     
            console.log('出现错误')       
            reject(err.data)        
        })    
    });
}

//关于用户信息的接口
export function userInfoGet(user_id){
    return Get('/userInfoGet',{
        user_id:user_id
    })
}
export function userImageSet(user_id,image_source){
    return Post('userImageSet',{
        user_id:user_id,
        image_source:image_source
    })
}
//关于用户地址的接口
export function userAddressGet(user_id){
    return Get('/userAddressGet',{
        user_id:user_id
    })
}
export function userAddressAdd(user_id,address_name,receiver_name,receiver_phone){
    return Post('/userAddressAdd',{
        user_id:user_id,
        address_name:address_name,
        receiver_name:receiver_name,
        receiver_phone:receiver_phone
    })
}
export function userAddressUpdate(address_id,address_name,receiver_name,receiver_phone){
    return Post('/userAddressUpdate',{
        address_id:address_id,
        address_name:address_name,
        receiver_name:receiver_name,
        receiver_phone:receiver_phone
    })
}
//关于用户订单的接口
export function userOrderGet(user_id){
    return Get('/userOrderGet',{
        user_id:user_id
    })
}
//生成新订单
export function orderInfoSet(user_id,address_id,good_id,type_id,good_number){
    return Post('/orderInfoSet',{
        user_id,
        address_id,
        good_id,
        type_id,
        good_number
    })
}
//某订单的信息接口
export function orderInfoGet(order_id){
    return Get('/orderInfoGet',{
        order_id
    })
}
//修改订单状态
export function orderStatesUpdate(order_id,order_state){
    return Post('orderStatesUpdate',{
        order_id,
        order_state //1：修改为待发货 2：修改为待收货 3：修改为已完成
    })
}


//首页接口
export function getCategory1(){
    return Get('/category1Get',{})
}
export function getShopGood(){
    return Get('/shop/good',{})
}
export function getShopDiscount(){
    return Get('/shop/discount',{})
}

//类目聚合页接口
export function getCategory2Good(){
    return Get('/category2/good',{})
}
export function getCategory2(){
    return Get('/category2',{})
}

//商品详情页接口
export function goodInfoGet(good_id,user_id){
    return Get(
        '/goodInfoGet',
        {
            good_id:good_id,
            user_id:user_id
        }
    )
}
export function userCollectionSet(good_id,user_id){
    return Get(
        '/userCollectionSet',
        {
            good_id:good_id,
            user_id:user_id
        }
    )
}