var getHTML = require('../http-functions');

function printHTML(html) {
  var replacements = {
    a : '4',
    e : '3',
    l : '1',
    o : '0',
    s : '5',
    t : '7',
    'ck' : 'x',
    'er' : '0r',
    'you' : 'j00'
  }

  html.toLowerCase();
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML.getHTML(requestOptions, printHTML);