import './App.css';
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import UsersPage from "./pages/UsersPage/UsersPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Menu/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;