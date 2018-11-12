import angular from "angular";
import "angular-route";
import "@uirouter/angularjs/release/angular-ui-router.min.js";
import {routing} from "./js/routing";
import {myController2} from "./js/controller2";

const myCtrl = require("./js/script");

var moduleName = "myApp";

angular.module(moduleName, ['ngRoute','ui.router']);

angular.module(moduleName).config(routing);
angular.module(moduleName).controller("myCtrl", myCtrl);
angular.module(moduleName).controller("myController2", myController2);