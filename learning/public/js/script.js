var myApp = angular.module("myApp", []);

myApp.controller('myCtrl', function($scope, $http){
  const host = "http://localhost:3000";
  $scope.message = 'my World';
  $scope.send = function(){
    var req = {
      'method':'GET',
      'url': host + '/test'
  }
    $http(req).then(function(result){
      $scope.message = result.data.content;
      console.log(result);
    })
  }

  $scope.add = function(){
    var req = {
      method:'POST',
      url: host + '/add',
      data: {'name':$scope.name}
  }
    $http(req).then(function(result){
      $scope.message = result.data.name;
      console.log(result);
    })
  }

})
