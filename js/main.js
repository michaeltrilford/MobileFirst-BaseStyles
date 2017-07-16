/* A. TRANSFORMICONS SIMPLIFIED
------------------------------------------------------------------- */
$("a.tIcons").click(function(){
  $(this).toggleClass('toggle');
  return false;
});


/* B. SCROLL NAV
------------------------------------------------------------------- */
$(window).scroll(function() {
  if( $(this).scrollTop() > 81 ) {
    $(".navScroll").addClass("scrollEnabled");
  }
  else {
    $(".navScroll").removeClass("scrollEnabled");
  }
});

/* C. Baseline Grid
------------------------------------------------------------------- */
$('.baselineGridSetup').append('<div class="baselineGrid"></div>');
var baselineGrid = $(".baselineGrid");
var count = 24;
for (var i=0; i<count; i++) {
   baselineGrid.append("<div>");
}

/* D. MobileFirst Nav
------------------------------------------------------------------- */
$('#mui-mfn-menu-toggle').click(function(){
  $(this).toggleClass('toggle-on');
  $('body').toggleClass('mui-mfn-fixed-background');
  $('.mui-mfn-nav').toggleClass('mui-mfn-menu-open');
  $('.mui-mfn-nav li a').toggleClass('mui-mfn-menu-fadeIn');
  return false
});

/* E. Priority Nav
------------------------------------------------------------------- */
// Append 'More...' button
$(".mui-pn-inner").append("<a id='mui-pn-reveal' class='mui-pn-switch' href='#'><span>More&nbsp;&#8230;</span><span style='display: none;'>&#8230;&nbsp;Less</span></a>");
// Toggle Text from 'More..' to '...Less'
$(document).on('click', '.mui-pn-switch', function () {
  $(this).children().toggle();
  return false
});
// Mobile: Show menu items
$("#mui-pn-mobile-menu").click(function(){
  $(this).toggleClass("mui-pn-active");
  $(this).next().slideToggle();
});
// Access Data-Nav-Count Value
var navCount = $(".mui-pn").attr('data-nav-count');
// Access children in navigation / Pass in navCount from HTML & CSS
$(".mui-pn-inner").children().slice(0,navCount).css( "display", "inline-block" );
// Reveal Hidden Navigation Items
$(document).on('click', '#mui-pn-reveal', function () {
  $(".mui-pn-inner").toggleClass("mui-pn-reveal");
  return false
});


/* F. Tabs for code snippets
------------------------------------------------------------------- */
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





