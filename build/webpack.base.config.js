const path = require("path")
const utils = require("./utils")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    // 入口
    entry: {
        app: "./src/index" 
    },
    // 出口
    output: {
        path : utils.resolve("../dist"),
        filename: utils.assetsPath("js/[name].[hash].js") ,
        chunkFilename: utils.assetsPath("js/[name].[chunkhash].js"),
        publicPath: "/" // 打包后的资源的访问路径前缀
    },
    // 模块
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',//loader的名称（必须）
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            hmr: utils.isDev(),  // 开发环境热更新 ，然而不起作用
                            reloadAll:true,
                        }
                    },
                    // {
                    //     loader: 'style-loader', // 创建 <style></style>  // MiniCssExtractPlugin 有冲突，所以删掉
                    // },
                    { 
                        loader: 'css-loader',  // 转换css
                        options: { importLoaders: 1 } 
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            hmr: utils.isDev(),  // 开发环境热更新 ，然而不起作用
                            reloadAll:true,
                        }
                    },
                    // {
                    //     loader: 'style-loader', 
                    // },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader', // 编译 Less -> CSS
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'], // 解析扩展。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
        alias: {
            '@': path.join(__dirname, '..', "src") // 在项目中使用@符号代替src路径，导入文件路径更方便
        }
    },
    plugins:[
        new CopyWebpackPlugin([
            {
                from: utils.resolve('../static'),  // 从哪个目录copy
                to: "static", // copy到那个目录
                ignore: ['.*']
            }
        ]),
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('css/[name].[hash].css'),
            chunkFilename: utils.assetsPath('css/[id].[chunkhash].css'),
        })
    ]
}