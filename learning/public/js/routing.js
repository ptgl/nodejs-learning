myApp.config(['$locationProvider', '$routeProvider', '$stateProvider',
function($locationProvider, $routeProvider, $stateProvider){
   $routeProvider
    .when('/view1',{
        templateUrl: './view/view1.html'
    })
    .when('/view2/:name',{
      templateUrl: './view/view2.html',
      controller: 'myController2'
  })
 
 $stateProvider.state('welcome',{
    templateUrl: "./view/welcome.html",
    controller: function($scope, $state){
        $scope.state = '';
        $scope.gotoState = function(state){
            $state.go(state);
          }
    }
  })
  .state('view1',{
    templateUrl: "./view/view1.html"
  })
}])