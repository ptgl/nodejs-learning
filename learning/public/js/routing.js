myApp.config(['$locationProvider', '$routeProvider',
function($locationProvider, $routeProvider){
    $routeProvider
    .when('/view1',{
        templateUrl: './view/view1.html'
    })
    .when('/view2/:name',{
      templateUrl: './view/view2.html',
      controller: 'myController2'
  })


}])