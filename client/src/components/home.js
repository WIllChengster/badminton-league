import React from 'react';
import { Link } from 'react-router-dom'
import leagueData from '../data/leagueData'
export default () => {
    const Leagues = Object.keys(leagueData).map((item,index)=>{
        return(
            <li key={index} className="list-group-item">
            <Link to={`/listing/${item}`}>{leagueData[item].name}</Link>
            <p className="mt-3"> Start Date: {leagueData[item].startDate}</p>
            <p> End Date: {leagueData[item].endDate}</p>
        </li>
        )
    })
    return(
        <div>
            <h1 className="display-4">Welcome</h1>
            <div className="card">
                <div className="card-body bg-transparent">
                    <h5 className="card-title">Current Leagues</h5>
                </div>
                <ul className="list-group list-group-flush">
                    {Leagues}
                </ul>
            </div>
        </div>
    )
}

