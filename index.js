/**
 * Create an HTTP Server to expose 4 endpoints for browser operations
 * 
 * 1. startServer
 * 2. stopServer
 * 3. cleanHistory
 * 4. getCurrentActiveTabForBrowser
 */

const express = require('express');
const app = express();
const port = 3000;



app.listen(port, () => {
    console.log('Server running at http://localhost:' + port);
})

