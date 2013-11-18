var _ = require('underscore'),
    marked = require('marked'),
    fs = require('fs');

var content = marked(fs.readFileSync('README.md', 'utf8'));

fs.writeFileSync('index.html',
    _.template(fs.readFileSync('template._', 'utf8'))({
        content: content
    }));
