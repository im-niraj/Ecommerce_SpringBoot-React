import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div>
            <div className="card">
                {props.abc}
            </div>
        </div>
    );
}

export default Card;