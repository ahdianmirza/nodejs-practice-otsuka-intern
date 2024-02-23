const express = require('express');
const app = express();
const port = 3000;

const mainRoutes = require('./src/routes/routes');

// handle data post json
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Test API");
});

app.use('/api/', mainRoutes);

app.listen(port, () => {
    console.info(`Server jalan di port ${port}`);
});