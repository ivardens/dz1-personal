// Input file form
$(document).ready(function () {
  $('#open_popup_button').click(openPopup);});
// open end close popup window
function openPopup() {
  var container = $('<div class="popup_container"></div>'),
    overlay = $('<div class="popup_overlay"></div>')

  $('#popup_template').clone().appendTo(container);

  $(document.body).append(overlay);
  $(document.body).append(container);

  container.find('div.popup_add_title > a').one('click', closePopup);
}

function closePopup() {
  $(document.body).find('.popup_container').remove();
  $(document.body).find('.popup_overlay').remove();
}

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
// jQuery(document).('input, textarea').placeholder();
jQuery('input[placeholder], textarea[placeholder]').placeholder();
// jQuery(document).on('input[placeholder], textarea[placeholder]').placeholder();
// jQuery(document).('input[placeholder], textarea[placeholder]').placeholder();
});
