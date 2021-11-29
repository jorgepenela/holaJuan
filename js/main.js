//TOPLINK
jQuery("a.toplink").click(function() {
    jQuery("html, body").animate({
      scrollTop: jQuery(jQuery(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
});