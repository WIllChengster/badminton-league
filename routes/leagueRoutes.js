const router = require('express').Router();
const leagueModel = require("../models/leagueModel")

router.get("/getLeagues", (req, res) => {
    leagueModel.find( (err, res) => {
        if(err)throw err;
        console.log(res);
    } )
})

// router.get("/createLeague", (req, res) => {
//     const league = new leagueModel = {
//         name: "Jane Doe",
//         players: [],
//         startDate: Date.now(),
//         endDate: Date.now(),
//         location: "somewhere",
//         Organizer: []
//     }
//     res.send(league);

// })


module.exports = router;