// Объявление модуля
var adminMe = (function () {

	// Инициализирует наш модуль
	var init = function () {
		_setUpListners();
	};

	// Прослушивает события
	var _setUpListners = function () {
		$('#login-form').on('submit', _submitForm);
	};

		var _submitForm = function (ev) {
			ev.preventDefault();


      //объявляем переменные
			var form = $(this),
				url = 'login.php',
				defObj =  _ajaxForm(form, url);
				// что-то будем делатть с ответом с сервера defObj
		};

	  var _ajaxForm = function (form, url) {
	  	if (!validation.validateForm(form)) return false;
	  	// если false то код ниже не произойдет никогда

	  };


	// Возвращаем объект (публичные методы)
	return {
		init: init
	};

})();
