/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
/* =========================================
                Team
============================================ */
$(function () {
    $("#team-members").owlCarousel(
    {
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
}
    );
})
    
/* =========================================
                Progress Bars
============================================ */
$(function () {
        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
});

/* =========================================
              Navigation
============================================ */
/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            // Show dark logo
            $(".navbar-brand img").attr("src", "777/hrd-logo_1024x.png");
                 // Show back to top button
            $("#back-to-top").fadeIn();


        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Show logo
            $(".navbar-brand img").attr("src", "777/hrd-logo_1024x.png");
                // Hide back to top button
            $("#back-to-top").fadeOut();

        }
    }
});

/* ========================================= 
              Google Map 
============================================ */ 
$(window).on('load', function () { 
 
    // Map Variables 
    var addressString = '621 Golden Ave, Long Beach, CA 90802, États-Unis'; 
    var myLatlng = { 
        lat: 33.774731, 
        lng: -118.202164 
    }; 
    // 1. Render Map 
    var map = new google.maps.Map(document.getElementById('map'), { 
        zoom: 11, 
        center: myLatlng 
    }); 
    // 2. Add Marker 
    var marker = new google.maps.Marker({ 
        position: myLatlng, 
        map: map, 
        title: "Click To See Address" 
    }); 
 
    // 3. Add Info Window 
    var infowindow = new google.maps.InfoWindow({ 
        content: addressString 
    }); 
 
    // Show info window when user clicks marker 
    marker.addListener('click', function () { 
        infowindow.open(map, marker); 
    }); 
    }); 
