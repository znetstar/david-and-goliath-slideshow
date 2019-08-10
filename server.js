const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');
const { Server: HTTPServer } = require('http');

const app = express();
const httpServer = new HTTPServer(app);



if (process.env.AUTH) {
    console.log(`auth turned on`);
    app.use(basicAuth({
        authorizer: (username, password) => basicAuth.safeCompare(password, process.env.AUTH),
        challenge: true,
        realm: 'Slideshow'
    }))
}

app.use(express.static(path.join( __dirname, 'dist' )));

const port = Number(process.env.PORT) || 3000;

httpServer.listen(port, (err) => {
    if (err) {
        console.error(`error binding to port ${err.message}`);
        process.exit(0);
    }

    console.log(`listening on port ${port}...`);
});