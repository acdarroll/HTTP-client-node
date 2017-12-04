var https = require('https');

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    console.log("Started request");

    var chunkData = '';

    response.on('data', function(data){
      chunkData += data;
      console.log(data + '\n');
    });

    response.on('end', function() {
      console.log('Finished receiving data')
    })
  });
}

getAndPrintHTMLChunks();
