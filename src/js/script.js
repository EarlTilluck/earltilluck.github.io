// toggle the menu on small screen.
function toggleMenu() {
  $('.nav-items').toggleClass('move-left');
  $('#overlay').toggleClass('dblock');
}

// attach the click handlers to both nav buttons and the overlay
$(document).ready(function () {
  $('.nav-toggle').click(toggleMenu);
  $('.nav-close-button').click(toggleMenu);
  $('#overlay').click(toggleMenu); // if you click anywhere on the screen overlay, the menu closes.
});

// on window resize (desktops), slide the menu away if it is visible
$(window).resize(function () {
  $('.nav-items').removeClass('move-left');
  $('#overlay').removeClass('dblock');
});