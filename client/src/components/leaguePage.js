import React, { Component } from 'react';
import axios from 'axios';

class LeaguePage extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            startDate: "",
            endDate:"",
            location:"",
        }
    }

    componentWillMount(){
        const data = {id: this.props.match.params.leagueId};

        axios.post("/api/findLeague", data ).then( (res)=>{
            
            const { name, startDate, endDate, location } = res.data
            this.setState({
                name,
                startDate,
                endDate,
                location
            })
        } );
    }

    render() {
        console.log(this.state);

        const { name, startDate, endDate, location } = this.state
        return(
            <div>
                <h1 className="display-3">{name}</h1>
                <p>{startDate}</p>
                <p>{endDate}</p>
                <p>{location}</p>
            </div>
        )
    }
}

export default LeaguePage;