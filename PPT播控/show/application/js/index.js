/*
	变量名称：len
	变量属性: ppt图片数量 10
	图片位置：images/ *
*/
var len = 10;

$(function () {
	swiperInt(); // swiper 初始化
	swiperPic(len, "CN"); // swiperPic(图片数量, 图片文件夹路径,默认在 images/ 下)

	getUrlId();
});

// 获取当前页面的网址
var getUrlId = function () {
	var id = getUrlParam("id");
	if (id) {
		switch (id) {
		case "CN":
			swiperPic(len, "CN");
			break;
		case "EN":
			swiperPic(len, "EN");
			break;
		default:
		}
	}
};

//截取链接中的参数(最后一位)
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null) {
		return unescape(decodeURI(r[2]));
	}
	return "";

}
