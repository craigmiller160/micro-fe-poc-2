const express = require('express');
const fs = require('fs');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const getContentType = (ext) => {
    switch (ext) {
        case '.html': return 'text/html';
        case '.css': return 'text/css';
        case '.js': return 'application/javascript';
        default:
            throw new Error(`Cannot find content-type for extension: ${ext}`);
    }
};

const getCacheControl = (requestPath) => {
    switch (requestPath) {
        case '/remoteEntry.js': return 'no-cache,no-store';
        default: return 'public, max-age=604800';
    }
};

const startServer = () => {

};

module.exports = startServer;
