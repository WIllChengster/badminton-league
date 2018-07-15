var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    login: {type: String},
    name: {type: String},
    avatar: {type: String}
})

var leagueSchema = new Schema({
    name: {type: String},
    numPlayers: {type: Number, default: 0},
    players: [userSchema],
    startDate: {type: Date},
    endDate: {type: Date},
    location: {type: String},
    Organizer: [userSchema]
})

module.exports = mongoose.model("leagues", leagueSchema);