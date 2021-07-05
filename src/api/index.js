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
            reject(err.data)        
        })    
    });
}

//关于用户接口
export function userInfoGet(){
    return Get('/userInfoGet',{})
}

//首页接口
export function getCategory1(){
    return Get('/category1/get',{})
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