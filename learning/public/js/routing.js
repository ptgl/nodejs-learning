"use strict";

import {HEROS} from "./const"

routing.$inject = ['$locationProvider', '$routeProvider', '$stateProvider'];
export function routing($locationProvider, $routeProvider, $stateProvider){
    $routeProvider
     .when('/view1',{
         templateUrl: './view/view1.html'
     })
     .when('/view2/:name',{
       templateUrl: './view/view2.html',
       controller: 'myController2'
   })
  
  $stateProvider.state('welcome',{
    url:'/welcome',
     templateUrl: "./view/welcome.html",
     controller: ['$scope','$state',function($scope, $state){
         $scope.state = '';
         $scope.heros = HEROS;
         $scope.gotoState = function(state){
             $state.go(state);
           }
     }]
   }).state('welcome.detail',{
    url: '/detail',
  //  url: '/detail/:id/:name',
    params:{
      id: '',
      name: ''
    },
    templateUrl: "./view/welcome.detail.html",
    controller: "detailCtrl"
   })
   .state('view1',{
     templateUrl: "./view/view1.html"
   })
 }