import './App.css';
import axios from 'axios';
import HomePage from './components/HomePage';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';
import ShopCart from './components/ShopCart';
import Main from './components/Main';
import AppRoutes from './routes/AppRoutes';

function App() {

  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([])
  const [doubleRender, setDoubleRender] = useState(true);


  const getProducts = () => {
    axios.get('https://fakestoreapi.com/products', {
      mode:"cors"
    })
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);

      })
      .catch((error) => {
        console.error(error);
      })

  }
  const addToCart = (params) => {

    let doubleProductCheck = cartList.find((element) => {
      return element.id === params.id
    })


    if (cartList.length === 0 || doubleProductCheck === undefined) {

      let newObjCartProduct = {
        category: params.category,
        description: params.description,
        id: params.id,
        price: params.price,
        title: params.title,
        amount: 1
      }

      setCartList([...cartList, newObjCartProduct])

      return

    } else {

      // console.log(doubleProductCheck);

      if (doubleProductCheck) {

        let find = cartList.find((elem) => {
          return elem.id === params.id
        })
        console.log(find);
        find.amount += 1

        setDoubleRender(!doubleRender)

        return
      }

    }
  }



  const removeCart = (id) => {
    const updatedProduct = cartList.filter(product => product.id !== id);
    setCartList(updatedProduct);
  }

  useEffect(() => {
    getProducts()
  }, []);



  return (
    <div className="App">
      <AppRoutes  products={products} cartList={cartList} removeCart={removeCart} addToCart={addToCart}/>
      {/* <Main products={products} cartList={cartList} removeCart={removeCart} addToCart={addToCart} /> */}

    </div>
  );


}

export default App;
