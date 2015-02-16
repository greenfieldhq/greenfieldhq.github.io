Greenfield = {
	init: function(home) {
		home = (home !== undefined ? home : true);
		if (home) {
			this.handleNav();
		}
		this.handleScroll();
		this.parallax();
		return this;
	},

	// Function to handle scroll events
	handleScroll: function() {
		var $this = Greenfield;
		$('*[data-scroll]').on('click',function(){
			var target = $(this).data('scroll');
			var off = $(window).width() < 401 ? 30 : 50;
			$this.scrollTo(target,off,1200);
			return false;
		});
	},

	// Function to control navigation
  handleNav: function() {
    $('#nav ul.nav').onePageNav({
      filter: ':not(.external)',
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 700,
      scrollOffset: 60,
      easing: 'swing',
      end: function() {
        if($(window).width() < 768) {
          $('.menu-trigger a').removeClass('open');
          $('nav > ul').slideUp();
        }
      }
    });
  },

	// Function to init maps
	initMaps: function(element) {
		element = element !== undefined ? element : "#google-map";
		$(element).gMap({
            controls: {
            	panControl: true,
            	zoomControl: true,
            	mapTypeControl: false,
                scaleControl: true,
                streetViewControl: false,
                overviewMapControl: true
            },
            address: "Boston, Massachusetts",
            zoom: 13,
            markers:[
                {
                    address: "51 Melcher St, Boston, MA 02210",
                    html: "Our office is here!<br>51 Melcher St.<br>1st Floor<br>Boston, MA 02210"
                }
            ]
        });

		return this;
	},

	// Function for parallax effect
	parallax: function() {
    $('#quote').parallax("50%", 0.2);
	},

	// Function to scroll with animation to desired element
	scrollTo: function(hash,offset,speed) {
		speed = (speed !== undefined ? speed : 2000);
		offset = (offset !== undefined ? offset : 0);
		var target_offset = $(hash).offset().top - offset;
		$('html, body').animate({
		    scrollTop: target_offset
		}, speed);
	},
}
