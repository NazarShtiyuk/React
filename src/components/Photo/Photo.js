import React from 'react';

const Photo = (props) => {
    const {photo: {albumId, id, title, thumbnailUrl}} = props
    return (
        <div>
            <ul>
                <li>albumId: {albumId}</li>
                <li>id: {id}</li>
                <li>title: {title}</li>
                <li>photo:
                    <img src={thumbnailUrl} alt="photo"/>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default Photo;