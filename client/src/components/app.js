import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route} from 'react-router-dom';
import Home from './home';
import Leagues from './leagues';

const App = () => (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            {/* <h4>SoCal Badminton League </h4> */}
            <div className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
            </div>
            <div className="nav-item">
                <Link to="/leagues" className="nav-link">Leagues</Link>
            </div>
            <div className="nav-item">
                <Link to="/join_leagues" className="nav-link">Join a league</Link>
            </div>
        </nav>
        <div className="container-fluid">
            <div className="row">
                <Route exact path="/" component={Home}/>
                <Route path ="/leagues" component={Leagues}/>
            </div>
        </div>
    </div>
);

export default App;
