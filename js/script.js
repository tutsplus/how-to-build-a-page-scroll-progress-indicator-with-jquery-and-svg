(function(){
    var $w = $(window);
	var $circ = $('.animated-circle');
	var $progCount = $('.progress-count');
	var $prog2 = $('.progress-indicator-2');

	var wh, h, sHeight;

	function setSizes(){
		wh = $w.height();
		h = $('body').height();
		sHeight = h - wh;
	}

	setSizes();

	$w.on('scroll', function(){
		var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
		updateProgress(perc);
	}).on('resize', function(){
		setSizes();
		$w.trigger('scroll');
	});

	function updateProgress(perc){
		var circle_offset = 126 * perc;
		$circ.css({
			"stroke-dashoffset" : 126 - circle_offset
		});
		$progCount.html(Math.round(perc * 100) + "%");

		$prog2.css({width : perc*100 + '%'});
	}

}());