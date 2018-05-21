import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route} from 'react-router-dom';
import GettingStarted from './getting-started'
import Home from './home';
import Leagues from './leagues';

const App = () => (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <h4 className="text-light">SoCal Badminton League </h4>
        </nav>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="mt-5">
                        <Link to="/getting-started">Getting Started</Link>
                    </div>
                    <div className="mt-5">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="mt-5">
                        <Link to="/leagues">Leagues</Link>
                    </div>
                    <div className="mt-5">
                       <Link to="/join-leagues">Join a league</Link>
                    </div>
                </div>
                <div className="col-9 mt-5">
                    <Route path="/getting-started" component={GettingStarted}></Route>
                    <Route exact path="/" component={Home}/>
                    <Route path ="/leagues" component={Leagues}/>
                </div>

            </div>
        </div>
    </div>
);

export default App;
