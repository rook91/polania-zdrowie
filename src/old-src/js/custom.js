$(document).ready(function() {
  var $certSlickWrapper, $slickWrapper, $portfolio;
  $portfolio = $('.portfolio-item');
  $slickWrapper = $('.sliderWrapper');
  $eventSlider = $('.eventsSlider');

  $certSlickWrapper = $('.CERTsliderWrapper');

  $portfolio.hover(function() {
    $(this).children('.portfolio-details').slideToggle();
  });
  $portfolio.hover(function() {
    $(this).children('.portfolio-details2').slideToggle();
  });
  if ($slickWrapper.length) {
    $slickWrapper.slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    });
  }

  if ($certSlickWrapper.length) {
    $certSlickWrapper.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      infinite: true,
      variableWidth: true
    });
  }

  if ($eventSlider.length) {
    $eventSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true
    });
  }

//best by js perf
var $adminPnl, $btnPnl, adminVis;
  $adminPnl = $(document.getElementById('adminPnl'));
  $adminBtn = $(document.getElementById('adminBtn'));
  $confirmBtn = $(document.getElementById('confirmBtn'));
  adminVis = 0;
  $adminBtn.click(function(){
    if(!adminVis){
      $adminPnl.css({
        display:'block'
      });
    } else {
      $adminPnl.css({
        display:'none'
      });
    }
    adminVis = !adminVis;
  });

  $confirmBtn.click(function(){
    var fontSelector = document.getElementById("fontSelector");
    $('body').css({
      'font-family': fontSelector.options[fontSelector.selectedIndex].value
    });
  });
});
