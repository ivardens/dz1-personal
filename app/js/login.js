function placeholder(form) {
  form.wrapInner('');
  var form = $(form);
  form.find('input[placeholder]').each(function(index, current) {
    var $current = $(current),
        $placeholder = $('');
        $placeholder.insertAfter($current);
        $current.removeAttr('placeholder');

    $placeholder.click(function() {
      $current.focus()
    });
    $current.keypress(function() {
      if ($(this).val().length > 0) {
        $placeholder.hide();
        var $current2 = $current.removeAttr('value');
        //var $current3 = form.find('#label_pass').('input["value"]').removeAttr('value');

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


// Input file name in the form file

$(document).ready(function() {

  // jQuary placeholder view for all browsers
  $('input, textarea').placeholder();
  placeholder($("#login-form"));
});
