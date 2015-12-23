export default FactoryProfile;

function FactoryProfile(q){
  let defer = q.defer(),
      profile = null,
      currentDate = null,
      interval = setInterval(() => {
        defer.notify('Getting LinkedIn Profile');
        try{
          profile = JSON.parse(localStorage['linkedinProfile']);
          clearInterval(interval);
          defer.resolve(profile);
        }catch(err){
          //err handler
        }
      },1000);

  return defer.promise;
}
