/*
	客户端连接播控的代码
*/
var socket = null;
$(function(){
	setTimeout("linkSocket()",30);
	setTimeout("linkSocket()",35000);
});

// 连接操作
function linkSocket(){
	// 1.连接服务器
	socket = io.connect('http://localhost:1800'); // server ip
	var mName = "192.168.1.32"; // local ip
	socket.emit('newUser', mName);

	// 连接成功返回提示
	socket.on('open', function(json){
		console.log(json);
	});

	// 2.监听服务器端的命令
	var serverMsgName = "serverMsg"+mName;
	socket.on(serverMsgName, function(json){
		console.log(json);
		// 根据命令做执行对应的操作
		dealData(json);
	});

	// 3.断开连接
	socket.on('DisconnectReq', function(){
		socket.emit('disconnect');
	});
}

function btnClick(msg){
	console.log(msg);
	socket.emit("message",'192.168.1.11',msg);
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


