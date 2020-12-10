;
(function ($) {
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

  

   

    // 5. fullPage
    if ($('#wavescroll').length > 0) {
        $("#wavescroll").fullpage({
            navigation: true,
            navigationPosition: "right",
            autoScrolling: true,
            scrollBar: false,
            scrollOverflow: true,
            animateAnchor: true,
            css3: false,
            verticalCentered: true,
            
            /**afterResponsive: function (isResponsive) {},
            afterLoad: function (anchorLink, index) {
                if (index == 6) {
                    $('.header_area, .full_footer').addClass('content-black');
                    $('#fp-nav').addClass('white');
                } else {
                    $('.header_area, .full_footer').removeClass('content-black');
                    $('#fp-nav').removeClass('white');
                }
                if ($('.w_footer_area,.wave_two_section_eight').hasClass('active')) {
                    $("#fp-nav,.full_footer").addClass('hide');
                } else {
                    $('#fp-nav,.full_footer').removeClass('hide');
                }
            } */
        });
       
    }



 


    
})(jQuery)