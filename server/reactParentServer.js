const startServer = require('./server');
const path = require('path');

const buildRoot = path.resolve(__dirname, '..', 'react-parent', 'build');

const proxyMap = {
    '/oldReactChild': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
            '^/oldReactChild': ''
        },
        logLevel: 'debug'
    },
    '/newReactChild': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        pathRewrite: {
            '^/newReactChild': ''
        },
        logLevel: 'debug'
    }
};

startServer(buildRoot, 3000, proxyMap);
