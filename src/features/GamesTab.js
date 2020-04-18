import React, { Component } from "react";
import { getFancyDate } from "../utils/utils";
import { getGamesList } from "./api";
import Modal from "./Modal";

class GamesTab extends Component
{
    state = {
        Loading: false,
        games: [],
        error: false,
        currPage: null,
        showModal: false,
        gamesData: null
    };
    componentDidMount()
    {
        this.getGames();
    }
    getGames = async currPage => {
        this.setState({ Loading: true });
    return getGamesList(currPage)
      .then(response => {
        console.log(response);
        if (response && response.data.length > 0) {
          this.setState({
            Loading: false,
            games: response.data,
            currPage: response.meta.current_page
          });
        } else {
          this.setState({ error: true, Loading: false });
        }
      })
      .catch(error => {
        this.setState({ error: true, Loading: false });
        alert(error.message);
      });

    };
    showModal = gamesData => {
        this.setState({ showModal: true, gamesData });
    };
    hideModal = () => {
        this.setState({ showModal: false });
    };
    handleCurrPage = currPage => {
        this.getGames(currPage);
    };
    render() {
        const {
            showModal,
            gamesData,
            games,
            currPage,
            Loading,
            error
        } = this.state;
        if(Loading) {
            return <div className="centered-text"> Loading...</div>;
        }
        if(error)
        {
            return <div className="centered-text">Error Loading data</div>;
        }
        return (
            <div className="tab-component-view box-shadow">
            <div className="grid-container">
            {
                games && games.map((game, index) => {
                    return (
                        <div className="grid-item-games" key= {index} onClick={() => this.showModal(game)}>
                        <h1 className="name" style={{fontSize: '25px'}}>{getFancyDate(game.date)}</h1>
                        <p className="date-info">{game.status}</p>
                        </div>
                    );
            })}
            </div>
                <div>
                    {
                        currPage !== 1 && (
                            <button className="close-btn" onClick={() => this.handleCurrPage(currPage - 1)}>Previous</button>
                        
                        )}
                         <button className="close-btn" onClick={() => this.handleCurrPage(currPage + 1)}>Next</button>
                         </div>
                    <Modal show={showModal} hideModal={this.hideModal} gamesData={gamesData}/>
                        </div>
               );
    }
} 
       export default GamesTab;
