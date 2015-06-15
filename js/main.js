/* 1. OVERLAY GRID
------------------------------------------------------------------- */
$(".grid").append('<div class="wrapper"><div class="columnWrap"></div></div>');
var str = '';
for(var cnt=0; cnt < 6; cnt++){
    str += '<div class="column"></div>';
}
$(".columnWrap").append(str);

/* 2. TRANSFORMICONS SIMPLIFIED
------------------------------------------------------------------- */
$("a.tIcons").click(function(){
  $(this).toggleClass('toggle');
  return false;
});

/* 3. PROGRESSIVELY ENHANCEMENTS ADDED AT 500px - http://codepen.io/trilm/pen/dPLGEL
------------------------------------------------------------------- */
function mediaQuery () {
  
  // Not needed if using the Modernizr Option
  var mq = window.matchMedia("(min-width: 500px)");
  
  // 1. ADD BASIC ELEMENTS - SMALL ITEMS OF CODE
  // MUST ADD: "refresh" & "desktop" classes to added items
  ////////////////////////////////////////////////////////////////////
  function basicDesktopView () {
    var elementRefresh = function () { $(".refresh").remove(); }
    elementRefresh(); 
    $(".element").prepend("<h2 class='refresh desktop'>Progressively Enhanced Experience</h2>");
  }
  
  // 2. ADD ADVANCED ELEMENTS - LARGE ITEMS OF CODE
  ////////////////////////////////////////////////////////////////////
  function advancedDesktopView () {
    $(".element").append("<aside class='desktop'><h4><mark>Ajax Example:</mark></h4><p>I'm a feature that's loaded when the browser is above 500px.</p></aside>");
    // $('#ajaxElement').load('path.html');
    // $("#ajaxElement").load('path.html');
  }
  
  // 3. ON RESIZE FUNCTION
  ////////////////////////////////////////////////////////////////////
  /* A. Check Browser Width */
  /* B. Add Basic Desktop Elements */
  ////////////////////////////////////////////////////////////////////
  function injectElementResize () {
     if (mq.matches) {
      basicDesktopView();
    } else {} 
    // Modernizr Option - Conflicts with Codepen I believe
		/* if (Modernizr.mq('(min-width: 500px)')) {
      basicDesktopView(); 
    } else {} */  
  }
    
  // 4. ON LOAD FUNCTION
  ////////////////////////////////////////////////////////////////////
  /* A. Check Browser Width */
  /* B. Add Basic Desktop Elements */
  /* C. Add Advanced Desktop Features */
  ////////////////////////////////////////////////////////////////////
  function injectElementLoad () {
    if (mq.matches) {
      basicDesktopView();
      advancedDesktopView();
    } else {}
    // Modernizr Option - Conflicts with Codepen I believe
    /* if (Modernizr.mq('(min-width: 500px)')) {
      basicDesktopView();
      advancedDesktopView();
    } else {} */  
  }

  // 5. INITIALISE: ON LOAD
  ////////////////////////////////////////////////////////////////////
  injectElementLoad();
  
  // 6. INITIALISE: ON RESIZE
  ////////////////////////////////////////////////////////////////////
  window.onresize = function() { injectElementResize(); };
}

// 7. RUN FUNCTION
mediaQuery();