
//    jquery js raw code    //


$(document).ready(function(){
  
 $('#allBtn').click(function(){
    $('#appDesign').show(400);
    $('#webDesign').show(400);
    $('#uiDesign').show(400);
    $('#Photoshop').show(400);
    $('#motionGraphics').show(400);
    $('#seoExp').show(400);
 });

  $('#appBtn').click(function(){
    $('#appDesign').show(400);
    $('#webDesign').hide(400);
    $('#uiDesign').hide(400);
    $('#Photoshop').hide(400);
    $('#motionGraphics').hide(400);
    $('#seoExp').hide(400);
 });

    $('#webBtn').click(function(){
    $('#appDesign').hide(400);
    $('#webDesign').show(400);
    $('#uiDesign').hide(400);
    $('#Photoshop').hide(400);
    $('#motionGraphics').hide(400);
    $('#seoExp').hide(400);
 });

    $('#uiBtn').click(function(){
    $('#appDesign').hide(400);
    $('#webDesign').hide(400);
    $('#uiDesign').show(400);
    $('#Photoshop').hide(400);
    $('#motionGraphics').show(400);
    $('#seoExp').hide(400);
 });

    $('#psBtn').click(function(){
    $('#appDesign').hide(400);
    $('#webDesign').hide(400);
    $('#uiDesign').hide(400);
    $('#Photoshop').show(400);
    $('#motionGraphics').hide(400);
    $('#seoExp').show(400);
 });

});


//  owl carousel js codes  //

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText: ["PREV" , "NEXT"],
      dots:true,
      autoplay:true,
      autoplayTimeout:8000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });


//  wow js introduce file //

  new WOW().init();
    
////////////////////////////          
    
//  scrolltop jquery function

$(document).ready(function(){
  $(window).scroll(function(){
      if($(window).scrollTop() > 100){
          $(".fa-arrow-up").fadeIn();
      }
      else{
          $(".fa-arrow-up").fadeOut();
      }
  });

  $(".fa-arrow-up").click(function(){
      $('body').animate({scrollTop:0
      
      }, 1000);
  });
});