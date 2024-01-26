// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get all comments
app.get('/posts/:id/comments', async (req, res) => {
    try {
        const { data } = await axios.get(`http://localhost:4001/posts/${req.params.id}/comments`);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Create a comment
app.post('/posts/:id/comments', async (req, res) => {
    try {
        const { data } = await axios.post(`http://localhost:4001/posts/${req.params.id}/comments`, req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Start server
app.listen(4002, () => {
    console.log('Listening on 4002');
});