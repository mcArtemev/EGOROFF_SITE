(function($) {
	$(function() {
	    $('.scroll-pane').jScrollPane({
		  showArrows: true,
		  horizontalGutter: 30,
		  verticalGutter: 30
		});
		$('.scroll-pane').on( 'mousewheel DOMMouseScroll', function (e) { 
		  
		  var e0 = e.originalEvent;
		  var delta = e0.wheelDelta || -e0.detail;

		  this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
		  e.preventDefault();  
		});
		$('.desci .decision .item_right .decision_tab:first-child').addClass('activ');
		$('.desci .decision-content > .item_left ul li:first-child').addClass('active');
		$('.desci .item_left ').on('click', 'li:not(.active)', function() {
			$(this).addClass('active').siblings().removeClass('active');
			$('.desci .item_left li').children('a').children('img').attr("src","img/icon/open.png");
			$(this).children('a').children('img').attr("src","/img/close.png");
			$(this).closest('div.decision').find('div.decision_tab').removeClass('activ').eq($(this).index()).addClass('activ');
		});
		$('.desci .item_left ul').on('click', 'li.active', function() {
			$(this).removeClass('active');
			$('.desci .item_left li').children('a').children('img').attr("src","img/icon/open.png");
			$('div.decision_tab').removeClass('activ');
			
		});
		$('.news .news-tp').on('click', '.news-tp_item:not(.active)', function() {
			$('.news-tp .mobi').css('background', 'url(' + $(this).closest(".news").find(".news-bt").removeClass("activ").eq($(this).index()).children(".news-bt_right").children("img").attr("src") +')')
			$(this).addClass('active').siblings().removeClass('active');
			$(this).closest('.news').find('.news-bt').removeClass('activ').eq($(this).index()).addClass('activ');
		});
		$('.file_jobs ').on('click', 'img', function() {
			$('.file_jobs input').trigger('click')
		});
		$('.logo-w ').on('click', '.open-menu', function() {
			$('.dropdown-menu').toggleClass('show')
		});
			$('.container.mobi .item_left ul li').removeClass('active');
			$('.mobi .item_left ul ').on('click', 'li', function() {
				$('.mobi .item_left ul li').removeClass('active');
				$(this).addClass('active');
				$('.mobi .item_left ul img').attr("src","img/icon/open.png");
				$(this).children('a').children('img').attr("src","/img/close.png");
				
			});	
				$('.mobi .item_left ul').on('click', 'li.active', function() {
			$(this).removeClass('active');
			$('.mobi  .item_left li').children('a').children('img').attr("src","img/icon/open.png");
			$('div.decision_tab').removeClass('activ');
			
		});
	});
})(jQuery);