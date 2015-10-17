var myModule = (function () {

  // Opens methods
  // Инициализирует наш модуль
  var init = function () {
    _setUpListners();
  };

  // Hiden methods
  // Прослушивает события
  var _setUpListners = function () {
    $('#open_popup_button').on('click', _showPopup); // Open Popup window
    $('#add_project').on('submit', _addProject); // Add Project
    $('#fileupload').on('change', _changefileUpload); //добовление файла
    $('#login-form').on('submit', _addProject);
    $('#contact-me').on('submit', _submitForm);
  };

  // Работает с модальным окном (открывает и закрывает)
  var _showPopup = function(event) {
    event.preventDefault();
    var newPopup = $('#popup_window'),
      form = newPopup.find('.popup_add-form');
    newPopup.bPopup({
      // fadeSpeed: 'slow', //can be a string ('slow'/'fast') or int
      // followSpeed: 'fast', //can be a string ('slow'/'fast') or int
      speed: 300,
      opacity: 0.8,
      modalColor: '#005398',
      transition: 'slideDown',
      onClose: function(event) {
        form.find('.server-mes').text('').hide();
        form.trigger('reset');
      }
    });
  };


  //Измененили файл аплоад
  var _changefileUpload = function () {
    var input = $(this), //инпут type="file"
      filename = input.val(); //имя загруженного элемент
    filename = getNameFromPath(filename); //Передаем функции значение input

    // Получаем название файла из пути
    function getNameFromPath() {
      return filename.replace(/\\/g, '/').replace(/.*\//, ''); //Получаем название файла из пути
    }

    // console.log(filename);
    $('#filename')
      .val(filename)
      .trigger('hideTooltip')
      .removeClass('has-error');

  };


  // Contact me and login form
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
  // Contact me and login form END


  // Добавляет проект
  var _addProject = function(event) {
    event.preventDefault();

    // the variables
    var form = $(this),
      url = './add_project.php',
      myServerAnsver = _ajaxForm(form, url);

    if (myServerAnsver) {
      myServerAnsver.done(function(ansver) {
        var successBlock = form.find('.success-mes'),
          errorBlock = form.find('.error-mes');
        if (ansver.status === 'OK') {
          errorBlock.text('').hide();
          successBlock.text(ansver.text).show();
        } else {
          successBlock.text('').hide();
          errorBlock.text(ansver.text).show();
        }
      });
    }
  };
  // Универсальная фуркция
  // Для её работы нужны:
  // form - форма
  // url - адрес php файла, который производит обработку формы
  // 1. Собирает данные из формы
  // 2. Проверяет поля формы
  // 3. Делает запрос на сервер и возвращает ответ с сервера
  var _ajaxForm = function(form, url) {
    // if(!valid) return false;
    if (!validation.validateForm(form)) return false;

    data = form.serialize();

    var result = $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: data,
    }).fail(function(ansver) {
      // console.log('The Problems in PHP');
      form.find('.error.mes').text('Server returnd ERROR').show();
    });
    return result;
  };
  // возвращаем обьект (публичные методы)
  return {
    init: init
  };

})();

myModule.init();

// validation START
var validation = (function() {

  // Opens methods
  var init = function() {
    _setUpListners();
  };

  // Hiden methods
  var _setUpListners = function() {
    // events
    $('form').on('keydown', '.has-error', _removeError);
    $('form').on('reset', _clearForm);
  };
  var _removeError = function(){
    $(this).removeClass('has-error');
  };
  var _clearForm = function(form){
    var form = $(this);
    form.find('input, textarea').trigger('hideTooltip');
    form.find('.has-error').removeClass('has-error');
  };
  // Create Tooltip
  var _createQtip = function(element, position) {
    // Position of Tooltip
    if (position === 'right') {
      position = {
        my: 'left center',
        at: 'right center'
      }
    } else {
      position = {
        my: 'right center',
        at: 'left center',
        adjust: {
          method: 'shift none'
        }
      }
    }

    // Initialisation of Tooltip
    element.qtip({
      content: {
        text: function() {
          return $(this).attr('qtip-content');
        }
      },
      show: {
        event: 'show'
      },
      hide: {
        event: 'keydown hideTooltip'
      },
      position: position,
      style: {
        classes: 'qtip-mystyle qtip-rounded',
        tip: {
          height: 10,
          weight: 16
        }
      }
    }).trigger('show')
  };

  // Universal function for check form
  var validateForm = function(form) {
    //console.log("This is validateForm function");
    var elements = form.find('input, textarea'), valid = true;

    // Пройдём по всем элементам формы
    $.each(elements, function(index, val) {
      // console.log(index);
      // console.log(val);
      var element = $(val),
        val = element.val(),
        pos = element.attr('qtip-position');

      if (val.length === 0) {
        element.addClass('has-error');
        _createQtip(element, pos);
        valid = false;
      }
    });

    return valid;

  };

  // Retyrn the Object (publick method)
  return {
    init: init,
    validateForm: validateForm
  };

})();

validation.init();

// validation END


// Input file name in theform file

$(document).ready(function () {

  $(document).on('change', '.popup_add-input-file-upload', function () {

    // по событию change инпут файла
    var
      $this = $(this),
      val = $this.val(); // берем value у инпут файла (путь загруженого файла)

    //что бы отрезать /fakepath/ (это добавляет сам браузер)

    var
      regexp = /c:\\fakepath\\/gmi, //регулярное выражение для поиска
      pureVal = val.replace(regexp, ''); // заменяем то что нашли в строке - на пустоту

    $('.add_fake').text(pureVal); // вставляем в блок с текстом имя файла
  });

  // jQuary placeholder view for all browsers
  jQuery('input, textarea').placeholder();

});
