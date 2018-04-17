/*
	客户端连接播控的代码
*/
$(function(){
	setTimeout("linkSocket()",30);
	setTimeout("linkSocket()",35000);
});

// 连接操作
function linkSocket(){
	// 1.连接服务器
	var socket = null;
	socket = io.connect('http://localhost:1800'); // server ip
	var mName = "192.168.1.106"; // local ip
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

function dealData(msg){
	console.log(msg);
	switch(msg){
		case "iframe1":
			window.location.href='./iframe1.html';
			break;
		case "iframe2":
			window.location.href='./iframe2.html';
			break;
		case "page1":
			window.location.href='./page1.html';
			break;
		case "page2":
			window.location.href='./page2.html';
			break;
		case "page3":
			window.location.href='./page3.html';
			break;
		case "page4":
			window.location.href='./page4.html';
			break;
		case "index":
			window.location.href='./index.html';
			break;
	}
	if(msg.indexOf("volume")>=0){
		changeVolume(msg);
	}
};


var ifTrue = function(){
	$("._btnControl li ._nav").on("click", function() {

	});
};
