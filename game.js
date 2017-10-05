//Hide the info and social media
$('.info').hide();
$('.socialmedia').hide();
$('#hide').hide();
// If you click on the icon
$('#contact').click(function() {
     //It appends info and message form
    $('.info').show();
     // It renders my social media icon
     $('.socialmedia').show();
    // After hitting the button, hide the icon
    $('.footer').hide();
    // the close icon shows
    $('#hide').show();
});
// If someone hits the close icon, it hides the information
$('#hide').click(function() {
    //It hdies the info and message form
   $('.info').hide();
    // It hides my social media icon
    $('.socialmedia').hide();
   // After hitting the button, show the icon
   $('.footer').show();
//    Hide the close icon
   $('#hide').hide();
});
// Email/Message form
$('#textarea1').val('New Text');
$('#textarea1').trigger('autoresize');
