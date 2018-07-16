const router = require('express').Router();
const leagueModel = require("../models/leagueModel")
const util = require('util');


router.get("/getLeagues", (req, res) => {
    leagueModel.find( (err, data) => {
        if(err)throw err;
        res.send(data);
    } )
});

router.get("/createLeague", (req, res) => {
    const league = new leagueModel({
        name: "Some League Nameeee",
        players: [],
        startDate: Date.now(),
        endDate: Date.now(),
        location: "somewhere",
        Organizer: []
    })
    league.save( (err) => {
        if(err){
            console.log(err)
        }
    } )
    res.send(league);
});

router.post("/findLeague", (req, res) => {
    leagueModel.findById(req.body.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    })
})


module.exports = router;