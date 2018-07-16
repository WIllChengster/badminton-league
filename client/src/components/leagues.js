import React, {Component} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Leagues extends Component{
    constructor(props){
        super(props);
        this.state={
            leagueList: []
        };
    }
    
    componentWillMount(){
        axios.get("/api/getLeagues").then( res => {
            this.setState({
                leagueList: res.data
            })
            console.log(res);
        } )
    }

    createLeague(){
        axios.get("/api/createLeague").then( res => {
            this.forceUpdate();
        })
    }

    render(){

        const Leagues = this.state.leagueList.map( (item, index) =>{
            return(
                <div key={index} className="list-group-item my-3">
                    <Link to={`/listing/${item._id}`}>{item.name}</Link>
                    <p className="mt-3"> Start Date: {item.startDate}</p>
                    <p> End Date: {item.endDate}</p>
                    
                    <Link to='#' className="card-link btn btn-sm btn-primary">Join</Link>
                    <a href='#' className="card-link btn btn-sm btn-info">Info</a>
                 </div>
            )
        });

        console.log(this.state.leagues)
        return(
            <div>
                <button onClick={this.createLeague.bind(this)} className="btn btn-secondary " >Create a league</button>
                {Leagues}
            </div>
        )
    }
}



export default Leagues;
