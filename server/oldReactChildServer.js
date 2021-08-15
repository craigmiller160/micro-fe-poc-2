const startServer = require('./server');
const path = require('path');

const buildRoot = path.resolve(__dirname, '..', 'old-react-child', 'build');

startServer(buildRoot, 3001);
