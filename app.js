const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8080;

// Managed Database Connection
const dbURI = process.env.MONGODB_URI;
if (dbURI) {
    mongoose.connect(dbURI)
        .then(() => console.log("Successfully connected to Managed Database"))
        .catch(err => console.error("Database connection error:", err));
}

app.use(express.static(__dirname));

// Active Monitoring Health Endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date() });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Capstone App listening on port ${port}`);
});
