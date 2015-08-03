/*global angular*/

function PlaceHolderDirective(modernizr) {
  return {
    restrict: 'A',
    link: function(scope, el) {
      if(!modernizr.input.placeholder){
        $(el[0]).placeholder();
      }
    }
  };
}

export default PlaceHolderDirective;