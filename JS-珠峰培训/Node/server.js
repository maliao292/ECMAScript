var http = require("http"),
    fs = require("fs"),
    url = require("url"); // 提供url.parse() 解析 url 地址

// HTTP
// http.createServer() 创建一个服务
// server.listen 为这个服务监听一个端口
var server = http.createServer(function (request, response) {
    // 请求客户端请求服务，切接收成功时执行
    // request 存放的是所有客户端的请求信息，包含客户端通过 ？ 传参的方式传递给服务器的数据内容
    // response
    console.log('成功!');
    console.log(request.url);
    //  解析 URL
    var urlObj = url.parse(request.url, true);
    console.log(urlObj.pathname);
    console.log(urlObj.query);

    // 根据 请求URL地址 （具体的根据地址中 pathname ）获取对应资源文件中的源代码
    if (urlObj.pathname == '/index.html') {
        // fs.readFileDync('./index.html','utf-8')
        // 路径       编码格式
        // 同步（文件读取完成 执行下一步操作）读取指定文件内容
       var con = fs.readFileSync('index.html', 'utf-8');
        // 向客户端 返回内容
       response.write(con);
        // response.write('66')
        // 告诉服务器 响应结束
        response.end();
    }
});
server.listen(880, function () {
    // 服务创建成功 && 端口号监听成功后执行
    console.log('server is ceate success,listening on 80 port!')
}); // 监听80端口