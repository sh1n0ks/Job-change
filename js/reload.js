$('head').append(
'<style>body{display:none;}'
);
$(window).on("load", function() {
$('body').delay(600).fadeIn("300");
});
