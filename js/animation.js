// pushボタンアニメーション
$('#pushBtn').on('click', function(){
  var position = 2000;
  var speed = 1000;
  $('html,body').animate({scrollTop:position},speed);
});

// ロード時アニメーション
$('head').append(
'<style>body{display:none;}'
);
$(window).on("load", function() {
$('body').delay(600).fadeIn("300");
});
