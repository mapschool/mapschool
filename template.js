var _ = require('underscore'),
    marked = require('marked'),
    fs = require('fs');

process.stdout.write(_.template(fs.readFileSync('template._', 'utf8'))({
        content: marked(fs.readFileSync(process.argv[2], 'utf8')),
        title: 'mapschool: ' + process.argv[3]
    }));
