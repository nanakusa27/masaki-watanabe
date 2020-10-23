// ページ遷移アニメーション
document.getElementsByTagName('body')[0]
  .style.display = 'none';

$(() => {
 $('body').fadeIn(300);
});

$(() => {
  $('a').on('click', () => {
    $('a').preventDefault();
    const url = $(this).attr('href');
    $('body').fadeOut(300);
    setTimeout(() => {
    location.href = url;
    }, 300);
  })
})

// 画面サイズ(スマホ、PC)により条件分岐
const maxWidth = 375;
if ($(window).width() <= maxWidth) {
  // 375px以下の時の処理

  // send->TRANSMISSION COMPLETED
$('.input-send').on('click', (e) => {
  e.preventDefault();
  $('.input-send')
    .delay(600).queue(() => {
      $('.input-send').val('TRANSMISSION COMPLETED');
    })
    .css('width', '320px');
  });

  // ハンバーガーメニュー
  $('.menu-btn').on('click', () => {
    $('.menu-btn').toggleClass('open');
    $('.nav-menu').slideToggle();
  });

} else {
  // 375pxよりwidthが大きいときの動作

  // send->TRANSMISSION COMPLETED
  $('.input-send').on('click', (e) => {
    e.preventDefault();
    $('.input-send')
      .delay(600).queue(() => {
        $('.input-send').val('TRANSMISSION COMPLETED');
      })
      .css('width', '380px');
  });

  // News部分のhoverアニメーション
  $(() => {
    // newsの画像説明にidを追加
    document.getElementsByClassName('couch')[0]
      .getElementsByTagName('p')[0]
      .setAttribute('id', 'couch');
    document.getElementsByClassName('chair')[0]
      .getElementsByTagName('p')[0]
      .setAttribute('id', 'chair');
    document.getElementsByClassName('table')[0]
      .getElementsByTagName('p')[0]
      .setAttribute('id', 'table');

    // newsの画像説明を隠す
    $('#couch, #chair, #table').hide();
  })
}

// hoverしたときのslide処理
$(() => {
  $('.couch').hover(() => {
    $('#couch').slideDown("fast");
  }, () => {
    $('#couch').slideUp("fast");
  })
})

$(() => {
  $('.chair').hover(() => {
    $('#chair').slideDown("fast");
  }, () => {
    $('#chair').slideUp("fast");
  })
})

$(() => {
  $('.table').hover(() => {
    $('#table').slideDown("fast");
  }, () => {
    $('#table').slideUp("fast");
  })
})
