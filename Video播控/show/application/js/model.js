$(function () {
	Int();
});

/*

可修改 start
*/

var arr = ['jqr1519438316103'];

var videoInfo = [
	{
		x: '1920',
		y: '1080'
	}
];


/*

可修改 end
*/



var c = $('#container');
var cW = c[0].clientWidth;
var cH = c[0].clientHeight;


function Int() {
	$('#myVideo').css("width", videoInfo[0].x + "px");
	$('#myVideo').css("height", videoInfo[0].y + "px");
	$('#myVideo').css("margin-left", (-videoInfo[0].x / 2) + "px");
	$('#myVideo').css("margin-top", (-videoInfo[0].y / 2) + "px");
	$('#myVideo').attr("src", "application/video/" + arr[0] + ".mp4");
}


function changeVal(v) {
	var video = $('#myVideo');

	var a = videoInfo[v].x;
	var b = videoInfo[v].y;

	if (b > cH) {
		$('#myVideo').css({
			"width": "auto",
			"height": cH + "px"
		});
		console.log("视频超出 864 高度啦~~");

		let t1 = setTimeout(function () {
			let videoW = video[0].clientWidth;
			let videoH = video[0].clientHeight;

			$('#myVideo').css({
				"margin-left": -(videoW / 2) + "px",
				"margin-top": -(videoH / 2) + "px"
			});
		}, 100);


	} else if (a > cW) {
		$('#myVideo').css({
			"width": cW + "px",
			"height": "auto"
		});
		console.log("视频超出 2304 宽度啦~~");


		let t2 = setTimeout(function () {
			let videoW = video[0].clientWidth;
			let videoH = video[0].clientHeight;

			$('#myVideo').css({
				"margin-left": -(videoW / 2) + "px",
				"margin-top": -(videoH / 2) + "px"
			});
		}, 100);

	} else {

		$('#myVideo').css({
			"width": videoInfo[v].x + "px",
			"height": videoInfo[v].y + "px",
			"margin-left": -(videoW / 2) + "px",
			"margin-top": -(videoH / 2) + "px"
		});
	}
}
