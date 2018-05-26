const express = require('express');
const PORT = process.env.port || 5000;
const cors = require('cors');
const app = express();
const { resolve } = require('path');

app.use(cors());

app.use(express.static(resolve(__dirname, "client", "dist")))



app.listen(PORT, () => {
    console.log("Server is running on PORT: " +PORT)
})