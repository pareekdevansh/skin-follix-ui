import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routes.map(({ path, component: Component, visibleInNav }, index) => {   return visibleInNav ? <Route key={index} path={path} element={<Component />} />
                    : ''})}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRoutes;
