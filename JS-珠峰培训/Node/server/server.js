// 创建服务
var http = require("http"),
    fs = require("fs"),
    url = require('url');
// 创建一个服务
var server1 = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url, true),
        pathname = urlObj.pathname,
        queryt = urlObj.query;
    // 处理静态资源文件请求；
    var reg = /\.(html|css|js|json|txt|ico|jpg|gif|png|bmp)/i;
    if (reg.test(pathname)) {
        // 获取请求后缀名
        var suffix = reg.exec(pathname)[1].toUpperCase();
        //    根据后缀名 回去到当前文件 MIME 类型
        //MIME类型 :每种资源文件都有自己的表示类型，例如： HTML 文件 的MIME 类型 是“text/html”,
        // 浏览器 会按照代码的MIME类型处理
        var suffixMIME = "text/plain";
        switch (suffix) {
            case "HTML":
                suffixMIME = "text/html";
                break;
            case "CSS":
                suffixMIME = "text/css";
                break;
            case "JS":
                suffixMIME = "text/javascript";
                break;
            case "JSON":
                suffixMIME = "application/json";
                break;
            case "ICO":
                suffixMIME = "application/octet-stream";
                break;
            case "JPG":
                suffixMIME = "image/jpeg";
                break;
            case "GIF":
                suffixMIME = "image/gif";
                break;
            case "PNG":
                suffixMIME = "image/png";
                break;
            case "bmp":
                suffixMIME = "application/x-MS-bmp";
                break;
        }

        // 按照指定的目录读取文件中的内容或者代码（读取出来的内容都是字符串格式的） => 前端路由
        try {
            var conFile = fs.readFileSync("." + pathname, "utf-8");
            // 重写头部相应信息：告诉客户端返回的客户端我返回的内容 MIME 类型 指定 UTF-8 编码格式
            response.writeHead(200, {'content-type': suffixMIME + ';charset=utf-8'})
            response.end(conFile);
        } catch (e) {
            response.writeHead(404, {'content-type': 'text/plain;charset=utf-8'});
            response.end("请求失败");
        }
    }


});
// 监听端口
server1.listen(810, function (e) {
    console.log('server is ceate success,listening on 80 port!');
});