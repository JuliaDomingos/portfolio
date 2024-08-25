import React from 'react';

export const Post = ({ title, description, photos }) => {
    return (
        <div className="post">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="photos">
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        className="photo"
                    />
                ))}
            </div>
        </div>
    );
};