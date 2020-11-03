(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
