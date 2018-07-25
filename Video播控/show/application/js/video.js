/*
	播放之视频的功能
*/

var myVideo = null;

onload = function () {
	myVideo = document.getElementById("myVideo");
	myVideo.volume = 1;
}



function btnPause() {
	if (myVideo.played) {
		myVideo.pause();
	}
}

function btnPlay() {
	if (myVideo.paused) {
		myVideo.play();
	}
}

function btnStop() {
	myVideo.currentTime = 0; // 视频播放的当前时间/秒
	myVideo.pause();
}

//设置音量
function changeVolume(msg) {
	if (msg != null && msg != "") {
		var volumeNo = msg.substring(6, msg.length);
		if (!isNaN(volumeNo)) {
			myVideo.volume = volumeNo / 10;
		} else {
			myVideo.volume = 1;
		}
	}
}

//快进
function goAhead() {
	myVideo.currentTime += 10;
}

//快退
function goBack() {
	myVideo.currentTime -= 10;
}
