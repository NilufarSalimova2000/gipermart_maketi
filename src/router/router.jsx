import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/main-layout";
import { Home } from "../pages/home";
import { ProductDetail } from "../pages/product-detail";
import { SearchPage } from "../pages/search-page";
import { SingleCatalog } from "../pages/single-catalog";
import { Cart } from "../pages/cart";
import { ProfileLayout } from "../pages/profile-layout";
import { UserInfo } from "../pages/user-info";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="product-detail/:id" element={<ProductDetail />}></Route>
                <Route path="search" element={<SearchPage />} />
                <Route path="catalog/:name" element={<SingleCatalog />} />
                <Route path="cart" element={<Cart />} />
                <Route path="profile" element={<ProfileLayout />}>
                    <Route index element={<UserInfo />} />
                    <Route path="orders" element={<h2>Мои заказы</h2>} />
                    <Route path="address" element={<h2>Адреса</h2>} />
                    <Route path="saved" element={<h2>Избранные товары</h2>} />
                    <Route path="notifications" element={<h2>Уведомления</h2>} />
                </Route>
            </Route>
        </Routes>
    )
}