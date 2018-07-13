
var flag = false;
var timeout = null;
var socket = null;

function lineServer()
{
	socket = io.connect('http://localhost:1800');
	// socket = io.connect('127.0.0.1:6000');
	var mName2 = "192.168.1.11";
	var serverMsgName = "serverMsg"+mName2;
	//连接后注册新用户
	socket.emit('newUser', mName2);

	//连接成功返回的提示
	 socket.on('open', function(json)
	{
		flag = true;
		console.log(json);
	});

	 /*页面逻辑-- 开始*/
 	 var serverMsgName = "serverMsg"+ mName2;
	 socket.on(serverMsgName, function(json)
	 {
	 	console.log(json);
 		// 根据命令做执行对应的操作
 		dealData(json);
	 });

	 /*页面逻辑-- 结束*/


	//断开
	socket.on('DisconnectReq', function() {
		 socket.emit('disconnect');
	});

	timeout = setTimeout(function(){
		if(flag){
			//连上了
			clearTimeout(timeout);
		}else{
			window.location.reload();
		}
	},5000);
}

$(function(){
	lineServer();
});


function btnClick(msg){
	console.log(msg);
	socket.emit("message",'192.168.1.32',msg);
}

function dealData(msg){
	//0代表返回待机页面
	console.log(msg);
	switch(msg){
		case "page0":
			$(".btn li").removeClass("currentLi");
			$(".btn li").eq(0).addClass("currentLi");
			break;
		case "page1":
			$(".btn li").removeClass("currentLi");
			$(".btn li").eq(1).addClass("currentLi");
			break;
		case "page2":
			$(".btn li").removeClass("currentLi");
			$(".btn li").eq(2).addClass("currentLi");
			break;
		case "page3":
			$(".btn li").removeClass("currentLi");
			$(".btn li").eq(3).addClass("currentLi");
			break;
		case "index":
			window.location.href='./index.html';
			break;
	}
	if(msg.indexOf("volume")>=0){
		changeVolume(msg);
	}
};


