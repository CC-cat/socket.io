/*
	客户端连接播控的代码
*/
$(function () {
	setTimeout("linkSocket()", 30);
	setTimeout("linkSocket()", 35000);
});

// 连接操作
function linkSocket() {
	// 1.连接服务器
	var socket = null;
	socket = io.connect('http://localhost:1800'); // server ip
	var mName = "192.168.1.111"; // local ip
	socket.emit('newUser', mName);

	// 连接成功返回提示
	socket.on('open', function (json) {
		console.log(json);
	});

	// 2.监听服务器端的命令
	var serverMsgName = "serverMsg" + mName;
	socket.on(serverMsgName, function (json) {
		console.log(json);
		// 根据命令做执行对应的操作
		dealData(json);
	});

	// 3.断开连接
	socket.on('DisconnectReq', function () {
		socket.emit('disconnect');
	});
}


function dealData(msg) {

	if (msg.indexOf("volume") >= 0) {
		changeVolume(msg);
	}

	switch (msg) {
	case 'play': //video
		btnPlay();
		break;
	case 'pause':
		btnPause();
		break;
	case 'stop':
		btnStop();
		break;
	case 'ahead':
		goAhead();
		break;
	case 'back':
		goBack();
		break;
	case "index":
		window.location.href = './index.html';
		break;
	default:
		isInArray(arr, msg);
		break;
	}

}

var myVideo = document.getElementById("myVideo");


function isInArray(arr, value) {

	let vLink = $("#myVideo").attr("src").substring(18);
	let vData = value + '.mp4';
	// console.log(vLink);

	for (var i = 0; i < arr.length; i++) {
		if (value === arr[i]) {
			if (vData !== vLink) {

				indexOf(arr, vData);
				// console.log(indexOf(arr, vData));
				getMyVideoInfo(value);

				myVideo.src = 'application/video/' + value + '.mp4';
				myVideo.load();
			} else {

			}

			return true;
		}
	}
	return false;
}



function getMyVideoInfo(value) {

	var v = value.slice(0,1) -1;

	changeVal(v);

}


function indexOf(arr, item) {
	return arr.indexOf(item); // 直接返回index下标
}
