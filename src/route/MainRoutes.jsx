import React from "react";
import { useRoutes } from "react-router-dom";

import { Home } from '../pages/Home';
import { Orders } from '../pages/Orders';
import { Profile } from '../pages/Profile';

import { RequireAuth } from '../helpers/RequireAuth';

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/orders', element: <RequireAuth><Orders /></RequireAuth> },
        { path: '/profile', element: <RequireAuth><Profile /></RequireAuth> },
    ]);
}