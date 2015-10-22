// // Объявление модуля
// var adminMe = (function () {
//
// 	// Инициализирует наш модуль
// 	var init = function () {
// 		_setUpListners();
// 	};
//
// 	// Прослушивает события
// 	var _setUpListners = function () {
// 		$('#login-form').on('submit', _submitForm);
// 	};
//
// 		var _submitForm = function (ev) {
// 			ev.preventDefault();
//
//
//       //объявляем переменные
// 			var form = $(this),
// 				url = 'login.php',
// 				defObj =  _ajaxForm(form, url);
// 				// что-то будем делатть с ответом с сервера defObj
// 		};
//
// 	  var _ajaxForm = function (form, url) {
// 	  	if (!validation.validateForm(form)) return false;
// 	  	// если false то код ниже не произойдет никогда
//
// 	  };
//
//
// 	// Возвращаем объект (публичные методы)
// 	return {
// 		init: init
// 	};
//
// })();
function placeholder(form) {
  form.wrapInner('<ul style="list-style: none; list-style-type:none; padding:0; margin: 0;">');
  form.find('input[placeholder]').each(function(index, current) {
    $(current).css('padding', 0).wrap('<li style="position: relative; list-style: none; list-style-type:none; padding:0; margin: 0;">');
    var height = $(current).parent('li').height();
    var $current = $(current),
      $placeholder = $('<div class="placeholder">' + $current.attr('placeholder') + '</div>');
    $placeholder.css({
      'color': '#AAA',
      'position': 'absolute',
      'top': 0,
      'left': 0,
      'line-height': height + 'px',
      'margin': '0 0 0 5px',
      'border': '0 none',
      'outline': '0 none',
      'padding': 0
    });
    $placeholder.insertAfter($current);
    $current.removeAttr('placeholder');
    $placeholder.click(function() {
      $current.focus()
    });
    $current.keypress(function() {
      if ($(this).val().length >= 0) {
        $placeholder.hide();
      }
    });
    $current.blur(function() {
      if ($(this).val().length == 0) {
        $placeholder.show();
      } else {
        $placeholder.hide();
      }
    });
  });
}
$(document).ready(function() {

  $('input, textarea').placeholder();
  placeholder($("#login-form"));
});
