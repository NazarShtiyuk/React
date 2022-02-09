import {configureStore} from "@reduxjs/toolkit";

import carsReducer from "./car.slice";
import usersReducer from "./users.slice";
import postsReducer from "./posts.slice";
import commentsReducer from "./comments.slice";

const store = configureStore({
    reducer: {
        carsReducer,
        usersReducer,
        postsReducer,
        commentsReducer
    }
})

export default store