import React, { Component } from "react";
import TeamsTab from "./TeamsTab";
import GamesTab from "./GamesTab";

class TabView extends Component
{
    state=
    {
        showTeams: true,
        showGames: false
    };
    handleTeamsTab=()=>
    {
        this.setState({
            showTeams: true,
            showGames:false
        });
    };
    handleGamesTab=()=>
    {
        this.setState({
            showTeams: false,
            showGames:true
        });
    };
    render()
    {
        const{ showTeams,showGames}=this.state;
        const {teams}=this.props;
        return (
            <div className="tab-view">
            <div>
             <div className="tabs box-shadow" onClick={this.handleTeamsTab} style={showTeams ? {backgroundColor: "#f4723d"}:{backgroundColor: "#white"}}>
             <p style ={ showTeams ? {color: "white", fontWeight: "bold"}: {}}>NBA Teams</p>
             </div>
             <div className="tabs box-shadow" onClick={this.handleGamesTab} style={showGames ? {backgroundColor: "#f4723d"}:{backgroundColor: "#white"}}>
             <p style ={ showGames ? {color: "white", fontWeight: "bold"}: {}}>NBA Games</p>
             </div>
             </div>
             <div>
             {showTeams && <TeamsTab data={teams} />}
             {showGames && <GamesTab />}
           </div>
         </div>
        );
    }
}
export default TabView;

