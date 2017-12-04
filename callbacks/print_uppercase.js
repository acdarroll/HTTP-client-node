var getHTML = require('../http-functions');

function printHTML(html) {
  var upper = html.toUpperCase();
  console.log(upper);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML.getHTML(requestOptions, printHTML);