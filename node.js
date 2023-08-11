const gradientBadge = require('gradient-badge');
exports.endpoint = function (req, resp) {
    resp.setHeader('Content-Type', 'image/svg+xml');
    resp.end(gradientBadge({
        subject: '',
        status: 'statusasdasdas',
        style: 'flat',
        gradient: ['ff00fb', '00faf2', '4400ff']
    }));
}