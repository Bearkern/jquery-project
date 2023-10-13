$(() => {
  // offcanvas
  $('.navbar').on('click', () => {
    $('.aside').toggleClass('open')
  });

  // .aside 裡的 h2 綁定事件
  $('.aside').on('click', 'h2', function () {
    alert('有效');
  })

  $('.aside .box1').html('<h2>這是 jQuery 產生的標題</h2>');

  // nav menu
  $('.dropdown').on('click', (e) => {
    e.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.nav-menu ul').slideToggle();
  });

  // resize text
  $('.text-size li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $(this).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
  })

  $('.text-lg').on('click', (e) => {
    e.preventDefault();
    $('.content p').css('font-size', '20px');
  });

  $('.text-md').on('click', (e) => {
    e.preventDefault();
    $('.content p').css('font-size', '16px');
  });

  $('.text-sm').on('click', (e) => {
    e.preventDefault();
    $('.content p').css('font-size', '12px');
  });

  // remove table cell
  $('.remove').on('click', function () {
    $(this).parent().parent().remove();
  });

  // faq
  $('.faq-item h2').on('click', function () {
    $(this).toggleClass('active').parent().find('p').slideToggle();
    $(this).parent().siblings().find('h2').removeClass('active').parent().find('p').slideUp();
  });

  $('[name$="ai"]').addClass('fa-solid fa-brain')
  $('[name$="chain"]').addClass('fa-solid fa-dice-d20')
  $('[name$="cloud"]').addClass('fa-solid fa-cloud')

  // toggle image
  $('.toggle-image').on('click', (e) => {
    e.preventDefault();
    $('.image').addClass('animate__animated animate__flipInX');
  });

  $('.image').on('animationend', function () {
    $(this).removeClass('animate__animated animate__flipInX');
  });

  // delay
  $('.expand-tag').on('click', (e) => {
    console.log('e:', e);
    if ($('.colors').css('display') === 'none') {
      $('.color1').stop().delay(0).slideDown();
      $('.color2').stop().delay(500).slideDown();
      $('.color3').stop().delay(1000).slideDown();
    } else {
      $('.color1').stop().delay(1000).slideUp();
      $('.color2').stop().delay(500).slideUp();
      $('.color3').stop().delay(0).slideUp();
    }
  })


  // ad close
  $('.ad-close').on('click', (e) => {
    e.preventDefault();
    $('.ad').fadeOut();
  });

  // Go top
  $('.top').on('click', () => {
    $('html').animate({
      scrollTop: 0
    }, 500)
  });
});