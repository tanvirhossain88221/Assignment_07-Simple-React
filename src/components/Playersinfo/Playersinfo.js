import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'
import './Playersinfo.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Playersinfo = (props) => {
    const {image, name, salary} = props.playersinfo
    return (
        <div className="single-player">
            <div className="image">
            <img src={image} alt=""/>
            </div>
            <div >
            <h2>{name}</h2>
            <p>Salary: {salary}</p>
            <button className="btn btn-success" onClick={() => props.handleAddPlayer(props.playersinfo)}>
                <FontAwesomeIcon icon={faPlus} /> Add to Club</button>
            </div>
        </div>
    );
};

export default Playersinfo;