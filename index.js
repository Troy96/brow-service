/**
 * Create an HTTP Server to expose 4 endpoints for browser operations
 * 
 * 1. startServer
 * 2. stopServer
 * 3. cleanHistory
 * 4. getCurrentActiveTabForBrowser
 */

const express = require('express');
const { exec } = require('child_process');
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
 * Start a browser tab with an url provided
 */
app.get('/start', (req, res) => {
   const url = req.query.url || 'https://google.com';
   const browser = req.query.browser ? req.query.browser.toLowerCase() : 'chrome';

   if(!['chrome', 'firefox'].includes(browser)) {
     res.send('Supported browsers are Chrome and Firefox')
     return;
   }

   exec(`start ${browser} ${url}`, (err, stdout, stdin) => {
       if(err) {
           console.log('Got error in starting url', err)
           return
       }

       res.redirect('/')
   })
})

/**
 * Stop a browser
 */
app.get('/stop', (req, res) => {
   const browser = req.query.browser ? req.query.browser.toLowerCase() : 'firefox';

    if (!['chrome', 'firefox'].includes(browser)) {
        res.send('Supported browsers are Chrome and Firefox')
        return;
    }

   exec(`taskkill /f /im ${browser}.exe`, (err, stdout, stdin) => {
       if(err) {
           console.log('Got error in stopping browser', err)
           return;
       }

       res.redirect('/')
   })
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

