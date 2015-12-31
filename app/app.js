import angular from "angular";
import Router from "angular-route";
import ngMaterial from "angular-material";
import FactoryProfile from "./common/factory-profile";
import FactoryBackground from "./common/factory-background.js";
import Config from "./config.js";

import "./style-app.js";

const {module: ng} = angular;

ng("myPage",[Router, 'ngMaterial'])
  .factory('FactoryBackground',["$q","$http",FactoryBackground])
  .factory('FactoryProfile',["$q","$http",FactoryProfile])
  .config(['$routeProvider',Config])
  .run(['FactoryBackground','$rootScope',(FactoryBackground, rootScope) => {
    FactoryBackground.then((backgroundUrl) => {
      rootScope.backgroundUrl = backgroundUrl;
    },(error) => {
      console.log("Error!!!");
    })
  }]);
