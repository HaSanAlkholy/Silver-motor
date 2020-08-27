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
        } else {
            $('#nava .slide').addClass('dropdown').removeClass('slide');
        }

        if (window.innerWidth < 768) {
            //clients swiper initialize
            $('.mob-swiper-containe').addClass('swiper-container');
            $('.mob-swiper-wrap').removeClass('row');
            $('.mob-swiper-wrap').addClass('swiper-wrapper');
            $('.client').addClass('swiper-slide');

            window.mySwiper = new Swiper('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                updateOnWindowResize: true,
                slidesPerView: 3,
                spaceBetween: 10,
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    576: {
                        slidesPerView: 5,
                    },
                    150: {
                        slidesPerView: 2,
                    }
                },
            });

            //clients swiper initialize end

            //projects swiper initialize
            $('.mob-swiper-containe2').addClass('swiper-container2');
            let projects = $('.project');
            document.getElementById('projects-wrap').innerHTML = '';

            for (let i = 0; i < projects.length; i++) {
                projects[i].classList.add('swiper-slide');
                document.getElementById('projects-wrap').appendChild(projects[i]);
            }
            window.mySwiper2 = new Swiper('.swiper-container2', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                updateOnWindowResize: true,
                slidesPerView: 3,
                spaceBetween: 10,
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    576: {
                        slidesPerView: 3,
                    },
                    150: {
                        slidesPerView: 2,
                    }
                },
            });
            
            //projects swiper initialize end

        }
    }
    resized();


    $(".slide").on("click", function () {
        console.log('here');
        $(this).children(".dropdown-content").slideToggle();
    });















});
