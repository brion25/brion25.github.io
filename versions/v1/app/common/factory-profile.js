export default FactoryProfile;

function FactoryProfile(q,http){
  let defer = q.defer(),
      profile = null,
      currentDate = null,
      interval = setInterval(() => {
        defer.notify('Getting LinkedIn Profile');
        try{
          profile = JSON.parse(localStorage['linkedinProfile']);
          defer.resolve(profile);
          clearInterval(interval);
        }catch(err){
          //err handler
        }
      },2000);

  return defer.promise;
}
