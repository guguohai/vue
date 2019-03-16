module.exports = {
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#1890ff',
                    'link-color': '#1890ff',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                pathRewrite: {
                    "^/api": "/api"
                }
            }
        }
    }

}