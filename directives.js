angular.module('directives.nameCard', [])
  .directive('nameCard', nameCard);

function nameCard() {
    return {
      restrict: 'E',
      controller: function($scope){

      },
      templateUrl: "/templates/namecard.html",
      link: function(){

      }
    }
  };

console.log("Sane.");
