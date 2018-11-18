import express from 'express'
// const express = require('express')
const app = express()
const port = 1234

app.get('/', (req, res) => {
    res.sendFile('./index.html')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})