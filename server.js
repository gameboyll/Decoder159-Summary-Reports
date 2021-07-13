let http = require('http'),
fs = require('fs'),
path = require('path'),
url = require('url'),
port = process.argv[2] || 8080,
dir_public = 'public';

let forMethod = {

    get: function (req, res) {

        let ext = path.extname(req.url).toLowerCase(),
        uri = path.join(dir_public, req.url);

        // if no ext then assume index.html of path
        if (!ext) {

            uri = path.join(dir_public, req.url, 'index.html');
            ext = '.html';

        }

        fs.readFile(uri, 'utf-8', function (e, data) {

            if (e) {

                res.writeHead(500);
                res.end(e.message);

            } else {

                // default mime to html
                let mime = 'text/html';
                // set plain text for *.js
                mime = ext === '.js' ? 'text/plain' : mime;

                res.setHeader('Content-Type', mime);
                res.writeHead(200);
                res.end(data, 'utf-8');

            }

        });
    },

    post: function (req, res) {

        let body = '',
        query = url.parse(req.url, true).query;

        if (query) {

            console.log(query);

        }

        req.on('data', function (chunk) {

            body += chunk;

        });

        req.on('end', function () {

            // parse what should be JSON
            body = JSON.parse(body);

            if (body.iwant) {

                if (body.iwant === 'theanwser') {

                    res.end('42');

                } else {

                    res.end('sorry');

                }

            } else {

                res.end('sorry');

            }
        });

    }

};

let server = http.createServer(function (req, res) {

        let method = forMethod[req.method.toLowerCase()];

        if (method) {

            method(req, res);

        } else {

            res.end('unsupported method');

        }

    });

server.listen(port, function () {

    console.log('check it on : ' + port);

});
