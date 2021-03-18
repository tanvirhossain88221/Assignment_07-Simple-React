import React, { useState } from 'react';
import fakeData from '../../fakeData/Data.json';
import Club from '../Club/Club';
import Playersinfo from '../Playersinfo/Playersinfo';
import './Player.css'

const Player = () => {
    const first15 = fakeData.slice(0, 15);
    const [players, setPlayers] = useState(first15);
    const [club, setClub] = useState([]);
    const handleAddPlayer = (player) => {
        const newClub = [...club, player];
        setClub(newClub);
    }
    return (
        <div className="total-player-container">
            <div className="player-container">
                {
                    players.map(players => <Playersinfo
                    handleAddPlayer = {handleAddPlayer}
                    playersinfo={players}
                    ></Playersinfo>)
                }
            
            </div>
            <div className="club-player">
                <Club club={club}
                ></Club>
            </div>
        </div>
    );
};

export default Player;