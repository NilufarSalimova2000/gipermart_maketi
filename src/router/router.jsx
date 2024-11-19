import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/main-layout";
import { Home } from "../pages/home";
import { ProductDetail } from "../pages/product-detail";
import { SearchPage } from "../pages/search-page";
import { SingleCatalog } from "../pages/single-catalog";
import { Cart } from "../pages/cart";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="product-detail/:id" element={<ProductDetail />}></Route>
                <Route path="search" element={<SearchPage />} />
                <Route path="catalog/:name" element={<SingleCatalog />} />
                <Route path="cart" element={<Cart />} />
            </Route>
        </Routes>
    )
}