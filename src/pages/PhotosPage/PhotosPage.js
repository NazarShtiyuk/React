import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Photo from "../../components/Photo/Photo";
import photosService from "../../services/photos.service";

const PhotosPage = () => {
    const {albumId} = useParams()
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        photosService.getAll()
            .then(item => setPhotos([...item]))
    }, [])
    return (
        <div>
            {photos.filter(item => item.albumId == albumId).map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default PhotosPage;