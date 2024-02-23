const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Test API");
});

app.listen(port, () => {
    console.info(`Server jalan di port ${port}`);
});