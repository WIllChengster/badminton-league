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
            
            <a href='#' className="card-link btn btn-sm btn-primary">Join</a>
            <a href='#' className="card-link btn btn-sm btn-info">Info</a>

        </li>
        )
    })
    return(
        <div>
            <h1 className="display-4">Welcome</h1>
            <a href='#' className="btn btn-lg btn-secondary">Create a League</a>
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

