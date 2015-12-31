export default HomeController;

function HomeController(FactoryProfile){
  let vm = this;
  FactoryProfile.then((profile) => {
    console.log(profile);
    vm.profile = profile;
  });
}
