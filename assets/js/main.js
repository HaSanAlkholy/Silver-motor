$(window).on('load', function () {
    // projects fancybox

    $('[data-fancybox="gallery"]').fancybox({});

    //toogle navbar
    $('#nava-icon').click(function (e) {
        $('#nava').toggleClass('nava-active');
    });

    $('#nava').click(function (e) {
        if (e.target.id == 'nava') {
            $(this).removeClass('nava-active');
        }
    });

    $('#search-form').click(function (e) {
        if (e.target.id == 'search-form') {
            console.log('here');
            $(this).removeClass('search-form-active');
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
