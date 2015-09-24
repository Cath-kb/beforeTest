var fs = require('fs');

var header = '<!doctype html>\n\
<html>\n\
<head>\n\
<title>indexBefore</title>\n\
<link rel="stylesheet" href="style.css" type="text/css" media="screen" />\n\
</head>\n\
<body>\n\
';

var block = '\
    <div>block content</div>\n\
';

var footer = '\
</body>\n\
</html>\n\
';

var cssRule = 'div:before {\n\
content: "inner content ";\n\
}\n\
';

var count = 10000;

//generate html file
var html_file_name_1 = 'indexBefore.html';
var html_file_descriptor = fs.openSync(html_file_name_1, 'w');

fs.writeSync(html_file_descriptor, header);
for (var i = 0; i < count; ++i) {
	fs.writeSync(html_file_descriptor, block);
}
fs.writeSync(html_file_descriptor, footer);

fs.closeSync(html_file_descriptor);

console.log('Done generate ' + html_file_name_1);

//generate css file
var css_file_name_1 = 'style.css';
var css_file_descriptor = fs.openSync(css_file_name_1, 'w');

for (var j = 0; j < count; ++j) {
	fs.writeSync(css_file_descriptor, cssRule);
}

fs.closeSync(css_file_descriptor);

console.log('Done generate ' + css_file_name_1);