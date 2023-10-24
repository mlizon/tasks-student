import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import './HomePage.css'
import ShopCart from "./ShopCart";

const HomePage = (props) => {
    
const [search, setSearch] = useState('')
const [searchList, setSearchList] = useState([])

    const searchBar = () => {
        let filter = props.products.filter((product)=>{
            return(product.title).toLowerCase().includes(search)

        })
        setSearchList(filter)

    }

useEffect(()=>{
    searchBar()

}, [search])

useEffect(()=>{
    setSearchList(props.products)
}, [props.products])

    return (
        
        <div className="homePage">
            <div className="searchbar">
                <p>Znajdź produkt</p>
                <input type="text" className="searchbar" placeholder="Znajdź produkt..." onChange={(e) => {
                    setSearch(e.target.value)
                }} />

            </div>
           
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>category</th>
                        <th>description</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {searchList.map((product) => {
                        return <SingleProduct product={product} key={product.id} addToCart={props.addToCart} />
                       
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default HomePage;