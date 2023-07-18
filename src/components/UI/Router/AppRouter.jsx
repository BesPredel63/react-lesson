import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Posts from "../../../pages/Posts";
import Users from "../../../pages/Users";
import Error from "../../../pages/Error";
import PostIdPage from "../../../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route index path="/posts/:id" element={<PostIdPage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/error" element={<Error />} />
            <Route
                path='*'
                element={<Navigate to='/error' replace />}
            />
        </Routes>
    );
};

export default AppRouter;