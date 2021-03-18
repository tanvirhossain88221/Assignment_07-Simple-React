import React from 'react';

const Club = (props) => {
    const club = props.club;
    const total = club.reduce((total , player) => total + player.salary, 0);
    const Pname = club.reduce((Pname , player) => Pname + " | " + player.name, " ");


    return (
        <div>
            <h3>Total Player</h3>
            <h5>Players Buy: {club.length}</h5>
            <p>Players Name: {Pname}</p>
            <p>Total Amount:{total}</p>
        </div>
    );
};

export default Club;