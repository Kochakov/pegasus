import express from "express";
import mongoose from "mongoose";
import EventSchema from "./models/EventSchema.js";

// const express = require('express')


const PORT = process.env.PORT || 3001

const DB_URL = "mongodb+srv://Maksim:12345@cluster0.mlx9r.mongodb.net/Pegasus?retryWrites=true&w=majority"

const app = express()

app.use(express.json());

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('Server started on ' + PORT))
    } catch (err) {
        console.log(err)
    }
}

app.post('/add-event', async (req, res) => {
    try {
        const data = req.body
        console.log('req', req.body)
        const event = await EventSchema.create(data) 
        res.status(200).send(event)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.get('/events', async (req, res) => {
    try {

        const events = await EventSchema.find().select(["_id", "firstBlockImg", "title", "startDate", "endDate", "cardDescription"]);
        
        res.status(200).send(events)


    } catch (err) {
        res.status(err.code).send(err.message)
    }
})

app.get('/event/:id', async (req, res) => {
    try{

        const id = req.params.id

        const event = await EventSchema.findById(id).select(["-startDate", "-endDate", "-cardDescription"])
        res.status(200).send(event)

    }catch(err){
        res.status(err.code).send(err.message)
    }
})


app.get('/main', (req, res) => {
    res.json({
        message: "frontend from backend"
    })
})

app.get('/tour/:id', (req, res) => {
    res.json({
        develop: "page develop"
    })
})

startApp()