const express = require('express');
const PORT = process.env.port || 5000;
const cors = require('cors');
const app = express();
const { resolve } = require('path');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const leagueRoute = require('./routes/leagueRoutes');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(resolve(__dirname, "client", "dist")))

app.use("/api", leagueRoute);


mongoose.connect(keys.mongoURI, (err, res) => {
    if(err){
        console.log("\x1b[31m", "db connection failed! ", err)
    } else {
        console.log("\x1b[36m%s", "Successful Connection to mongodb")
    }
});



app.listen(PORT, () => {
    console.log("\x1b[36m", "Server is running on PORT: " +PORT)
});