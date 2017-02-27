$(document).ready(function () {
  checkSize();
  $('li:first').click(function () {
    if ($(this).hasClass('slidden'))
    {
      $('li:nth-child(2)').slideDown(100);
      $('li:nth-child(3)').delay(100).slideDown(100);
      $('li:nth-child(4)').delay(200).slideDown(100);
      $(this).toggleClass('slidden');
      $('.bars').addClass('change');
      $('#bar1').toggleClass('change1');
      $('#bar2').toggleClass('change2');
      $('#bar3').toggleClass('change3');
    }
    else
    {
      $('li:nth-child(2)').slideUp(100);
      $('li:nth-child(3)').delay(100).slideUp(100);
      $('li:nth-child(4)').delay(200).slideUp(100);
      $(this).toggleClass('slidden');
      $('#bar1').toggleClass('change1');
      $('#bar2').toggleClass('change2');
      $('#bar3').toggleClass('change3');
    }
  });
  $(window).resize(checkSize);
});
function checkSize(){
    if ($('li:first').css('display') == 'none') {
        $('li:first').siblings().css('display', 'block');
        $('ul').css('display', 'flex');
    }
    else {
      $('li:first').siblings().css('display', 'none');
      $('ul').css('display', 'block');
    }
}
