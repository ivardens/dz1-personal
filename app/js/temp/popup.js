var myModule = (function() {

  // Opens methods
  // Инициализирует наш модуль
  var init = function() {
    _setUpListners();
  };

  // Hiden methods
  // Прослушивает события
  var _setUpListners = function() {
    $('#open_popup_button').on('click', _showPopup); // Open Popup window
    $('#add_project').on('submit', _addProject); // Add Project
    $('#login-form').on('submit', _addProject);
    $('#fileupload').on('change', _changefileUpload); //добовление файла
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
      onClose: function(event){
        form.find('.server-mes').text('').hide();
        form.trigger('reset');
      }
    });
  };

  //Измененили файл аплоад
var _changefileUpload = function() {
  var input = $(this), //инпут type="file"
      filename = input.val(); //имя загруженного элемент
      filename = getNameFromPath(filename); //Передаем функции значение input

      // Получаем название файла из пути
        function getNameFromPath () {
            return filename.replace(/\\/g, '/').replace(/.*\//, ''); //Получаем название файла из пути
        }

    // console.log(filename);
  $('#filename')
    .val(filename)
    .trigger('hideTooltip')
    .removeClass('has-error');

};

// Добавляет проект
  var _addProject = function(event) {
    event.preventDefault();

    // the variables
    var form = $(this),
        url = './add_project.php',
        myServerAnsver = _ajaxForm(form, url);

        if(myServerAnsver){
      myServerAnsver.done(function(ansver) {
        var successBlock = form.find('.success-mes'),
            errorBlock = form.find('.error-mes');
        if(ansver.status === 'OK'){
          errorBlock.text('').hide();
          successBlock.text(ansver.text).show();
        }else{
          successBlock.text('').hide();
          errorBlock.text(ansver.text).show();
        }
      });}
  };
// Универсальная фуркция
// Для её работы нужны:
  // form - форма
  // url - адрес php файла, который производит обработку формы
// 1. Собирает данные из формы
// 2. Проверяет поля формы
// 3. Делает запрос на сервер и возвращает ответ с сервера
  var _ajaxForm = function(form, url){
      // if(!valid) return false;
      if (!validation.validateForm(form)) return false;

      data = form.serialize();

      var result = $.ajax({
          url: url,
          type: 'POST',
          dataType: 'json',
          data: data,
        }).fail(function(ansver){
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


// Input file name in theform file
$(document).ready(function(){

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
});

$(document).ready(function(){
jQuery('input, textarea').placeholder();
jQuery('input[placeholder], textarea[placeholder]').placeholder();
});
