$(function() {
  
    // Menu Nav Toggle
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $('body').toggleClass('lock');
    });
    $(document).on('click', '.nav-link > a, .logo, .intro, .about, .video_link, footer', e => {
        $('#nav-toggle, #nav').removeClass('active');
        $('body').removeClass('lock');
    });

})