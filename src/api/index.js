import axios from 'axios'
//开发本地代理
if(process.env.NODE_ENV=='dev'){
    axios.defaults.baseURL = '/user' 
    // console.log('dev')
}
else{
    // axios.defaults.baseURL = '/api' 
    axios.defaults.baseURL = 'http://8.142.27.206:3000' 
    // console.log(process.env.NODE_ENV)
}


//设置头部
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
//设置响应超时时间
axios.defaults.timeout = 200000;
//设置接口拦截器
axios.interceptors.request.use(
    config => {
        config.headers = { DeviceType : 'H5' }
        return config
});

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

export function getUserInfo(){
    return Get('/userinfo',{})
}