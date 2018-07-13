var swiper = null;

// len = 图片数量  picLoc = 图片文件夹路径
var swiperPic = function (len, picLoc) {
	let arr = [];
	let lens = parseInt(len);
	swiper.removeAllSlides();
	swiper.autoplay.stop();

	// arr数组 追加 Html、遍历图片数量
	for (var i = 0; i < lens; i++) {
		arr.push('<div class="swiper-slide"><img alt="' + i + '" src="application/images/' + picLoc + '/' + (i + 1) + '.jpg"></div>');
	};

	swiper.appendSlide(arr);
	swiper.update();
	swiper.slideTo(1);
	swiper.autoplay.start();
};


// swiper 初始化
var swiperInt = function () {
	swiper = new Swiper('.swiper-container', {
		loop: true,
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
		observeParents: true, //修改swiper的父元素时，自动初始化swiper
		initialSlide: 0,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			paginationClickable: true,

		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
};



// 上一页
function btnPrev() {
	swiper.slidePrev();
};

// 下一页
function btnNext() {
	swiper.slideNext();
};

// 停止自动播放
function stopAutoPlay() {
	swiper.autoplay.stop();
}

// 开始自动播放
function startAutoPlay() {
	swiper.autoplay.start();
}

// PPT 回到第一页
function gotoFirst() {
	swiper.slideTo(1, 1000, true);
}

// PPT 跳转到指定页面
function slidesTo(num) {
	swiper.slideTo(num, 1000, false); //切换到第一个slide，速度为1秒
}
