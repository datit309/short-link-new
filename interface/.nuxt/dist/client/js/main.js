// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backtop").style.display = "block";
    } else {
      document.getElementById("backtop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
// function backtotop() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// mute-video-toggle
var x = $("#myVideo, #myVideo-mb");
x.prop("autoplay", true);

function changeMuteStatus() {
    var isMuted = x.prop("muted");
    var icon = $('.btn-mute');
    if (isMuted) {
        x.prop("muted", false);
        icon.addClass('fa-volume-up');
        icon.removeClass('fa-volume-mute');
    } else {
        x.prop("muted", true);
        icon.addClass('fa-volume-mute');
        icon.removeClass('fa-volume-up');
    }
}

changeMuteStatus();
$('.intro .btn-vol').on('click', changeMuteStatus);


// youtube video autoplay
$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#intro").attr('src');

    /* Remove iframe src attribute on page load to
    prevent autoplay in background */
    $("#intro").attr('src', '');

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
    $("#intro-vid").on('shown.bs.modal', function(){
        $("#intro").attr('src', url);
    });

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#intro-vid").on('hide.bs.modal', function(){
        $("#intro").attr('src', '');
    });
});

//active-link
jQuery(function ($) {
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('.menu .nav-link').each(function () {
        if (this.href === path) {
            $(this).addClass('active');
        }
    });
});

// slider
$(document).ready(function () {
    $('.responsive').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                // centerMode: true,

            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,

            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });
    $('.game-slide').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                // centerMode: true,

            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,

            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });
});

//click to copy
function clickcopy(text) {
    /* Get the text field */
    var copyText = document.getElementById(text);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//     return new bootstrap.Tooltip(tooltipTriggerEl)
// })
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

// $('[data-go-to-target]').click((e) => {
//     console.log(e.);
//     setTimeout(() => {
//         window.location.href='#selling';
//     }, 500)
// })

// var myOffcanvas = document.getElementById('menu')
// myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
//     var childs = myOffcanvas.childNodes;
//     console.log('childs',childs);
//     console.log(12121)
//     menuRedirect()
// })
async function menuRedirect(href){
    var myOffcanvas = document.getElementById('menu')
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
    await bsOffcanvas.hide()
    $('#menu').removeClass('show')
    $('.offcanvas-backdrop').remove()
    // window.location.href=href;
}
