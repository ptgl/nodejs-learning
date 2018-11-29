"use strict";

import {HEROS} from "./const"
import navbarView from "../view/common/navbar.html"

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
   }).state('manage',{
      views:{
        "navbar":{
          templateUrl: './view/common/navbar.html'
        }
      }
   }).state('manage.listView',{
    url: '/manage/:link/listView',
    views:{
      'tabledata@':{
        templateUrl: function($stateParams){
          return './view/manage-list/' + $stateParams.link + '-list.html'
      },
      controllerProvider: function($stateParams){
        return $stateParams.link + 'Ctrl';
      }
    }
    } 
   }).state('manage.detail',{
     url: '/manage/:link/detail?id',
     params:{   
      account: {}
    },

     views:{
       'detail@':{
        templateUrl: function($stateParams){
          return './view/manage-detail/' + $stateParams.link + '-detail.html'
      },
      controllerProvider: function($stateParams){
        return $stateParams.link + 'DetailCtrl';
      }
       }
     }
     
   })
 }