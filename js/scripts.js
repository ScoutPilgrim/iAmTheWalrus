$(document).ready(function() {
  let flag = true;
  $(".clickable").click(function() {
    $('#initially-showing').css({display: function(){
        if(flag){
          $("#initially-showing").toggle();
          $('#initially-hidden').slideDown();
          flag = false;
        }else{
          $("#initially-showing").fadeIn();
          $("#initially-hidden").toggle();
          flag = true;
        }
      }
    });
  });
});
