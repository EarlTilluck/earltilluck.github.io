// place marker for current page in the nav
function highlightNavLink (){
  const id = $('#page-id').text();
  if (id) {
    $('.nav-items a:contains("' + id + '")').addClass('nav-highlighted');
  }
}

// toggle the menu on small screen.
function toggleMenu() {
  $('.nav-items').toggleClass('move-left');
  $('#overlay').toggleClass('dblock');
}


// helper function for the animateCover function, 
// writes a word on the screen, or backspaces it.
// returns next letter index value
function wordUp(elem, text, index) {
  var elemText = elem.text();
  elemText = elemText + text.charAt(index);
  elem.text(elemText);
  index++;
  return index;
}

function wordDown(elem, text, index) {
  var elemText = elem.text();
  elemText = elemText.substring(0, index);
  elem.text(elemText);
  index--;
  return index;
}

// animate the cover text
function animateCover() {
  const elem = $('.cover .switch-me');

  // if the cover element is on the page...
  if (elem.text()) {

    // set up animation variables
    const words = ['Scalable', 'Usable', 'Beautiful'];
    var wordIndex = 2;
    var letterIndex = 8;
    var upwards = false;
    var timeoutValue = 0; // intervals worth of timeout between words. relates to the interval time value
    
    // set the writing words animation interval 
    setInterval(function(){
      
      // if we are not waiting between words...
      if (timeoutValue == 0) {

        // switch word as soon as the span text is empty;
        if (elem.text() === '') {
          wordIndex++;
          if (wordIndex >= 3) {
            wordIndex = 0;
          }
        }

        // if going upwards, call wordup, else call word down
        if (upwards) {
          letterIndex = wordUp(elem, words[wordIndex], letterIndex);
        } else {
          letterIndex = wordDown(elem, words[wordIndex], letterIndex);
        }

        // track index value of current word. switch between going up or down
        if (letterIndex < 0) {
          upwards = true;
        }
        if (letterIndex >= words[wordIndex].length) {
          upwards = false;
          // before we start moving downward, we pause for a few intervals
          timeoutValue = 20; // 20 intervals of waiting (1000ms)
        }
      } 
      else {
        timeoutValue = timeoutValue - 1;
      }
    }, 50);
  }  
}

// wiggle some text on the screen
function wiggle() {
  const elems = $('.wiggle');
  var left = 0;
  var top = 10;
  var up = false;
  $(elems).css({ 'top': top });

  setInterval(function(){
    
    //elems.each(function (i, elem) {
      //left = Math.floor(Math.random() * 41); // random between 0 and num-1 
      //top = Math.floor(Math.random() * 41);
      //console.log(up + ' -- ' + top);
      if (up) {
        up = false;
        top = 10;
      } else {
        up = true;
        top = 0;
      }
      $(elems).css({'top': top});
      
     //});

  }, 3100);
}


// ON READY... Do this...
$(document).ready(function () {
  
  // attach click event to navigation items
  $('.nav-toggle').click(toggleMenu); // toggle button.
  $('.nav-close-button').click(toggleMenu); // close button in slide-in menu.
  $('#overlay').click(toggleMenu); // if you click anywhere on the screen overlay, the menu closes.

  // hightlight the current page in the navigation.
  highlightNavLink();

  // animate the cover on home page. should not run if it is not the home page.
  animateCover();

  // wiggle some text on the screen
  wiggle();
});

// on window resize (desktops), slide the menu away if it is visible
$(window).resize(function () {
  $('.nav-items').removeClass('move-left');
  $('#overlay').removeClass('dblock');
});

