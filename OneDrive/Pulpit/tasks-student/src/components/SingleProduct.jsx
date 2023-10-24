import './SingleProduct.css'


const SingleProduct = (props) => {




    return (
        <tr className="productRow">
            <td className="tableData cat">{props.product.category}</td>
            <td className="tableData desc">{props.product.description}</td>
            <td className="tableData"><img src={props.product.image} className="imgProduct" alt="product" /></td>
            <td className="button">
                <button onClick={()=>{props.addToCart(props.product)}}>Dodaj do koszyka</button>
            </td>
        </tr>
    );
}

export default SingleProduct;