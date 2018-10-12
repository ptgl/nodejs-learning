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
      data: {'name':$scope.name},
      params:{'type': $scope.type}
  }
    $http(req).then(function(result){
      $scope.message = `Added ${result.data.name}`;
      console.log(result);
    })
  }

  $scope.update = function(){
    var req = {
      method:'PUT',
      url: host + '/update/' + $scope.name
  }
    $http(req).then(function(result){
      $scope.message = `Updated ${result.data.newName}`;
      console.log(result.data);
    })
  }

})
