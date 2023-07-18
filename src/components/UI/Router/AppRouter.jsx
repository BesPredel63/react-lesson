import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Posts from "../../../pages/Posts";
import Users from "../../../pages/Users";
import Error from "../../../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/posts" element={<Posts />} />
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