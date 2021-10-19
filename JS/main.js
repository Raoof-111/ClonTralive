$(document).ready(function(){
    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
              speed:500,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  });
          
  $(document).ready(function(){
    $('.your-class2').slick({
      

    });
  });




 var cnt =document.getElementsByClassName("tab-content");
 var i;

 for(i=0;i<cnt.length;i++){
   cnt[i].addEventListener('click',function(){

     var panel = this.nextElementSibling;
     if(panel.style.display=='block'){
       panel.style.display='none';
     }
     else{
       panel.style.display='block'
     }
     
   });
 };


 $(document).ready(function(){
  $('.gallery').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 3,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed:500,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
});

$(document).ready(function(){
  $(".bar-menu").click(function(){
    $(".cont").slideToggle()
  })
})