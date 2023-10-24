import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Quotes from "../components/Quotes";

const AppRoutes = (props) => {
return (
    <Routes>
        <Route path="/components/Main" element={<Main products={props.products} addToCart={props.addToCart} cartList={props.cartList} removeCart={props.removeCart} /> } />
        <Route path="/components/Quotes" element={<Quotes  /> } />   

    </Routes>
);
}

export default AppRoutes;