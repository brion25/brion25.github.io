import angular from "angular";
import Router from "angular-route";
import Config from "./config.js";

const {module: ng} = angular;

ng("myPage",[Router])
  .config(['$routeProvider',Config]);
