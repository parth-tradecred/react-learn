import React from 'react'
import './style.css'

const ImageCard = (props) => {
    return(
        <img src={props.imageUrl} />
    );
}

export default ImageCard;