import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "../pages/Home";
import ProductDescription from "../pages/ProductDescription";
import Cart from "../pages/Cart";
import Category from "../components/Category";
import CategoriesPage from "../pages/CategoriesPage";
import ContactUs from "../pages/ContactUs";
import PaymentPage from "../pages/PaymentPage";



export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} >
            <Route index element={<Home />}></Route>
            <Route path="categories" element={<Category />}></Route>
            <Route path="/categories/:type" element={<CategoriesPage />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="products/:id" element={<ProductDescription />}></Route>
            <Route path="contactUs" element={<ContactUs />}></Route>
            <Route path="payment" element={<PaymentPage />}></Route>
        </Route>
    )
)