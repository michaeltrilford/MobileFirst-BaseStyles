/* A. TRANSFORMICONS SIMPLIFIED
------------------------------------------------------------------- */
u("a.tIcons").on('click', function(e) {
  e.preventDefault();
  u(this).toggleClass('toggle');
});

/* B. Baseline Grid
------------------------------------------------------------------- */
u('.mui-baselineGridSetup').append('<div class="mui-baselineGrid"></div>');
var baselineGrid = u(".mui-baselineGrid");
var gridCount = u("html").attr('data-grid-count');
for (var i=0; i<gridCount; i++) {
   baselineGrid.append("<div>");
}

/* C. MobileFirst Nav
------------------------------------------------------------------- */
u('#mui-mfn-menu-toggle').on('click', function(e) {
  e.preventDefault();
  u('body').toggleClass('mui-mfn-fixed-background');
  u('.mui-mfn-nav').toggleClass('mui-mfn-menu-open');
  u('.mui-mfn-nav li a').toggleClass('mui-mfn-menu-fadeIn');
});


/* D. Tabs for code snippets
------------------------------------------------------------------- */
u(".highlight-wrapper pre:first-child").addClass('mui-show');
u(".highlight-wrapper pre").addClass('mui-hide');

// First
u(".menu button:nth-of-type(1)").on('click', function(e) {
  e.preventDefault();
  u(this).parent().children().removeClass("active");
  u(this).addClass("active");
  u(this).parent().siblings(".codeSnippet").children("pre").removeClass('mui-show').addClass('mui-hide');
  u(this).parent().siblings(".codeSnippet").children("pre:nth-of-type(1)").removeClass('mui-hide').addClass('mui-show');
});
// Second
u(".menu button:nth-of-type(2)").on('click', function(e) {
  e.preventDefault();
  u(this).parent().children().removeClass("active");
  u(this).addClass("active");
  u(this).parent().siblings(".codeSnippet").children("pre").removeClass('mui-show').addClass('mui-hide');
  u(this).parent().siblings(".codeSnippet").children("pre:nth-of-type(2)").removeClass('mui-hide').addClass('mui-show');
});
// Third
u(".menu button:nth-of-type(3)").on('click', function(e) {
  e.preventDefault();
  u(this).parent().children().removeClass("active");
  u(this).addClass("active");
  u(this).parent().siblings(".codeSnippet").children("pre").removeClass('mui-show').addClass('mui-hide');
  u(this).parent().siblings(".codeSnippet").children("pre:nth-of-type(3)").removeClass('mui-hide').addClass('mui-show');
});


/* E. Priority Nav
------------------------------------------------------------------- */
// Append 'More...' button
u(".mui-pn-inner").append("<a id='mui-pn-reveal' class='mui-pn-switch' href='#'><span>More&nbsp;&#8230;</span><span style='display: none;'>&#8230;&nbsp;Less</span></a>");
// Toggle Text from 'More..' to '...Less'
u(document).on('click', '.mui-pn-switch', function (e) {
  e.preventDefault();
  u(this).children().toggle();
});
// Mobile: Show menu items
u("#mui-pn-mobile-menu").on('click', function(e) {
  e.preventDefault();
  u(this).toggleClass("mui-pn-active");
});
// Access Data-Nav-Count Value
var navCount = u(".mui-pn").attr('data-nav-count');
// Access children in navigation / Pass in navCount from HTML & CSS
var myElements = u('.mui-pn-inner').children();
u(myElements.nodes.slice(0, navCount)).addClass('inline-block');
// Reveal Hidden Navigation Items
u('#mui-pn-reveal').on('click', function(e) {
  e.preventDefault();
  u(".mui-pn-inner").toggleClass("mui-pn-reveal");
});



/* F. */
u('.mui-mainHead').on('scroll', function(e) {
  u('body').addClass('overflow-hidden');
});

u('.mui-mfn-offset-wrapper').on('mouseover', function(e) {
  u('body').removeClass('overflow-hidden');
});








