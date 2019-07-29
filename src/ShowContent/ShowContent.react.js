import React from 'react';

const ShowContent = (props) => {

    return (
        <div >
            <h2>Current Request</h2>
            <img src={props.request.imgRef} alt="logo"></img>
        </div>
    );

}

export default ShowContent;