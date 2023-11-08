import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Quotes from "../components/Quotes";
import Album from "../components/Album";

const AppRoutes = (props) => {
return (
    <Routes>
        <Route path="/" element={<Main products={props.products} addToCart={props.addToCart} cartList={props.cartList} removeCart={props.removeCart} /> } />
        <Route path="/Quotes" element={<Quotes  /> } />  
        <Route path="/Album" element={<Album  /> } />   

    </Routes>
);
}

export default AppRoutes;