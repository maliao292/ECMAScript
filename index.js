$(function() {
	class Riding {
		constructor(arg) {
			this.init()
		}
		init() {
        if(window.WebSocket){
            var ws = new WebSocket('ws://localhost:8001');

            ws.onopen = function(e){
                console.log("连接服务器成功");
                ws.send("game2");
            }
            ws.onclose = function(e){
                console.log("服务器关闭");
            }
            ws.onerror = function(){
                console.log("连接出错");
            }
            ws.onmessage = function(e){
                document.write(e.data)
            }
        }

			this.moving(b1, 'b1', 200)
			this.moving(b2, 'b2', 260)
			this.moving(b3, 'b3', 220)
			this.moving(b4, 'b4', 270)
			this.moving(b5, 'b5', 210)
			this.moving(b6, 'b6', 150)
		}
		moving(arr, img, speed) {
			arr.forEach((b) => {
				$('.' + img).animate({
					left: b.position[0],
					bottom: b.position[1],
				}, speed)
			})
		}
	}

	new Riding()
})
