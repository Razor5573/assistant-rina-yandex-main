const https = require('https');
const http = require('http');

module.exports = function (app) {
    app.use((req, res, next) => {
        if (req.protocol === 'https') {
            const agent = new https.Agent({ rejectUnauthorized: false });
            req.agent = agent;
        } else {
            req.agent = http.globalAgent;
        }
        next();
    });
};
