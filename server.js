const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());

// Define API routes
app.get('/albums/top', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/albums/top');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching top albums:', error.message);
        res.status(500).send(error.message);
    }
});

app.get('/albums/new', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/albums/new');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching new albums:', error.message);
        res.status(500).send(error.message);
    }
});

app.get('/album/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const response = await axios.get(`http://localhost:3001/album/${slug}`);
        res.json(response.data);
    } catch (error) {
        console.error(`Error fetching album with slug ${slug}:`, error.message);
        res.status(500).send(error.message);
    }
});

app.get('/songs', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/songs');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching songs:', error.message);
        res.status(500).send(error.message);
    }
});

app.get('/faq', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/faq');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching FAQ:', error.message);
        res.status(500).send(error.message);
    }
});

app.get('/genres', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/genres');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching genres:', error.message);
        res.status(500).send(error.message);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
