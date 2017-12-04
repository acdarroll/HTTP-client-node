var https = require('https');

function getHTML(request, callback) {

  https.get(requestOptions, function(response) {
    console.log("Started request");

    var chunkData = '';

    response.on('data', function(data){
      chunkData += data;
    });

    response.on('end', function() {
      console.log('Finished receiving data')
      callback(chunkData);
    })
  });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);