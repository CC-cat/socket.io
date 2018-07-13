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
	var mName = "192.168.1.104"; // local ip
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
	if (msg) {
		isRealNum(msg);

		if (msg.indexOf("volume") >= 0) {
			changeVolume(msg);
		}

		if (msg.indexOf("ppt") >= 0) {
			let str = msg.slice(3);
			changePPT(str);
		}

		switch (msg) {
		case 'btnPrev': // ppt
			btnPrev();
			break;
		case 'btnNext':
			btnNext();
			break;
		case 'startAutoPlay':
			startAutoPlay();
			break;
		case 'stopAutoPlay':
			stopAutoPlay();
			break;
		case 'gotoFirst':
			gotoFirst();
			break;
		case "index":
			window.location.href = './index.html';
			break;
		}
	}
}

var changePPT = function (str) {
	console.log(str);
	switch (str) {
	case 'CN':
		// 切换中文PPT
		window.location.href = './index.html?id=CN';
		break;
	case 'EN':
		// 切换英文PPT
		window.location.href = './index.html?id=EN';
		break;
	default:

	}
};

function isRealNum(val) {
	// isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除
	if (val === "" || val == null) {
		return false;
	}
	if (!isNaN(val)) {
		// console.log("我是纯数字");
		slidesTo(val);
		return true;
	} else {
		return false;
	}
}
