import express from 'express'
const { router } = require('./routes')
const app = express()

app.use(express.json())
app.use(router)

module.exports = { app }
