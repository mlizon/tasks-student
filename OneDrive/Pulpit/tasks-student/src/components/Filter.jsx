import { useEffect, useState } from "react";
import "./Filter.css"

const Filter = (props) => {
    const [selectValue, setSelectValue] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const filterHandle = (e) => {
        // setFilteredProducts(e.target.value)

        // const selectValue = e.target.value
        let filteredArray = []

        if (selectValue === 'man') {
            filteredArray = props.products.filter((product) => {
                return (product.category === 'men\'s clothing')

            })
        }
        if (selectValue === 'woman') {
            filteredArray = props.products.filter((product) => {
                return (product.category === 'women\'s clothing')
            })
        }

        if (selectValue === 'jewellery') {
            filteredArray = props.products.filter((product) => {
                return (product.category === 'jewelery')
            })
        }

        if (selectValue === 'electronics') {
            filteredArray = props.products.filter((product) => {
                return (product.category === 'electronics')
            })
        }


        setFilteredProducts(filteredArray)
    }



    useEffect(() => {
        filterHandle(selectValue)
    }, [selectValue]);

    return (
        <div className="filterBox">
            <label htmlFor="productsCategories">Choose a category</label>

            <select name="productsCategories" id="productsCategories" onChange={(e) => {
                setSelectValue(e.target.value)
            }}>
                <option value="man">men's clothing</option>
                <option value="woman">women's clothing</option>
                <option value="jewellery">jewelery</option>
                <option value="electronics">electronics</option>
            </select>

            <div className="filterList">
                {filteredProducts.map((product) => {
                    return (
                        <div className="filterImage" key={product.id}>
                            <img src={product.image} alt="product" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Filter;