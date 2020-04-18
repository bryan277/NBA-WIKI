import React, { Component } from "react";
import {getTeamsList} from "./api";

class TeamsTab extends Component
{
    state=
    {
        teams: [],
        error: false,
        Loading: false
    };
    getTeams=async ()=>
    {
        this.setState({Loading:true});
        return getTeamsList().then(response => {
            console.log(response);
            if(response && response.data.length>0)
            {
                this.setState({Loading:false, teams: response.data});
            }
            else
            {
                  this.setState({error: true, Loading: false});
            }
        });
    };
    componentDidMount()
    {
        this.getTeams();
    }
    render()
    {
        const {Loading, error, teams}  = this.state;
        if(Loading)
        {
            return <div className="centered-text">Loading...</div>;
        }
        if(error)
        {
            return <div className="centered-text">Error Loading Data</div>;
        }
       return (
           <div className="tab-component-view box-shadow">
               <div className="grid-container">
                   {
                       teams && teams.map((team, index) => {
                           return (
                               <div className="grid-item-teams" key= {index}>
                                   <h1 className="name">{team.name}</h1>
                                   <p className="info">{team.division}</p>
                                   <div className="tooltiptext">
                                       <div style={{textAlign:"left", marginLeft: "10px"}}>
                                           <p>
                                               {team.full_name} {"("}
                                               {team.abbreviation} {")"}
                                           </p>
                                            <p>City: {team.city}</p>
                                            <p>Conference: {team.conference}</p>
                                            <p>Division: {team.division}</p>
                                        </div>
                                    </div>
                                </div>
                           );
                       })}
                </div>
            </div>
       );
    }
    
}
export default TeamsTab;