'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const sql = require('mssql')
async function connectDatebase() {
  await sql.connect('mssql://sa:zx156239@211.149.182.30:1433/jjrj')
}
function backData(res,rc,rm,rs) {
  let restful = {
    rc:rc,
    rm:rm,
    rs:rs
  }
  res.json(restful);
}
async function userLogin(res,params) {
    try {
        let userName = params.loginID
        let userPassword = params.password
        await connectDatebase()
        let str = `select * from BlogUsers where userName = '${userName}' and userPassword = '${userPassword}'`
        console.log(str);
        const result = await sql.query(str)
        if(result.rowsAffected[0]<1){
          throw "name or password is wrong"
        }
        let restful = {
          rc:1,
          rm:"login success",
          rs:result
        }
        res.json(restful);
    } catch (err) {
        // ... error checks
        let restful = {
          rc:0,
          rm:err,
          rs:{}
        }
        res.json(restful);
    } finally {
      sql.close()
    }
}
async function setInfo(res,params) {
  let {emil,phone,hobby,birthday,loginID} = params || {}
  try {
    await connectDatebase()
    let str = `update BlogUsers set e_mail='${emil||'xxx@qq.com'}',born='${birthday||"1900/01/01"}',phone=${phone||10086},hobby='${hobby||'暂无介绍'}' from BlogUsers where userID = '${loginID}'`
    console.log(str);
    const result = await sql.query(str)
    backData(res,1,"success",{})
  } catch (e) {
    backData(res,0,"error",e)

  } finally {
    sql.close()
  }
}
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    before: function(app) {
      app.post('/user/login', function(req, res) {
        req.rawBody = ''
        req.on('data', function(chunk) {
            req.rawBody += chunk;
        });
        req.on('end', function() {
          console.log(req.rawBody);
          let params = JSON.parse(req.rawBody)
          userLogin(res,params)
        });
      });
      app.post('/user/setInfo', function(req, res) {
        req.rawBody = ''
        req.on('data', function(chunk) {
            req.rawBody += chunk;
        });
        req.on('end', function() {
          console.log(req.rawBody);
          let params = JSON.parse(req.rawBody)
          setInfo(res,params)
        });
      });
    },
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
