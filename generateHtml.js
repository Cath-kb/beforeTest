var count = 100;
var fs = require('fs');

var header = '<!DOCTYPE html>\n\
<html>\n\
<head>\n\
<title>test span</title>\n\
<link rel="stylesheet" href="styleSpan.css" type="text/css" media="screen" />\n\
</head>\n\
<body>\n\
';

var block_start = '<div class="div';
var block_end = '"><span>inner content </span>block content</div>\n';

var footer = '\
</body>\n\
</html>\n\
';

var cssRule_start = '.div';

var cssRule_end = ' span {\ncolor: #f00;\n}\n';


var html_file_name = 'indexSpan.html';
var html_file_descriptor = fs.openSync(html_file_name, 'w');

fs.writeSync(html_file_descriptor, header);
for (var i = 0; i < count; ++i) {
	fs.writeSync(html_file_descriptor, block_start+i+block_end);
}
fs.writeSync(html_file_descriptor, footer);

fs.closeSync(html_file_descriptor);

console.log('Done generate ' + html_file_name);

//generate css file
var css_file_name = 'styleSpan.css';
var css_file_descriptor = fs.openSync(css_file_name, 'w');

for (var j = 0; j < count; ++j) {
	fs.writeSync(css_file_descriptor, cssRule_start+j+cssRule_end);
}

fs.closeSync(css_file_descriptor);

console.log('Done generate ' + css_file_name);