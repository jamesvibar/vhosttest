const express = require('express')
const vhost = require('vhost')
const api = require('./api')
const ssr = require('./ssr')
const app = express()

async function createApp() {
    app.use(vhost('api.vhosttest.com', api))
    app.use(vhost('*.vhosttest.com', await ssr()))
    
    app.listen(3000, () => {
        console.log('App running on port 3000!')
    })
}

createApp()

    

