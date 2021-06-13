/* 
    Javascript code for the top navigation bar
    all based on the example: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
*/



document.addEventListener('DOMContentLoaded', function() {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM

    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', scrollStickyHeaderFunction);

    // Get the header
    var navigation = document.getElementById("mainNav");

    // Get the offset position of the navbar
    var sticky = navigation.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. 
    // Remove "sticky" when you leave the scroll position
    function scrollStickyHeaderFunction() {
        if (window.pageYOffset > sticky) {
        navigation.classList.add("sticky");
        } else {
        navigation.classList.remove("sticky");
        }
    }
    document.getElementById("BTNmainNav").addEventListener("click", openMainNav);
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function openMainNav() {
        var x = document.getElementById("mainNav");
        if (x.className === "topnav") {
        x.className += " responsive";
        } else {
        x.className = "topnav";
        }
    }
});