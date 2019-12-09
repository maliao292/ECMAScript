var http = require("http"),
    fs = require("fs"),
    url = require("url");

var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var query = urlObj.query;

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
        res.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
        resule = JSON.stringify(resule);
        resule = callback+"("+resule+")"
        res.end(resule);
        console.log("请求数据")
        return;
    }
});

server.listen(82, function () {
    console.log(82 + "_JSONP");
});