////////////////// The Contact /////////////////
// Hides my contact information/social media 
var close = $(
    '<i class="material-icons" id="hide">close</i>'
    );
// If you click on the icon
$('#contact').click(function() {
    // It renders my contact information/social media 
    $('.info').html(
        // Social Media Links
        '<a href="https://www.linkedin.com/in/rachelgriarte/"><img id=socialmedia src="images/li.jpg"></a> ' + 
        '<a href="https://www.github.com/rachgriarte/"><img id=socialmedia src="images/gh.jpg"></a> ' +
        '<a href="tel:+19196125115"><img id=socialmedia src="images/call.jpg"></a>' +
        '<a href="https://www.instagram.com/rachgriarte/"><img id=socialmedia src="images/ig.jpg"></a>' +
        '<img id=socialmedia src="images/sc.jpg">' +
        //Want to get in touch?
        '<p><b>Wanna get in touch or talk to me about a project? </b></p>' +
        '<p> Just fill the form below or send an email to rachgriarte@griarte.com and ~lets talk! </p>' +
        '<p> <a href="mailto:rachgriarte@griarte.com">rachgriarte@griarte.com</a> </p>'
    );
    // After hitting the button, hide the icon
    $('.footer').hide();
    // Hides my contact information/social media 
    $('.info').append(close);
});
// If someone hits the close icon, it hides the contact information

////////////////// Email Me ///////////////////////
