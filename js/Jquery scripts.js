javascript
$(function () {
    "use strict";

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = $('body').find('#mainNav');
        if (!navbarCollapsible.length) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.removeClass('navbar-shrink');
        } else {
            navbarCollapsible.addClass('navbar-shrink');
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    $(window).on('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = $('body').find('#mainNav');
    if (mainNav.length) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = $('body').find('.navbar-toggler');
    const responsiveNavItems = $('.nav-link', '#navbarResponsive');
    responsiveNavItems.on('click', function () {
        if ($(navbarToggler).css('display') !== 'none') {
            navbarToggler.click();
        }
    }) });