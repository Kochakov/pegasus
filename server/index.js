// import express from "express";
const express = require('express')





const PORT = process.env.PORT || 3001

const app = express()


app.listen(PORT, () => {
    console.log('Server started on ' + PORT)
})

app.get('/main', (req, res) => {
    res.json({
        message: "frontend from backend"
    })
})

