var http = require("http"),
    fs = require("fs"),
    url = require("url");

var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var query = urlObj.query;
    var pathname = urlObj.pathname;
    var reg = /\.(html|css|js|json|txt|ico|jpg|gif|png|bmp|woff2|woff|ttf)/i;

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
            case "WOFF2":
                suffixMIME = " application/x-font-woff";
                break;
            case "WOFF":
                suffixMIME = " application/x-font-woff";
                break;
            case "TTF":
                suffixMIME = "application/octet-stream";
                break;
        }
        try {
            var conFile = fs.readFileSync('./' + pathname, "utf-8");
            res.writeHead(200, {'content-type': suffixMIME + ';charset=utf-8;'});
            res.end(conFile);
        } catch (e) {
            res.writeHead(404, {'content-type': 'text/plain;charset=utf-8;'});
            res.end("文件不存在。。。");
        }
    }
    var con = null,
        resule = null,
        customId = null,
        custom = "./json/custom.json";
    var con = fs.readFileSync(custom, "utf-8");
    con.length === 0 ? con = "[]" : null;
    con = JSON.parse(con);
    if (pathname === "/getList") {
        var callback = query.callback
        resule = {};
        resule["code"] = 0;
        resule["msg"] = con.length == 0 ? "没有任何客户信息" : "成功";
        resule['data'] = con;
        res.writeHead(200, {'content-type': 'text/javascript;charset=utf-8;'});
        resule = JSON.stringify(resule);
        resule = callback + "(" + resule + ")"
        res.end(resule);
        console.log(resule)
        console.log("请求数据")
        return;
    }
});

server.listen(82, function () {
    console.log(82 + "_JSONP");
});