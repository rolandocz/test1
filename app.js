(function(){
  "use strinct";
  angular.module('myFirstApp', [])
  .controller('myFirstController', function($scope){
    $scope.name='rcz'; //use $scope for those things that you want to share with the view
    $scope.sayHello = function(){
      return "Hello!";
    };
    $scope.totalValue = function(name){
      var tot=0;
      for (var i=0; i<name.length; i++) tot+=name.charCodeAt(i);
      return tot;
    };
    $scope.keyCode=0;
    $scope.keycodevalue =function (event){
      console.log(event);
      $scope.keyCode=event.keyCode;
    };
  });
})();//IIFE = immediately invoked function expression
