(function($) {
  "use strict"; // Start of use strict

  window.sr = ScrollReveal();
  sr.reveal('.navbar', {
    duration: 600,
    origin:'top',
  }), 300;
  sr.reveal('#intro img', {
    duration: 600,
    origin:'bottom'
  });
  sr.reveal('.showcase-bottom', {
    duration: 600,
    origin:'bottom',
    distance:'300px'
  });
  sr.reveal('.showcase-top', {
    duration: 600,
    delay: 200,
    origin:'top',
    distance:'300px'
  });
  sr.reveal('.showcase-left', {
    duration: 600,
    origin:'left',
    distance:'300px'
  });
  sr.reveal('.showcase-right', {
    duration: 600,
    origin:'right',
    distance:'300px'
  });
  sr.reveal('.showcase-btn', {
    duration: 600,
    delay: 600,
    origin:'bottom'
  });
  sr.reveal('.info-left', {
    duration: 600,
    origin:'left',
    distance:'300px',
    viewFactor: 0.2
  });
  sr.reveal('.info-right', {
    duration: 600,
    origin:'right',
    distance:'300px',
    viewFactor: 0.2
  });
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 600
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);
  // sr.reveal('footer', {
  //   duration: 600,
  //   origin:'bottom'
  // });


  $(window).resize(function() {
		siteFooter();
	});

  $(document).ready(function() {
	
	// INITIATE THE FOOTER
  siteFooter();
	// COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
  });
	
	function siteFooter() {
		var siteContent = $('#wrap');
		var siteFooter = $('#footer');
    var siteFooterHeight = siteFooter.height();
    if(siteContent.width() > 992){
      siteContent.css({
        "margin-bottom" : siteFooterHeight + 75
      });
    } else {
      siteContent.css({
        "margin-bottom" : 0
      });
    }
	}


})(jQuery); // End of use strict