import HomePage from "./HomePage"
import Tasks from "./Tasks"


const Main = (props) => {
    return (
        <div>
            <HomePage products={props.products} addToCart={props.addToCart} />
            <Tasks products={props.products} cartList={props.cartList} removeCart={props.removeCart} />
        </div>
    )

}

export default Main;