// pushボタンアニメーション
$('#pushBtn').on('click', function(){
  var position = 2000;
  var speed = 1000;
  $('html,body').animate({scrollTop:position},speed);
});

// ロード時アニメーション

$(".line").animate({"width":"100%"},1500,function(){
  $(".line").css("right",0)
  $(".line").animate({"width":"0%"},function(){
    $(".up").animate({"height":"0%"},1000);
    $(".down").animate({"height":"0%"},1000);
  });
})
