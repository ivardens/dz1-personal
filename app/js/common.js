// Input file form
$(document).ready(function () {
  $('#open_popup_button').click(openPopup);

  $('.input__file').on('change', function () { // по событию change инпут файла

    var
      $this = $(this),
      val = $this.val(); // берем value у инпут файла (путь загруженого файла)

    //что бы отрезать /fakepath/ (это добавляет сам браузер)

    var
      regexp = /c:\\fakepath\\/gmi, //регулярное выражение для поиска
      pureVal = val.replace(regexp, ''); // заменяем то что нашли в строке - на пустоту

    $('.input__fake-text').text(pureVal); // вставляем в блок с текстом имя файла

  });


});
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

	$('.form_input-file').on('change', function(){

		var
			$this = $(this),
			value = $this.val(),
			pureVal = value.replace(/c:\\fakepath\\/gmi, "");

		$('.form_input-fake').text(pureVal);

	});

});
