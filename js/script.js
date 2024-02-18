epsf = function() {
	return {
		run : function() {
		    this.lazyLoadImg();
        this.getYear();
		},
    lazyLoadImg : function() {
			//Check if lazy load is being used on the current page
			if($(".lazy")[0]) {
				$("img.lazy").lazyload({
		        effect : "fadeIn"
		    });
			}
    },
    getYear : function() {
      var date = new Date();
			var setYear = date.getFullYear();
			$('#year').empty();
			$('#year').append(setYear);
    }
  }
}();

$(document).ready(function() {
  epsf.run();
});
