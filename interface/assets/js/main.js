//Get the button:
var mybutton = document.getElementById("backtop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
    // if ($(window).width() > 769) {
    //     scrollmenu()
    // }

};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrollmenu() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        linemenu.style.paddingTop = "15px";
        linemenu.style.paddingBottom = "15px";

    } else {
        linemenu.style.paddingTop = "0";
        linemenu.style.paddingBottom = "0";
    }
}

// When the user clicks on the button, scroll to the top of the document
function backtotop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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
