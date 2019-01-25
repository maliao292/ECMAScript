var http = require('http'),
    fs = require('fs'),
    url = require('url');
var server1 = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true),
        pathname = urlObj.pathname,
        query = urlObj.query;
    var reg = /\.(html|css|js|json|txt|ico|jpg|gif|png|bmp)/i;
    if (reg.test(pathname)) {
        var suffix = reg.exec(pathname)[1].toUpperCase();
        var suffixMIME = "text/html";
        switch (suffix) {
            case "CSS":
                suffixMIME = "text/css";
                break;
            case "JS":
                suffixMIME = "text/javascript";
                break;
        }
        try {
            var conFile = fs.readFileSync('./'+pathname,"utf-8");
            res.writeHead(200,{'content-type':suffixMIME+';charset=utf-8;'});
            res.end(conFile);
        } catch (e) {
            res.writeHead(404,{'content-type':'text/plain;charset=utf-8;'});
            res.end("文件不存在。。。");
        }
    }
    var con=null,resule=null,custom = "./json/custom.json"
    if(pathname === "/getList"){
        var con = fs.readFileSync(custom,"utf-8");
        con.length === 0?con="[]":null;
        con = JSON.parse(con);

        resule={};
        resule["code"]= 0;
        resule["msg"]= con.length==0?"没有任何客户信息":"成功";
        resule['data']=con;
        res.writeHead(200,{'content-type':'application/json;charset=utf-8;'});
        res.end(JSON.stringify(resule));
        console.log("请求数据")
       // res.end(resule);
        return;
    }
});
server1.listen(81, function () {
    console.log(81)
})