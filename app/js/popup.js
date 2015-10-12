var myModule = (function() {

  // Opens methods
  var init = function() {
    _setUpListners();
  };

  // Hiden methods
  var _setUpListners = function() {
    $('#open_popup_button').on('click', _showPopup); // Open Popup window
    $('#add_project').on('submit', _addProject); // Add Project
  };

  var _showPopup = function(event) {
    console.log('i am _showPopup function');
    event.preventDefault();
    $('#popup_template').bPopup({
      fadeSpeed: 'slow', //can be a string ('slow'/'fast') or int
      followSpeed: 600, //can be a string ('slow'/'fast') or int
      opacity: 0.8,
      modalColor: '#005398',
      transition: 'slideDown'
    });
  };

  var _addProject = function(event) {
    console.log('i am _addProject function');
    event.preventDefault();

    // the variables
    var form = $(this),
        url = 'add_project.php',
        data = form.serialize();
        console.log(data);
    // incuiry to the server
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: data,
      })
      .done(function(ansver) {
        console.log("success");
        console.log(ansver);
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });

  };

  return {
    init: init
  };

})();

myModule.init();
