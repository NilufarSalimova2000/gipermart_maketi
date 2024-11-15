import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/main-layout";
import { Home } from "../pages/home";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}