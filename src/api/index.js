import axios from 'axios'
import { Toast } from 'vant';
import router from '../router'
import store from '../store';

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
            config.headers.Authorization=token;
        }
    return config
});

axios.interceptors.response.use(
    res=>{
        // console.log(res)
        if(res.data.state_code==-3){
            Toast.fail('登录信息有误')
            store.commit('setIsLogin',false)
            router.push('/login')
            // store.commit('setIsLogin',false)
        }
        else if(res.data.state_code==0){
            //token快过期了 更新token
            if(res.data.token){
                window.localStorage.setItem('token',res.data.token)
            }
            return res
        }
        return res
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
            console.log('get出现错误')              
            // reject(err.data)        
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
            console.log('post出现错误')       
            reject(err.data) 
        })    
    });
}

//关于用户信息的接口
export function login(user_name,user_password){
    return Post('/login',{
            user_name,
            user_password
        }
    )
}
export function userInfoGet(){
    return Get('/userInfoGet',{})
}
export function userImageSet(image_source){
    return Post('userImageSet',{
        image_source:image_source
    })
}

//关于用户地址的接口
export function userAddressGet(){
    return Get('/userAddressGet',{})
}
export function userAddressAdd(address_name,receiver_name,receiver_phone){
    return Post('/userAddressAdd',{
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
export function userOrderGet(){
    return Get('/userOrderGet',{
    })
}
//生成新订单
export function orderInfoSet(address_id,good_id,type_id,good_number){
    return Post('/orderInfoSet',{
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
export function goodInfoGet(good_id){
    return Get(
        '/goodInfoGet',
        {
            good_id:good_id
        }
    )
}
export function userCollectionSet(good_id){
    return Get(
        '/userCollectionSet',
        {
            good_id:good_id
        }
    )
}