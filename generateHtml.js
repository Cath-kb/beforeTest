var fs = require('fs');

var header = '<!doctype html>\n\
<html>\n\
<body>\n\
';

var block = '\
    <div><span>inner content </span>block content</div>\n\
';

var footer = '\
</body>\n\
</html>\n\
';

var count = 10000;

var html_file_name_1 = 'indexSpan.html';
var html_file_descriptor = fs.openSync(html_file_name_1, 'w');

fs.writeSync(html_file_descriptor, header);
for (var i = 0; i < count; ++i) {
	fs.writeSync(html_file_descriptor, block);
}
fs.writeSync(html_file_descriptor, footer);

fs.closeSync(html_file_descriptor);

console.log('Done generate ' + html_file_name_1);