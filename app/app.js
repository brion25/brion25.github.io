import angular from "angular";
import Router from "angular-route";
import ngMaterial from "angular-material";
import FactoryProfile from "./common/factory-profile";
import Config from "./config.js";

import "./style-app.js";

const {module: ng} = angular;

ng("myPage",[Router, 'ngMaterial'])
  .factory('FactoryProfile',["$q",FactoryProfile])
  .config(['$routeProvider',Config]);
