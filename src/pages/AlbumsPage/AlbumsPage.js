import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {useParams} from "react-router-dom";

import Album from "../../components/Album/Album";
import './AlbumsPage.css'
import albumsService from "../../services/albums.service";

const AlbumsPage = () => {
    const {id} = useParams()
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        albumsService.getAll()
            .then(item => setAlbums([...item]))
    }, [])
    return (
        <div className={'contentAlbums'}>
            <div className={'album'}>
                {albums.filter(item => item.userId == id).map(album => <Album key={album.id} album={album}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default AlbumsPage;