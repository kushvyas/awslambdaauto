//var time = require('time');
exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: '200',
        body: 'The time in Los Angeles: 8.00'
    });
};
