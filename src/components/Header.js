import React from 'react'
import moneyFormat from '../helpers'

function Header({handleClick ,basketIcon ,total, money}) {
  return (
    <div>
        <ion-icon onClick={handleClick} className="basketIcon" name={basketIcon ? "close-outline": "basket-outline"}></ion-icon>
      {
        total > 0 && money - total !== 0 &&(
        <div className='header'>Xərcləyəcək <span>${moneyFormat(money - total)} </span> qaldi 
        </div>  
        )}  
        {total === 0 && (
          <div className='header'>Xərcləmək üçün <span> ${moneyFormat(money)} </span> var
          </div>
        )}
        {money - total === 0 && (
          <div className='header'>Pulunuz bitti
          </div>
        )}
        <style jsx>
        {`
          .header{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgb(2,0,36);
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
            color: #FFF;
            font-size: 17px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            letter-spacing: 1px;
          }
          .header span{
            padding: 0 5px;
            font-weight: 700;
          }
          ion-icon{
            position: fixed;
            right: 60px;
            top: 18px;
            color: #FFF;
            z-index: 2;
            font-size: 30px;
            cursor: pointer;
          }
        `}
        </style>
    </div>
  )
}
export default Header