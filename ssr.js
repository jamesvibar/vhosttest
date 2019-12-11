const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

function prepareSsr() {
    return new Promise( resolve => {
        app.prepare().then(() => {
            const router = express.Router()

            router.get("/_next/*", (req, res) => {
                return handle(req, res)
            })

            router.get('/', (req, res) => {
                const username = req.vhost[0]

                /**
                 * For example username johndoe does not exist
                 */
                if (username === 'johndoe') {
                    let error = new Error('Username not found')
                    error.statusCode = 500
                    return app.renderError(error, req, res, "/_error", { status: 500, statusCode: 500, err: error})
                }

                return app.render(req, res, '/', {
                    username
                })
            })

            return resolve(router)
        })
    })
}

module.exports = prepareSsr

