import angular from "angular";
import moment from "moment";
import "angular-route";
import "@uirouter/angularjs/release/angular-ui-router.min.js";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "angular-material/angular-material.css";
import "angular-material/angular-material.js";
import "angular-aria/angular-aria.js";
import "angular-animate/angular-animate.js";
import {routing} from "./js/routing";
import {myController2} from "./js/controller2";
import {detailCtrl} from "./js/detailCtrl";
import {bankCtrl} from "./js/manage-list/bankCtrl"; 
import {bankDetailCtrl} from "./js/manage-detail/bankDetailCtrl"
import {mainService} from "./js/main-service";
const myCtrl = require("./js/main-ctrl");

var moduleName = "myApp";

angular.module(moduleName, ['ngRoute','ui.router','ngMaterial']);

angular.module(moduleName).config(routing);
angular.module(moduleName).config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('DD-MM-YYYY');
    }});

angular.module(moduleName).controller("myCtrl", myCtrl);
angular.module(moduleName).controller("myController2", myController2);
angular.module(moduleName).controller("detailCtrl", detailCtrl);
angular.module(moduleName).controller("bankCtrl", bankCtrl);
angular.module(moduleName).controller("bankDetailCtrl", bankDetailCtrl);
angular.module(moduleName).service("myService",mainService)