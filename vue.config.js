module.exports={
    devServer:{
        before:require('./mock/index.js'),
        // proxy: {
        //     "/api": {
        //         target: "http://127.0.0.1:3000",
        //         ws: true,
        //         changOrigin: true,
        //         pathRewrite: {
        //             "^/api": ""
        //         }
        //     }
        // }
    },
    css:{
        loaderOptions:{
            less:{
                lessOptions:{
                    modifyVars:{
                        'button-primary-background-color':'#FFCC32',
                        'primary-color':'#FFCC32',
                        'address-edit-detail-finish-color':'#FFCC32'
                        
                    }
                }
            }
        }
    }
}