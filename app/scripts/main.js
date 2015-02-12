/* jshint devel:true */


var $doc = $(document),
	$win = $(window);

var progress = function(){
	var bar = $('#progress-bar > .progress-bar'),
		randomSeconds = function(){
			return Math.floor((Math.random() * 1000) + 1)
		},
		addWidth = function(bar){
			var currentWidth = bar.outerWidth();
			return currentWidth + randomSeconds() / 100 + '%';
		},
		progressStatus = 0;

		if (progressStatus <= $('#progress-bar').outerWidth()){

			var progressInterval = setInterval(function(){
				bar.css({
					width: addWidth(bar)
				});	
				progressStatus += bar.outerWidth();
				if (progressStatus !== 0 && progressStatus >= bar.parent().outerWidth()){
					clearInterval(progressInterval);
				}
				console.log(progressStatus);
			}, 1000);
		}
			
			
		
}

$doc.ready(function(){
	progress();
});