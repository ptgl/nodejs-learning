import angular from "angular";
import "angular-route";
import "@uirouter/angularjs/release/angular-ui-router.min.js";
import {routing} from "./js/routing";

const myCtrl = require("./js/script");

var moduleName = "myApp";

angular.module(moduleName, ['ngRoute','ui.router']);

angular.module(moduleName).config(routing);
angular.module(moduleName).controller("myCtrl", myCtrl);