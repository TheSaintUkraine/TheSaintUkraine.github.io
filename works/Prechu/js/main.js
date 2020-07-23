var width = $(window).width();
if (width <= 640) {
  console.log('Mobile - true');
  $('nav').html('');
}
$('.btn-nav').on('click',function () {
  $('.mobile-nav').html('<div class="cont-menu"><a class="menu-nav" href="">Home</a><a class="menu-nav" href="">Products</a><a class="menu-nav" href="">Services</a><a class="menu-nav" href="">Contact</a></div>');
});
$('.menu-nav').on('click',function () {
  alert('click');
  $('.mobile-nav').html('');
});
