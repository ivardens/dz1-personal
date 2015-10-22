var myModule = (function() {

  // Opens methods
  var init = function() {
    _setUpListners();
  };

  // Hiden methods
  var _setUpListners = function() {
    // events
    $('#add_project').on('submit', _submitForm);
  };

  var _submitForm = function(event){
    // console.log('The submitForm отправка формы function');
    event.preventDefault();

    var form = $(this),
        url = 'contactme.php',
        defObj = _ajaxForm(form, url);
        // дальше будем работать с ответом с сервера defObj
  };

  var _ajaxForm = function(form, url){
    // console.log('The ajaxForm запрос с проверкой!');
    if (!validation.validateForm(form)) return false;
    // если false то код ниже не сработает никогда

  };

  return {
    init: init,
  };

})();

myModule.init();
