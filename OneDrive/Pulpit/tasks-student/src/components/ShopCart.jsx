

const ShopCart = (props) => {

    return (
        <div className="shopCart">
            <h2>Shop Cart</h2>
            {props.cartList.length === 0 ? <p>Koszyk jest pusty</p> : (
                <ul className="cart-list">
                    {props.cartList.map((product) => {
                        return (
                            <li key={product.id}>
                                <span>{product.title}</span>
                                <span>{product.price} zł</span>
                                <span>{product.amount}</span>
                                <button onClick={()=>{props.removeCart(product.id)}}>Usuń</button>
                            </li>
                        )

                    })}
                </ul>
            )}
        </div>
    )
}





export default ShopCart
