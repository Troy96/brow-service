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


app.get('/', (req, res) => {
    res.send(
        `<h1>Takeover your Browser</h1>
            <p>Available services</p>
            <p>GET: /start?browser=browser&url=http://example.com</p>
            <p>GET: /stop?browser=browser</p>
            <p>GET: /cleanup?browser=chrome</p>
            <p>GET: /getUrl?browser=chrome</p>
        `)
})

/**
 * Start a browser
 */
app.get('/start', (req, res) => {
    res.send('Run start browser')
})

/**
 * Stop a browser
 */
app.get('/stop', (req, res) => {
    res.send('Run stop browser')
})

/**
 * Clean a browser history
 */
app.get('/cleanup', (req, res) => {
    res.send('Run clean browser')
})

/**
 * Start a browser
 */
app.get('/getUrl', (req, res) => {
    res.send('Run get active url browser')
})

app.listen(port, () => {
    console.log('Server running at http://localhost:' + port);
})

