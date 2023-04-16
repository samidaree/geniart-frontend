import React from 'react';

const ImageCard = ({ image }) => {
    return (
        <div>
            <img className="w-full rounded shadow-sm" src={image} alt="" />
        </div>
    );
};

export default ImageCard;