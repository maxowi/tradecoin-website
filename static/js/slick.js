$('.slider-for').slick({slidesToShow:1,slidesToScroll:1,arrows:false,fade:true,asNavFor:'.slider-nav'});$('.slider-nav').slick({slidesToShow:5,slidesToScroll:3,asNavFor:'.slider-for',dots:true,autoplay:true,autoplaySpeed:1500,

responsive: [
{
  breakpoint:767,  
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true
  }
}],

focusOnSelect:true});$('a[data-slide]').click(function(e){e.preventDefault();var slideno=$(this).data('slide');$('.slider-nav').slick('slickGoTo',slideno-1);});