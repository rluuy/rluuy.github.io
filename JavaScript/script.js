$(function() {

    "use strict";

    $('#message-form').submit(function() {
        $(this).ajaxSubmit({
            error: function(xhr) {
                status('Error: ' + xhr.status);
            },
            success: function(response) {
                alert(response);
            }
        });

        return false;
    });

    // Sidebar toggle behavior

    $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
        $('#nav-icon-button').toggleClass('icofont-navigation-menu');
        $('#nav-icon-button').toggleClass('icofont-close');
        if ($(this).width() >= 1200) {
            $('#sidebar, #content').toggleClass('active', false);
            $('#sidebarCollapse').toggleClass('d-none', true);
            $('#sidebarCollapse').toggleClass('d-block', false);
        }
        else {
            $('#sidebarCollapse').toggleClass('d-block', true);
            $('#sidebarCollapse').toggleClass('d-none', false);

        }
    });

    $(window).resize(function() {
        if ($(this).width() >= 1200) {
            //Show sidebar
            $('#sidebar, #content').toggleClass('active', true);
            $('#sidebarCollapse').toggleClass('d-none', true);
            $('#sidebarCollapse').toggleClass('d-block', false);

            //Show close button
            $('#nav-icon-button').toggleClass('icofont-navigation-menu', false);
            $('#nav-icon-button').toggleClass('icofont-close', false);
        }
        else {
            //If sidebar is not already being shown
            if (!$('#sidebarCollapse').hasClass('active')){
                $('#sidebar, #content').toggleClass('active', false);
                $('#sidebarCollapse').toggleClass('d-block', true);
                $('#sidebarCollapse').toggleClass('d-none', false);

                //Show nav button
                $('#nav-icon-button').toggleClass('icofont-navigation-menu', true);
                $('#nav-icon-button').toggleClass('icofont-close', false);
            }
            else
            {
                //Show close button
                $('#nav-icon-button').toggleClass('icofont-navigation-menu', false);
                $('#nav-icon-button').toggleClass('icofont-close', true);
            }

        }

    });



    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out-back",
            once: true
        });
    }

    $(window).on('load', function() {
        aos_init();
        if ($('.typed').length) {
            var typed_strings = $(".typed").data('typed-items');
            typed_strings = typed_strings.split(',')
            new Typed('.typed', {
                strings: typed_strings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
            });
        }



        $('#content').toggleClass('active', true);

        if ($(this).width() >= 1200) {

            //Show sidebar
            $('#sidebar, #content').toggleClass('active', true);
            $('#sidebarCollapse').toggleClass('d-none', true);
            $('#sidebarCollapse').toggleClass('d-block', false);

            //Show close button
            $('#nav-icon-button').toggleClass('icofont-navigation-menu', false);
            $('#nav-icon-button').toggleClass('icofont-close', false);
        }
        else {
            //If sidebar is not already being shown
            if (!$('#sidebarCollapse').hasClass('active')){
                $('#sidebar, #content').toggleClass('active', false);
                $('#sidebarCollapse').toggleClass('d-block', true);
                $('#sidebarCollapse').toggleClass('d-none', false);

                //Show nav button
                $('#nav-icon-button').toggleClass('icofont-navigation-menu', true);
                $('#nav-icon-button').toggleClass('icofont-close', false);
            }
            else
            {
                //Show close button
                $('#nav-icon-button').toggleClass('icofont-navigation-menu', false);
                $('#nav-icon-button').toggleClass('icofont-close', true);
            }

        }
    });

});