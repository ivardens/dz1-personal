var validation = (function() {

  // Opens methods
  var init = function() {
    _setUpListners();
  };

  // Hiden methods
  var _setUpListners = function() {
    // events
    $('form').on('keydown', '.has-error', _removeError);
    // $('form').on('change', '.popup_add-input-text', _removeError);
    // $('form').on('reset', _clearForm);
  };
  var _removeError = function(){
    $(this).removeClass('has-error');
  };
  var _clearForm = function(form){
    var form = $(this);
    form.find('.input, textarea, .popup_add-input-text').trigger('hideTooltip');
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
    console.log('This is validateForm function');
    // var elements = form.find('input, textarea, div.add_fake'),
    var elements = form.find('input, textarea'),
      valid = true;

    // Пройдём по всем элементам формы
    $.each(elements, function(index, val) {
      // console.log(index);
      console.log(val);
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
