import React from 'react';
import leagueData from '../data/leagueData'
export default (props) => {
    console.log(props.match.params.leagueId)
    const leagueId = props.match.params.leagueId
    return(
        <div>
            <h1 className="display-4">{leagueData[leagueId].name}</h1>
            <p>Location: {leagueData[leagueId].location}</p>
            <p>Start Date:{leagueData[leagueId].startDate}</p>
            <p>End Date: {leagueData[leagueId].endDate}</p>
        </div>
    )
}