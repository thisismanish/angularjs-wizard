angular.module('App', ['$strap.directives'])
.controller('AppCtrl', function($scope) {
  $scope.steps = ['one', 'two', 'three'];
  $scope.step = 0;
  $scope.wizard = { tacos: 2 };

  $scope.isFirstStep = function() {
    return $scope.step === 0
  }
  
  $scope.isCurrentStep = function(step) {
    return $scope.step === step;
  }

  $scope.setCurrentStep = function(step) {
    $scope.step = step;
  }

  $scope.getCurrentStep = function() {
    return $scope.steps[$scope.step];
  }

  $scope.getNextLabel = function() {
    return ($scope.step === ($scope.steps.length - 1)) ? 'Submit' : 'Next'; 
  }

  $scope.handlePrevious = function() {
    $scope.step -= ($scope.step === 0) ? 0 : 1;
  }

  $scope.handleNext = function() {
    $scope.step += ($scope.step === ($scope.steps.length - 1)) ? 0 : 1; 
  }
});
