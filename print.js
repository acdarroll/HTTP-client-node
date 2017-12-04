var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    console.log("Started request");

    var chunkData = '';

    response.on('data', function(data){
      chunkData += data;
    });

    response.on('end', function() {
      console.log('Finished receiving data')
      console.log(chunkData);
    })
  });

}

getAndPrintHTML();