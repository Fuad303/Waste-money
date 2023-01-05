import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Basket from './components/Basket';
import React, { useEffect, useState} from 'react';
import products from './product.json'

function App() {
  
  const [money, setMoney] = useState(100000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [basketIcon, setBasketIcon] = useState(false)
  console.log(setMoney)
  
  function toggleBasket(){
    setBasketIcon(prevIcon => !prevIcon)
  }

  const productItem = products.map((product) =>{
    return <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
  })
  const resetBasket = () =>{
    setBasket([])
  }
  useEffect(()=>{
    setTotal(basket.reduce((acc, item) =>{
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
     }, 0))
      
  }, [basket])
  return (
    <div>
      <Header handleClick={toggleBasket} basketIcon={basketIcon} total={total} money={money}/>
      <div className='container'>
        {productItem}
      </div>
      <Basket basketIcon={basketIcon} handleClick={resetBasket} total={total} products={products} basket={basket}/>
    </div>
  );
}

export default App;
