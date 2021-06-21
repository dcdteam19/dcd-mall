const fs=require('fs')
const path=require('path')
const JSON5=require('json5')
const Mock=require('mockjs')

function getJsonFile(filepath){
    var json=fs.readFileSync(path.resolve(__dirname,filepath),'utf-8')
    return JSON5.parse(json)
}

module.exports=function(app){
    if(process.env.NODE_ENV=='dev'){
        //监听请求
        app.get('/user/userinfo',(req,res)=>{
            var json=getJsonFile('./userInfo.json5')
            //将生成的数据返回给浏览器
            res.json(Mock.mock(json))
        })
    }
}