var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
//autoplay:{delay:5000}
var data = {
  img:['images/heart.png','images/case.png','images/leaf.png','images/cubik.png','images/zont.png'],
  h2:['First','Second','Third','Four','Five'],
  text:['Nunc accumsan hendrerit nunc, ac venenatis magna facilisis quis. Ut sit amet mi ac neque sodales facilisis. Nullam tempus fermentum lorem nec interdum. Ut id orci id sapien imperdiet vehicula. Etiam quis dignissim ante. Donec convallis tincidunt ligula, ac luctus mi interdum a.']
}
$('.button1').on('click',function() {
  $('.button1').addClass('active');
  $('.button2').removeClass('active');
  $('.button3').removeClass('active');
  $('.button4').removeClass('active');
  $('.button5').removeClass('active');
  $('#res_h2').text(data.h2[0]);
  $('#res_p').text(data.text[0]);
  $('#res_img').attr("src",data.img[0]);
});
$('.button2').on('click',function() {
  $('.button2').addClass('active');
  $('.button1').removeClass('active');
  $('.button3').removeClass('active');
  $('.button4').removeClass('active');
  $('.button5').removeClass('active');
  $('#res_h2').text(data.h2[1]);
  $('#res_p').text(data.text[1]);
  $('#res_img').attr("src",data.img[1]);
});
$('.button3').on('click',function() {
  $('.button3').addClass('active');
  $('.button2').removeClass('active');
  $('.button1').removeClass('active');
  $('.button4').removeClass('active');
  $('.button5').removeClass('active');
  $('#res_h2').text(data.h2[2]);
  $('#res_p').text(data.text[2]);
  $('#res_img').attr("src",data.img[2]);
});
$('.button4').on('click',function() {
  $('.button4').addClass('active');
  $('.button2').removeClass('active');
  $('.button1').removeClass('active');
  $('.button3').removeClass('active');
  $('.button5').removeClass('active');
  $('#res_h2').text(data.h2[3]);
  $('#res_p').text(data.text[3]);
  $('#res_img').attr("src",data.img[3]);
});
$('.button5').on('click',function() {
  $('.button5').addClass('active');
  $('.button2').removeClass('active');
  $('.button1').removeClass('active');
  $('.button4').removeClass('active');
  $('.button5').removeClass('active');
  $('#res_h2').text(data.h2[4]);
  $('#res_p').text(data.text[4]);
  $('#res_img').attr("src",data.img[4]);
});
