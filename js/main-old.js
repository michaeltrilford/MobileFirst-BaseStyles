// Remember to delete comments / minify this document. Remove what you don't want.
$(".preSecond").hide();

$(".menu button.first").click(function(){
  $(".preSecond").hide();
  $(".preFirst").show();
  $("button.second").removeClass("active");
  $("button.first").addClass("active");
});
$(".menu button.second").click(function(){
  $(".preFirst").hide();
  $(".preSecond").show();
  $("button.first").removeClass("active");
  $("button.second").addClass("active");
});

/* B. TRANSFORMICONS SIMPLIFIED
------------------------------------------------------------------- */
$("a.tIcons").click(function(){
  $(this).toggleClass('toggle');
  return false;
});


/* C. SCROLL NAV
------------------------------------------------------------------- */
$(window).scroll(function() {
  if( $(this).scrollTop() > 81 ) {
    $(".navScroll").addClass("scrollEnabled");
  }
  else {
    $(".navScroll").removeClass("scrollEnabled");
  }
});


/* D. No SVG support
------------------------------------------------------------------- */
$(".no-svg svg").remove();
// Example Code to add alternative image
$(".no-svg .logo-wrap a").append("<img src='http://placehold.it/150x50'>");


/*---------------------------------------------------
  E. INJECT UI FOR ALT VIEWPORTS - http://codepen.io/trilm/pen/xGLVGM
---------------------------------------------------*/
function injectQuery () {
  
  
  /*---------------------------------------------------
  #1 - ITEMS FOR INJECTING
  ---------------------------------------------------*/

  
      // A: ADD SKELETON MARKUP
  
            // Empty Base Elements
            function baseInject () {
              // $("main").append("<div class='inject'></div>");
            }    
            // Add Empty Base Elements
            baseInject();
  
  
      // B: INSERT BASIC ELEMENTS ( SMALL FEATURES )       

      // Basic elements need the class="refresh"

            // Basic Smartphone
            function basicSmartphone () {
     
            }
            // Basic Tablet
            function basicTablet () {
              
            }
            // Basic Desktop
            function basicDesktop () {
              $('#element').append("<h1 class='refresh'>Hello</h1>");

            }
     
      // C: INSERT ADVANCED ELEMENTS ( LARGER FEATURES - AJAX )
          
            // AJAX ITEMS
            function advancedDesktop () {
              $('#ajax').load('path.html');
            } 
  
  /*---------------------------------------------------
  #2 - FIND BREAKPOINTS
  // Code from: https://www.lullabot.com/blog/article/importing-css-breakpoints-javascript
  ---------------------------------------------------*/
  var breakpoint = {};
  breakpoint.refreshValue = function () {
    this.value = window.getComputedStyle(
      document.querySelector('body'), ':before'
    ).getPropertyValue('content').replace(/['"]+/g, '')
  };
  
  /*---------------------------------------------------
  #3 - ON RESIZE: ADD BASIC ELEMENTS
  ---------------------------------------------------*/
  $(window).resize(function(){
    
    var elementRefresh = function () { $(".refresh").remove(); }
    // Discover Breakpoint
    breakpoint.refreshValue();
    
    // Needed for appended items
    elementRefresh();
    
    // Example of how to use - Run Certain functions by adding in a class to run the function.
    /*    if ((breakpoint.value == 'smartphone') || (breakpoint.value == 'tablet')) {
          basicSmartphone();
          $("header").addClass('scrollHeader');
        } else {
          $(".scrollHeader").removeClass('scrollHeader');
        }*/

    // Smartphone
    if (breakpoint.value == 'smartphone') {
      basicSmartphone();
    } else {}
    
    // Tablet
    if (breakpoint.value == 'tablet') {
      basicTablet();
    } else {}

    // Desktop
    if (breakpoint.value == 'desktop') {
      basicDesktop();
    } else {} 
    
  }).resize();


  /*---------------------------------------------------
  #4 - ON LOAD: ADD AJAX ITEMS
  ---------------------------------------------------*/  
  function injectLoad () {
    
    // Desktop
    if (breakpoint.value == 'desktop') {
      advancedDesktop();
    } else {}
    
  }
  // INITIALISE: ON LOAD
  injectLoad(); 
  
}

// 7. RUN FUNCTION
injectQuery();




// E. Baseline Grid
$('.baselineGridSetup').append('<div class="baselineGrid"></div>');
var baselineGrid = $(".baselineGrid");
var count = 24;
for (var i=0; i<count; i++) {
   baselineGrid.append("<div>");
}


// F. MobileFirst Nav
// Reveal Menu
$('.mui-mfn-menu-toggle').click(function(){
  $(this).toggleClass('toggle-on');
  $('body').toggleClass('mui-mfn-fixed-background');
  $('.mui-mfn-nav').toggleClass('mui-mfn-menu-open');
  $('.mui-mfn-nav li a').toggleClass('mui-mfn-menu-fadeIn');
  return false
});




