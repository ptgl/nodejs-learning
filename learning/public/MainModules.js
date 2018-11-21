import angular from "angular";
import "angular-route";
import "@uirouter/angularjs/release/angular-ui-router.min.js";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {routing} from "./js/routing";
import {myController2} from "./js/controller2";
import {detailCtrl} from "./js/detailCtrl";

const myCtrl = require("./js/script");

var moduleName = "myApp";

angular.module(moduleName, ['ngRoute','ui.router']);

angular.module(moduleName).config(routing);
angular.module(moduleName).controller("myCtrl", myCtrl);
angular.module(moduleName).controller("myController2", myController2);
angular.module(moduleName).controller("detailCtrl", detailCtrl);