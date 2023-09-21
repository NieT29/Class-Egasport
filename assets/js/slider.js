$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true, // vong lap slider
    margin:10, // khonag cach giua cac phan tu
    nav:false, // thanh dieu huong 
    dots:false, // nut dieu huong
    autoplay:true, //tu dong chuyen slider
    autoplayTimeout:5000, //ms
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
})
  });