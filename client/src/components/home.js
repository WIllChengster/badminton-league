import React from 'react';
import { Link } from 'react-router-dom'
export default () => {
    return(
        <div>
            <h1>Welcome</h1>
            <div className="card">
                <div className="card-body bg-transparent">
                    <h5 className="card-title">Current Leagues</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Link to="/listing/">League Title</Link>
                        <p className="mt-3"> Start Date: 1/1/01</p>
                        <p> End Date: 1/2/01</p>
                    </li>
                </ul>

            </div>
        </div>
    )
}

