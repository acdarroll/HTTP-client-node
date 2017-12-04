var getHTML = require('../http-functions');

function printHTML(html) {
  var lower = html.toLowerCase();
  console.log(lower);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML.getHTML(requestOptions, printHTML);