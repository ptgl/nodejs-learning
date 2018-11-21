module.exports = ['$scope', '$http', '$location', '$state', function($scope, $http, $location, $state){
  
  this.$onInit = function(){
    $state.go('manage');
  }
  
  const host = "http://localhost:3000";
  $scope.message = 'my World';
  $scope.state = '';



  $scope.gotoView = function(path){
    // ex: /view1 or /view2 
    document.getElementById('angular-route').style.color = "red";
    $location.path(path);
  }

  $scope.gotoWelcome = function(){
    $state.go('welcome');
  }  

  $scope.gotoSate = function(name,param){
    $state.go(name, param);
  }  

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

}]