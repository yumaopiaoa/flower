$(function() {
	var timer = null;
	var onOff = true;
	var myGold = 8888; //我的金豆

	var jieliu = true;
	
	//判断我的金豆数量
	function myGolds(targetAmount) {
		if(myGold < 0) {
			tips("金豆不足，请充值")
		}
		$("#mine .my_gold b").text(myGold);
	}
	myGolds();

	//打赏美女
	$("#top_bar .person_img img").click(function() {
		var exceptional = 1000; //打赏一次金额
		var num = 0;

		if(onOff == false) {
			return
		} else if(myGold < exceptional) {
			tips("金豆不足，请充值");
			return
		};
		clearInterval(timer);

		onOff = false;
		timer = setInterval(function() {
			$("#top_bar .person_img img").attr("src", "./assets/images/person" + num + ".png");
			if(num >= 10) {
				clearInterval(timer);
				$("#top_bar .person_img img").attr("src", "./assets/images/person0.png");
				onOff = true;
				myGold -= exceptional;
				myGolds();
				$('#top_bar .person_img').append($("<i class='heart'></i>"));
				$(".heart").animate({
					top: "33.75rem",
					left: "3.125rem"
				}, function() {
					$('.heart').remove()
				})
			} else {
				num++;
			}
		}, 100)
	});

	//提示框
	function tips(text) {
		$("#tips p").text(text);
		$("#tips").stop().show();
		setTimeout(function() {
			$("#tips p").text("");
			$("#tips").hide();
		}, 2000)
	}

	///////////////切换投注金额
	var div = $("<div class='opa'></div>");
	$("#mine ul p").before(div);
	for(var i = 0; i < $("#mine ul li").length; i++) {

		$("#mine ul li .li_box").eq(i).click(function() {
			if($(this).css("opacity") == 1) {
				return
			}

			for(var j = 0; j < $("#mine ul li").length; j++) {
				$("#mine ul li .li_box").eq(j).removeClass("shows")
				$("#mine ul li .li_box").eq(j).stop().animate({
					opacity: 0.5,
					top: "0.375rem"
				}, 300)
			};
			$(this).addClass("shows");
			$(this).stop().animate({
				opacity: 1,
				top: 0
			}, 300);
		})
	}

	//切换玩法
	$(".prev").on("click", function() {
		$("#main").animate({
			left: 0
		})
		$(".next").stop().fadeToggle();
		$(this).stop().fadeOut(50);
	})
	$(".next").on("click", function() {
		$("#main").animate({
			left: "-100%"
		})
		$(".prev").stop().fadeToggle();
		$(this).stop().fadeOut(50);
	});
	//数组求和
	function sum(arr) {
		var s = 0;
		for(var i = arr.length - 1; i >= 0; i--) {
			s += arr[i];
		}
		return s;
	}
	//判断大小
	function toSize(num) {
		if(num > 10) {
			$("#top_bar p .size").text("大");
			$(".sthtx .da").addClass("show");
			myGold += parseInt($(".sthtx .da").find("a").text()) * 0.8 + parseInt($(".sthtx .da").find("a").text());
		} else {
			$("#top_bar p .size").text("小");
			$(".sthtx .xiao").addClass("show");
 			myGold += parseInt($(".sthtx .xiao").find("a").text()) * 0.8 + parseInt($(".sthtx .xiao").find("a").text());
		}
	}
	//判断花色
	function flowerColor(a) {
		switch(a) {
			case 0:
				$("#top_bar p .flower").text("梅");
				$(".block").eq(0).addClass("show");
				myGold += parseInt($(".block").eq(0).find("a").text()) * 2.8 + parseInt($(".block").eq(0).find("a").text());
				break;
			case 1:
				$("#top_bar p .flower").text("兰");
				$(".block").eq(1).addClass("show");
				myGold += parseInt($(".block").eq(1).find("a").text()) * 2.8 + parseInt($(".block").eq(1).find("a").text());
				break;
			case 2:
				$("#top_bar p .flower").text("竹");
				$(".block").eq(2).addClass("show");
				myGold += parseInt($(".block").eq(2).find("a").text()) * 2.8 + parseInt($(".block").eq(2).find("a").text());
				break;
			case 3:
				$("#top_bar p .flower").text("菊");
				$(".block").eq(3).addClass("show");
				myGold += parseInt($(".block").eq(3).find("a").text()) * 2.8 + parseInt($(".block").eq(3).find("a").text());
				break;
		}
	}
	//判断和值
	function toAnd(num) {
		
		switch(num) {
			case 4:
				$(".hzdxmin .hzdxmin_box").eq(num).addClass("show");
				myGold += parseInt($(".hzdxmin .hzdxmin_box").eq(0).find("a").text()) * 50 + parseInt($(".hzdxmin .hzdxmin_box").eq(0).find("a").text());
				break;
			case 5:
				$(".hzdxmin .hzdxmin_box").eq(1).addClass("show");
				myGold += parseInt($(".hzdxmin .hzdxmin_box").eq(1).find("a").text()) * 18 + parseInt($(".hzdxmin .hzdxmin_box").eq(1).find("a").text());
				break;
			case 6:
				$(".hzdxmin .hzdxmin_box").eq(2).addClass("show");
				myGold += parseInt($(".hzdxmin .hzdxmin_box").eq(2).find("a").text()) * 14 + parseInt($(".hzdxmin .hzdxmin_box").eq(2).find("a").text());
				break;
			case 7:
				$(".hzdxmin .hzdxmin_box").eq(3).addClass("show");
				myGold += parseInt($(".hzdxmin .hzdxmin_box").eq(3).find("a").text()) * 12 + parseInt($(".hzdxmin .hzdxmin_box").eq(3).find("a").text());
				break;
			case 8:
				$(".hzdxmin .hzdxmin_box").eq(4).addClass("show");
				myGold += parseInt($(".hzdxmin .hzdxmin_box").eq(4).find("a").text()) * 8 + parseInt($(".hzdxmin .hzdxmin_box").eq(4).find("a").text());
				break;
			case 9:
				$(".hzdxmin .hzdxmin_box").eq(5).addClass("show");
				myGold += parseInt($(".hzdxmin .hzdxmin_box").eq(5).find("a").text()) * 6 + parseInt($(".hzdxmin .hzdxmin_box").eq(5).find("a").text());
				break;
			case 10:
				$(".hzdxmin .hzdxmin_box").eq(6).addClass("show");
				myGold += parseInt($(".hzdxmin .hzdxmin_box").eq(6).find("a").text()) * 6 + parseInt($(".hzdxmin .hzdxmin_box").eq(6).find("a").text());
				break;
			case 11:
				$(".hzdxmax .hzdxmax_box").eq(6).addClass("show");
				myGold += parseInt($(".hzdxmax .hzdxmax_box").eq(6).find("a").text()) * 6 + parseInt($(".hzdxmin .hzdxmin_box").eq(6).find("a").text());
				break;
			case 12:
				$(".hzdxmax .hzdxmax_box").eq(5).addClass("show");
				myGold += parseInt($(".hzdxmax .hzdxmax_box").eq(5).find("a").text()) * 6 + parseInt($(".hzdxmin .hzdxmin_box").eq(5).find("a").text());
				break;
			case 13:
				$(".hzdxmax .hzdxmax_box").eq(4).addClass("show");
				myGold += parseInt($(".hzdxmax .hzdxmax_box").eq(4).find("a").text()) * 8 + parseInt($(".hzdxmin .hzdxmin_box").eq(4).find("a").text());
				break;
			case 14:
				$(".hzdxmax .hzdxmax_box").eq(3).addClass("show");
				myGold += parseInt($(".hzdxmax .hzdxmax_box").eq(3).find("a").text()) * 12 + parseInt($(".hzdxmin .hzdxmin_box").eq(3).find("a").text());
				break;
			case 15:
				$(".hzdxmax .hzdxmax_box").eq(2).addClass("show");
				myGold += parseInt($(".hzdxmax .hzdxmax_box").eq(2).find("a").text()) * 14 + parseInt($(".hzdxmin .hzdxmin_box").eq(2).find("a").text());
				break;
			case 16:
				$(".hzdxmax .hzdxmax_box").eq(1).addClass("show");
				myGold += parseInt($(".hzdxmax .hzdxmax_box").eq(1).find("a").text()) * 18 + parseInt($(".hzdxmin .hzdxmin_box").eq(1).find("a").text());
				break;
			case 17:
				$(".hzdxmax .hzdxmax_box").eq(0).addClass("show");
				myGold += parseInt($(".hzdxmax .hzdxmax_box").eq(0).find("a").text()) * 50 + parseInt($(".hzdxmin .hzdxmin_box").eq(0).find("a").text());
				break;
		}
	}

	function toDss(a) {
		switch(a) {
			case 0:
				myGold += parseInt($(".dhua .dhua_box").eq(0).find('a').text()) * 1 + parseInt($(".dhua .dhua_box").eq(0).find('a').text());
				break;
			case 1:
				myGold += parseInt($(".dhua .dhua_box").eq(1).find('a').text()) * 1 + parseInt($(".dhua .dhua_box").eq(1).find('a').text());
				break;
			case 2:
				myGold += parseInt($(".dhua .dhua_box").eq(2).find('a').text()) * 2 + parseInt($(".dhua .dhua_box").eq(2).find('a').text());
				break;
			case 3:
				myGold += parseInt($(".dhua .dhua_box").eq(3).find('a').text()) * 2 + parseInt($(".dhua .dhua_box").eq(3).find('a').text());
				break;
			case 4:
				myGold += parseInt($(".dhua .dhua_box").eq(4).find('a').text()) * 3 + parseInt($(".dhua .dhua_box").eq(4).find('a').text());
				break;
			case 5:
				myGold += parseInt($(".dhua .dhua_box").eq(5).find('a').text()) * 3 + parseInt($(".dhua .dhua_box").eq(5).find('a').text());
				break;
		}
	}
	//数组排序
	function sort(a, b) {
		return a - b
	}
	//数组每个值加一
	function galOne(arr) {
		for(var i = 0; i < arr.length; i++) {
			arr[i] = parseInt(arr[i]) + 1;
		}
		console.log(arr)
		return arr
	}
	//判断重复内容
	function toRepetition(arr) {
		var ary = arr;
		repeatA = 0;
		var nary = ary.sort();

		for(var i = 0; i < ary.length; i++) {

			if(nary[i] == nary[i + 1]) {
				repeatA = nary[i] - 1;
			}
		}
	}

	//判断豹子号
	function calc() {
		newarr = dianshuarr;
		galOne(newarr); //加一
		newarr.sort(sort); //排序
		console.log("点数1", newarr);
		var newArr = calcResult(newarr);
		console.log(newArr);

		if(newArr[0] == 1) {
			console.log("组三");
			toRepetition(dianshuarr);
			console.log(repeatA);
			switch(repeatA) {
				case 0:
					$(".ydh_box").eq(0).addClass("show");
					myGold += parseInt($(".ydh_box").eq(0).find("a").text()) * 8 + parseInt($(".ydh_box").eq(0).find("a").text());
					break;
				case 1:
					$(".ydh_box").eq(1).addClass("show");
					myGold += parseInt($(".ydh_box").eq(1).find("a").text()) * 8 + parseInt($(".ydh_box").eq(1).find("a").text());
					break;
				case 2:
					$(".ydh_box").eq(2).addClass("show");
					myGold += parseInt($(".ydh_box").eq(2).find("a").text()) * 8 + parseInt($(".ydh_box").eq(2).find("a").text());
					break;
				case 3:
					$(".ydh_box").eq(3).addClass("show");
					myGold += parseInt($(".ydh_box").eq(3).find("a").text()) * 8 + parseInt($(".ydh_box").eq(3).find("a").text());
					break;
				case 4:
					$(".ydh_box").eq(4).addClass("show");
					myGold += parseInt($(".ydh_box").eq(4).find("a").text()) * 8 + parseInt($(".ydh_box").eq(4).find("a").text());
					break;
				case 5:
					$(".ydh_box").eq(5).addClass("show");
					myGold += parseInt($(".ydh_box").eq(5).find("a").text()) * 8 + parseInt($(".ydh_box").eq(5).find("a").text());
					break;
			}
		} else if(newArr[0] == 2) {
			$(".tongxuan").addClass("show");
			myGold += parseInt($(".tongxuan").find("a").text()) * 24 + parseInt($(".tongxuan").find("a").text());
			console.log("豹子");
			var a = parseInt(dianshuarr[0]) - 1;
			console.log(a);

			switch(a) {
				case 0:
					$('.sthdx_box').eq(0).addClass("show");
					myGold += parseInt($('.sthdx_box').eq(0).find("a").text()) * 50 + parseInt($('.sthdx_box').eq(0).find("a").text());
					break;
				case 1:
					$('.sthdx_box').eq(1).addClass("show");
					myGold += parseInt($('.sthdx_box').eq(0).find("a").text()) * 50 + parseInt($('.sthdx_box').eq(0).find("a").text());
					break;
				case 2:
					$('.sthdx_box').eq(2).addClass("show");
					myGold += parseInt($('.sthdx_box').eq(0).find("a").text()) * 50 + parseInt($('.sthdx_box').eq(0).find("a").text());
					break;
				case 3:
					$('.sthdx_box').eq(3).addClass("show");
					myGold += parseInt($('.sthdx_box').eq(0).find("a").text()) * 50 + parseInt($('.sthdx_box').eq(0).find("a").text());
					break;
				case 4:
					$('.sthdx_box').eq(4).addClass("show");
					myGold += parseInt($('.sthdx_box').eq(0).find("a").text()) * 50 + parseInt($('.sthdx_box').eq(0).find("a").text());
					break;
				case 5:
					$('.sthdx_box').eq(5).addClass("show");
					myGold += parseInt($('.sthdx_box').eq(0).find("a").text()) * 50 + parseInt($('.sthdx_box').eq(0).find("a").text());
					break;
			}
		} else {
			console.log("组六")
			return;
		}

	}

	function calcResult(arr) {
		var newArr = [];
		if(arr[2] - arr[1] == 0) {
			newArr[0] = 1;
		} else {
			newArr[0] = 0;
		}
		if(arr[1] - arr[0] == 0) {
			newArr[0] = ++newArr[0];
		} else {
			newArr[0];
		}
		console.log(newArr);
		return newArr;
	}

	//随机数
	function ranDom(num, num1) {
		return Math.floor(Math.random() * (num1 - num + 1) + num);
	}

	function setInter() {
		var tzTimes = 43; //投注时间

		var kjTimes = 9; //开奖时间
		var tzLottery = null;
		var kj_Lottery = null;
		var mlzj = ["img/梅.png", "img/兰.png", "img/竹.png", "img/菊.png"];
		var dianshu = ["0%", "20%", "40%", "60%", "80%", "100%"];
		var $kjp = $("#kj_box .kj_box_main .kj_box_main_yp .kj_box_main_yp_box p");
		var $kji = $('#kj_box .kj_box_main .kj_box_main_yp .kj_box_main_yp_box i');
		$('.shanzi b').text(tzTimes + "s");
		tips("请投注");
		$('.shanzi p').text("投注时间还剩");
		jieliu = true;
		$(".item").removeClass("show");
		$('.item p').remove();
		$(".item a").text(0);
		$(".item a").hide();
		tzLottery = setInterval(function() {
			tzTimes--;
			if(tzTimes == 0) {
				$('.shanzi p').text("距离开奖还剩");
				$('.shanzi b').text('.......');
				clearInterval(tzLottery);
				kj_Lottery = setInterval(function() {
					kjTimes--;
					$('.shanzi b').text(kjTimes + "s");
					if(kjTimes == 0) {
						$('.shanzi p').text("开奖中");
						$('.shanzi b').text('');
						clearInterval(kj_Lottery);
						$("#kj_box").show();
						$kji.css("background-position", "0 100%");
						var ranhuaseNum = ranDom(0, mlzj.length - 1);
						var randomCc = mlzj[ranhuaseNum];

						$kji.css("animation", "gogogo .3s linear both infinite");
						$kjp.css("background", "");

						setTimeout(function() {
							$kji.css("animation", "");
							$('.shanzi p').text("开奖完成");
							$kjp.css("background", "url(" + randomCc + ")no-repeat");
							$kjp.css("background-size", "contain");
							$kjp.show();
							dianshuarr = [];
							$kji.each(function(i, ele) {
								ranPre = ranDom(0, dianshu.length - 1);
								dianshuarr.push(ranPre);
								$kji.eq(i).css("background-position", "0 " + dianshu[ranPre]);
							});
							setTimeout(function() {
								var arrValue = sum(dianshuarr) + dianshuarr.length;
								$("#kj_box").hide();
								$("#top_bar p i").each(function(i, ele) {
									$("#top_bar p i").eq(i).css("background-position", "0 " + dianshu[dianshuarr[i]])
								});
								console.log("点数", dianshuarr);

								$("#top_bar p .num").text(arrValue);
								toSize(arrValue);
								flowerColor(ranhuaseNum);
								toAnd(arrValue);
								$(".dhua .dhua_box").each(function(i, ele) {
									$(".dhua .dhua_box").eq(dianshuarr[i]).addClass("show");
									toDss(dianshuarr[i]);
								});
								calc();
								myGolds();
								setTimeout(setInter, 3000)
							}, 2000)
						}, 3000)

					} else if(kjTimes <= 2) {
						tips("即将开奖");
					}
				}, 1000)
			} else if(tzTimes <= 2) {
				$('.shanzi b').text(tzTimes + "s");
				jieliu = false;
				tips("买定离手")
			} else {
				$('.shanzi b').text(tzTimes + "s");
			}

		}, 1000)
	}
	setInter();

	//菜单点击显示隐藏
	$(".menu").on("click", function(e) {
		$('.menu_infor').stop().fadeToggle(200);

		$(document).one("click", function() {
			$('.menu_infor').stop().fadeOut(200);
		});
		e.stopPropagation();
	});
	$(".menu").on("click", function(e) {
		e.stopPropagation();
	});

	//	开始投注
	var kaiguan = true;
	$(".item a").text(0);
	$(".item a").hide();

	$(".item").each(function(i, ele) {

		$(this).on("click", function(e) {
			console.log("开关", kaiguan);
			console.log("节流", jieliu);

			if(jieliu == false) {
				return
			};
			if(kaiguan == false) {
				return
			}

			var pageX = e.pageX - 8; //鼠标坐标x
			var pageY = e.pageY - 8; //鼠标坐标y

			var disX = $(this).offset().left; //自身距离左边距离
			var disY = $(this).offset().top; //自身距离右边距离
			var lx = pageX - disX;
			var ly = pageY - disY;

			var cx = $('footer .player ul li.active').offset().left; //玩家位置
			var cy = $('footer .player ul li.active').offset().top; //玩家位置
			var p = $("<p class='creatp bgc1'></p>");
			var dx = cx - pageX;
			var dy = cy - pageY;
			var _this = $(this);
			var numA = parseInt($(this).find("a").text()); //
			var myChip = 0; //我的筹码

			if($("#mine li .li_box").eq(0).css("opacity") == 1) {
				myChip = 1000;
				p.addClass("bgc1");
			} else if($("#mine li .li_box").eq(1).css("opacity") == 1) {
				myChip = 10000;
				p.addClass("bgc2");
			} else if($("#mine li .li_box").eq(2).css("opacity") == 1) {
				myChip = 100000;
				p.addClass("bgc3");
			}
			if(myGold < myChip) {
				tips("金豆不足，请充值")
				return
			}

			myGold -= myChip;
			numA += myChip;
			myGolds();
			kaiguan = false;
			$(this).find("a").text(numA);
			$(this).find("a").show();

			$('footer .player ul li.active').append(p);
			$('footer .player ul li.active p').stop().animate({
				left: -dx,
				top: -dy
			}, function() {
				$('footer .player ul li.active p').remove();
				$(_this).append(p);

				$(_this).find(p).css("left", lx);
				$(_this).find(p).css("top", ly);
				kaiguan = true;
			});
		})
	})

	//撤销投注
	$(".canel_bgc span").click(function() {
		if(jieliu == false) {
			tips("投注期间才能取消投注");
		} else if($('.item p').length > 0) {
			var arr = [];
			for(var i = 0; i < $(".item").length; i++) {
				arr.push(parseInt($(".item").eq(i).find('a').text()));
			}
			console.log(sum(arr))
			$(".item p").remove();
			$(".item a").text(0);
			$(".item a").hide();
			myGold += sum(arr);
			myGolds()
		} else {
			tips("您还未投注");
		}

	})

	//充值
	$(".my_gold a").click(function() {
		$("#recharge").show();
		$('#recharge ul li').each(function(i, ele) {
			var ele = $(ele);
			ele.click(function() {
				$(this).addClass("czjebgc").siblings().removeClass("czjebgc");
			});
		});
		$("#recharge .ljcz").click(function() {

		})
	});
	$("#recharge .close").click(function() {
		$("#recharge").hide();
	})

})