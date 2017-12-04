var getHTML = require('../http-functions');

function printHTML(html) {
  var reversed = html.split("").reverse().join("");
  console.log(reversed);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML.getHTML(requestOptions, printHTML);