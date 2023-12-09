function loadcookies() {
  var cookie = document.cookie;
  var themeStatus = cookie.split('; ');
  for (let i in themeStatus) {
    if (themeStatus[i].split('=')[0] === 'theme') {
      var theme = themeStatus[i].split('=')[1];
    }
  }

  if (theme === 'dark') {
    $('body').removeClass('light');
  } else {
    $('body').addClass('light');
  }
}

$(document).scroll(function () {
  var y = $(document).scrollTop();
  var start = $('#first-container').height();

  if (y > start - 20) {
    $('#nametag').addClass('show');
  } else {
    $('#nametag').removeClass('show');
  }

  //document.getElementsByClassName('about-content')
  $('.about-content').each(function () {
    var positionElem = $(this).position();
    var topElem = positionElem.top + $(this).height();

    if (topElem > y && y > positionElem.top - $(this).height()) {
      $(this).addClass('appear');
    } else {
      $(this).removeClass('appear');
    }
  });
  var positionContacts = $('#thirdpart').position();
  var top5 = positionContacts.top + $('#thirdpart').height();

  /* Trigger du viewport sur l'element */

  if (top5 > y && y > positionContacts.top - $('#thirdpart').height() + 150) {
    $('#thirdpart').addClass('appear');
    //  $('#thirdpart').attr(scrollState, y - top5);
  } else {
    $('#thirdpart').removeClass('appear');
  }
});

$('#menu-toggle').click(function () {
  $('#menu .content').toggleClass('show');
  $('#menu-toggle').toggleClass('active');
  $('#themechanger').toggleClass('lighter');
});

function changeMenuItem(e) {
  $('.option.active').removeClass('active');
  $('#' + e).addClass('active');
}

function changetheme() {
  $('body').toggleClass('light');

  const d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();

  if ($('body').is('.light')) {
    document.cookie = 'theme' + '=' + 'light' + ';' + expires + ';path=/';
  } else {
    document.cookie = 'theme' + '=' + 'dark' + ';' + expires + ';path=/';
  }
}
