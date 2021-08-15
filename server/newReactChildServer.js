const startServer = require('./server');
const path = require('path');

const buildRoot = path.resolve(__dirname, '..', 'new-react-child', 'build');

startServer(buildRoot, 3002);
