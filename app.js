const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8800;

const mainRoutes = require('./src/routes/routes');

// handle data post json
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        Service: "Sakila APi"
    });
});

// register main routes
app.use('/api/', mainRoutes);

app.get('*', (req, res) => {
    res.redirect('/api/not-found');
});

app.listen(PORT, () => {
    console.info(`Sakila API Service is running on port ${PORT}. ${process.env.DEV == 'TRUE' ? "<Development Mode>" : ""}`);
});