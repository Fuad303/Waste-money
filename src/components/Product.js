import React from 'react'
import moneyFormat from '../helpers'
function Product({money, total, product, basket, setBasket}) {
    
    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () =>{
        const checkBasket = basket.find(item => item.id === product.id)
        // Mehsul elave olunub
        if(checkBasket){
            checkBasket.amount += 1
            setBasket([...basket.filter(item=>item.id !== product.id), checkBasket])
        }   
        else{
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }
    const removeBasket = ()=>{
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item=>item.id !== product.id)
        currentBasket.amount -= 1
        if(currentBasket.amount === 0){
            setBasket([...basketWithoutCurrent])
        }
        else{
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }
    
    return (
    <div className='product'>
      <div className='product-img'><img src={product.image}/></div>
      <div className='product-title'><h3>{product.title}</h3></div>
      <style jsx>{
        `.product{
            padding: 10px;
            background: #fff;
            border: 1px solid #ddd;
        }`}</style>
      <div className='product-price'><p>${moneyFormat(product.price)}</p></div>
      <div className='actions'>
        <button className='sell-btn' disabled={!basketItem} onClick={removeBasket}>Sat</button>
        <span className='amount'>{basketItem && basketItem.amount || 0}</span>
        <button className='buy-btn' disabled={total + product.price > money} onClick={addBasket}>Al</button>
      </div>
      <style jsx>
        {`
            .product{
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 10px;
            }
            .product img{
                max-width: 280px;
                max-height: 280px;
                min-height: 280px;
                height: 100%;
                object-fit: cover;
            }
            .product-img{
                padding: 10px 5px;
                display: flex;
                justify-content: center;
                border-bottom: 1px solid #ccc;
                width: 100%;
            }
            .product-title{
                font-size: 15px;
                text-align: left;
                width: 100%;
                height: 26px;
                margin-top: 7px;
            }
            .product-price{
                font-size: 18px;
                font-weight: 700;
                text-align: left;
                width: 100%;
            }
            .buy-btn,
            .sell-btn{
                padding: 7px 35px;
                margin: 15px 20px 5px 20px;
                cursor: pointer;
                color: #FFF;
                border: none;
                border-radius: 6px;
            }
            .buy-btn:disabled,
            .sell-btn:disabled{
                opacity: 0.5;
                cursor: not-allowed;
            }
            .buy-btn{
                background-color: #4BB543;
            }
            .sell-btn{
                background-color: #ed3237;
            }
        `}
      </style>
    </div>
  )
}
export default Product
