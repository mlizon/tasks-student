import Filter from './Filter';
import ShopCart from './ShopCart';
import './Tasks.css'

const Tasks = (props) => {


    return (
        <div className="tasks">
        

            <div className="filter-task">
            

                <div className="solution-filter">
                    <Filter products={props.products}/>

                </div>
                <div className="shopCart">
                    <ShopCart cartList={props.cartList} removeCart={props.removeCart}/>
                </div>
            </div>
        </div>
    );
}

export default Tasks;