var myModule = (function() {

  // Opens methods
  var init = function() {
    _setUpListners();
  };

  var varden = function() {
    _vardenHide();
  };

  // Hiden methods
  var _setUpListners = function() {
    // events
    var a = 2+2;
    console.log(a);
  };
  var _vardenHide = function() {
    console.log("Hi my name is Varden!");
  }

  return {
    init: init,
    varden : varden,
  };

})();

myModule.init();
myModule.varden();
