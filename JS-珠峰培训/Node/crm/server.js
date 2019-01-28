var http = require('http'),
    fs = require('fs'),
    url = require('url');
var server1 = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true),
        pathname = urlObj.pathname,
        query = urlObj.query;
    // var reg = /\.(html|css|js|json|txt|ico|jpg|gif|png|bmp)/i;
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
        resule = {};
        resule["code"] = 0;
        resule["msg"] = con.length == 0 ? "没有任何客户信息" : "成功";
        resule['data'] = con;
        res.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
        res.end(JSON.stringify(resule));
        console.log("请求数据")
        return;
    }

    /* 2）根据参数 获取信息*/
    if (pathname === "/getInfo") {
        //    获取ID
        customId = query["id"];
        resule = {
            code: 1,
            msg:"客户不存在",
            data:null
        };
        for (var i = 0; i < con.length; i++) {
            if (con[i]["id"] == customId) {
                resule = {
                    code:0,
                    msg:"成功",
                    data:con[i]
                }
                break;
            }

        }
        res.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
        res.end(JSON.stringify(resule));
        return;
    }
    if(pathname === "/removeInfo"){
        customId = query["id"];
        var flag = false;
        for (var i = 0; i < con.length; i++) {
            if (con[i]["id"] == customId) {
             con.splice(i,1);
             flag = true;
                break;
            }
        }
        resule = {
            code: 1,
            msg:"删除失败",
        };
        if(flag){
            fs.writeFileSync(custom,JSON.stringify(con),"utf-8");
            resule = {
                code: 0,
                msg:"删除成功",
            };
        }
        res.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
        res.end(JSON.stringify(resule));
        return;
    }
    /* 新增 */
    if (pathname === "/addInfo"){
        var str = "";
        req.on('data',function (chunk) {
            str += chunk;
        });
        req.on('end',function () {
            // str
            if(str.length === 0){
                res.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
                res.end(JSON.stringify({
                    code: 0,
                    msg:"没有增加任何信息",
                }));
                return;
            }
            var data = JSON.parse(str);
            /*追加ID */
            var newId = con[con.length-1]['id']?0:null;
            data["id"] = parseFloat(newId)+1;
            con.push(data);
            fs.writeFileSync(custom,JSON.parse(con));
            res.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
            res.end(JSON.stringify({
                code: 0,
                msg:"成功 ",
            }));
        });
    }
});
server1.listen(81, function () {
    console.log(81)
})