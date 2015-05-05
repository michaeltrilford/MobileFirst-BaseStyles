/* Column setup */
$(".grid").append('<div class="wrapper"><div class="columnWrap"></div></div>');
var str = '';
for(var cnt=0; cnt < 6; cnt++){
    str += '<div class="column"></div>';
}
$(".columnWrap").append(str);