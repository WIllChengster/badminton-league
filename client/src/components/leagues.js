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
                    <p>Location: {item.location}</p>
                    <p> Start Date: {new Date(item.startDate).toDateString()}</p>
                    <p> End Date: {new Date(item.endDate).toDateString()}</p>
                    <div className="card-link btn btn-sm btn-primary">ongoing</div>
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
