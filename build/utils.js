const path = require("path")


  
exports.isDev = function (){
    return process.env.NODE_ENV === 'development';
}

exports.resolve = function (dir) {
    return path.resolve(__dirname, dir)
}

exports.assetsPath = function (_path) {
    return path.posix.join("static", _path)
}

