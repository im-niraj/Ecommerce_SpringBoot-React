import React from 'react';
import './Card.css'
import { UseCustomContext } from "../../UseCustomContext";

function Card(props) {
    const {state, dispatch} = UseCustomContext();
    return (
        <div>
            <div className="card">
                {state?"Hello":"bye"}
            </div>
        </div>
    );
}

export default Card;