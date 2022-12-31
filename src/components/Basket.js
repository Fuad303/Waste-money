import React from 'react'
import BasketItem from './BasketItem'

export default function Basket({basketIcon ,handleClick, total, basket, products}) {
  return (
    
    <div className={basketIcon ? 'basket-container container' : 'basket-container-hidden container'}>
      <ul>
            {basket.map(item => (
            <BasketItem item={item} product={products.find(p=>p.id === item.id)}/>
          ))}
      </ul>
      {
        total > 0 ? <div>Ümumi: ${total}</div> : <div>Səbətiniz boşdur</div>
      }
      {total > 0 ? <button onClick={handleClick}>Səbəti sıfırla</button> : <div></div>}
      <style jsx>{`
        .basket-container-hidden{
          display: none;
        }
        .basket-container{
          position: fixed;
          top: 0;
          right: 0;
          background: white;
          padding: 10px;
          box-shadow: 2px 5px 20px 20px rgba(0, 0, 0, 0.2);
          border-radius: 7px;
        }
        .basket-container button{
          background-color: #ed3237;
          border: none;
          border-radius: 6px;
          padding: 7px 10px;
          color: #FFF;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
