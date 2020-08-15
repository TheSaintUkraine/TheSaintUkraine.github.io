var html = "";
var color = "";
var a;
var index = 0;
var slider_cont = [];
var used = [];
var rand = 0;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
if (document.body.clientWidth <= 480) {

  $('.slider').html('');
  $('.cont-title').html('');
}

function send(method,url) {
  var xhr = new XMLHttpRequest();
  xhr.open(method,url);
  xhr.onload = function () {
      a = JSON.parse(xhr.response);
      console.log(a)
      slideShow()
  }
  xhr.send();
}
send("GET",url_server);
function slideShow() {

    rand = getRandomInt(a.length);
    if (a[rand].tag == 'База') {color="#fecd33"}
    if (a[rand].tag == 'Совет') {color="#9786bd"}
    if (a[rand].tag == 'Новость') {color="#88a3d6"}
    $('.slider-content').html('<a href="page.html" onclick="saveBody('+rand+')"><div style="background-image: url('+a[rand].img+')" class="item-slider "><div style="background-color:'+color+';" class="tag"><p>'+a[rand].tag+'</p></div><div class="name"><p>'+a[rand].title+'</p></div></div></a>');
    showArticles()
}

function showArticles() {

  for (var i = 0; i != 6; i++) {
    if (a[i].tag == 'База') {color="#fecd33"}
    if (a[i].tag == 'Совет') {color="#9786bd"}
    if (a[i].tag == 'Новость') {color="#88a3d6"}
    html = html + '<a href="page.html" onclick="saveBody('+i+')"><div style="background-image: url('+a[i].img+')" class="item "><div style="background-color:'+color+';" class="tag-item"><p>'+a[i].tag+'</p></div><div class="name-item"><p>'+a[i].title+'</p></div></div></a>';
  }
  $('.item-cont').html(html);
}
