/*
	操作端
*/
var socket = null; //socket 对象
var msgObj = {};   //发送的命令对象

$(function(){
	socket = io.connect('http://localhost:1800');
	var mName2 = "192.168.1.12";

	var serverMsgName = "serverMsg"+mName2;

	// 连接后注册新用户
	socket.emit('newUser', mName2);

	// 练接成功返回的提示
	socket.on('open', function(json){
		console.log(json);
		// alert(json+"//ok");
	});

	/*页面逻辑-- 开始*/

	/*页面逻辑-- 结束*/

	// 断开
	socket.on('DisconnectReq', function(){
		socket.emit('disconnect');
	});
});

// 点击事件
function btnClick (msg) {
	socket.emit('message','192.168.1.106',msg);
}
