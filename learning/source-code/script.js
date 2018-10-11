var myApp = angular.module("myApp", []);

myApp.controller('myCtrl', function($scope, $http){
  $scope.name = 'my World';
  $scope.send = function(){
    var req = {
      'method':'GET',
      'url': 'http://localhost:3000/test'
  }
    $http(req).then(function(result){
      $scope.message = result.data.content;
      console.log(result);
    })
  }
})
