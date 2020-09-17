import React from 'react';
import "../App.css"

function DisplayForm({ details }) {
    return (
        <div>
            <h3>{details.first_name}</h3>
            <p>Email: {details.email}</p>
        </div>
    )
}

export default DisplayForm;