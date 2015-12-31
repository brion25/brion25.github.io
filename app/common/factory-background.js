export default FactoryBackground;

function FactoryBackground(q,http){
  let defer = q.defer();

  http({
    method : 'GET',
    url : 'https://pixabay.com/api/?key=1818717-2312c300ca69a3d1b095dad0e&q=happy+new+year&orientation=horizontal&safesearch=true&editors_choice=true&min_width=1080',
  }).then((response) => {
    let data = response.data,
        imageIndex = parseInt(Math.random() * data.hits.length);

    defer.resolve(data.hits[imageIndex].webformatURL.replace('_640.jpg','_960.jpg'));
  },(error) => {
    defer.reject(error);
  });

  return defer.promise;
}
