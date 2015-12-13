import Home from "./home/index.js";

export default Config;

function Config(routeProvider){
  routeProvider
   .when('/', {
    template: Home.view
  })
}
