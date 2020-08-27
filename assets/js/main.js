$(window).on('load', function () {
    // projects fancybox

    $('[data-fancybox="gallery"]').fancybox({});

    //toogle navbar
    $('#nava-icon').click(function (e) {
        $('#nava').toggleClass('nava-active');
        $('html').toggleClass('overflow');
    });

    $('#nava').click(function (e) {
        if (e.target.id == 'nava') {
            $(this).removeClass('nava-active');
            $('html').removeClass('overflow');
        }
    });

    $('#search-btn').click(function (e) {
        $('#search-form').toggleClass('search-form-active');
        $('html').toggleClass('overflow');
    });

    $('#search-form').click(function (e) {
        if (e.target.id == 'search-form') {
            $(this).removeClass('search-form-active');
            $('html').removeClass('overflow');
        }
    });

    // resize dropdoen
    window.addEventListener("resize", resized);

    function resized() {

        if (window.innerWidth < 1200) {
            $('#nava .dropdown').addClass('slide').removeClass('dropdown');
        }else{
            $('#nava .slide').addClass('dropdown').removeClass('slide');
        }

    }
    resized();


    $(".slide").on("click", function () {
        console.log('here');
        $(this).children(".dropdown-content").slideToggle();
    });















});
