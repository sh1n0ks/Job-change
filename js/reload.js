
// ふわっと表示
$('head').append(
'<style>body{display:none;}'
);
$(window).on("load", function() {
$('body').delay(600).fadeIn("300");
});
// レスポンシブメニューの✖︎
let icon = document.querySelector('.bar-wrapper')

icon.addEventListener('click',()=>{
  icon.classList.toggle('show-animate');
})
