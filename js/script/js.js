$(document).ready(() => {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 5000,
        edgeFriction: 0.15,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1000
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        loop: true
      });
      window.setInterval(()=>{
        let boxsWidth = $('.boxs').width();
        console.log(boxsWidth);
        $('.boxs').css('height', boxsWidth * 0.946666666667);
      }, 1000);
})