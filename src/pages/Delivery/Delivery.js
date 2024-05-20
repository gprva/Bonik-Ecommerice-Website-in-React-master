import React from 'react';
import "./Delivery.css";
import deliveryIc from "../../imges/delivery/one.png";

const About = () => {
  return (
    <>
      <section >
      <div className="container">
        
        <h2 className='delivery_tit'>Условия доставки в регионы</h2>
        <h3 className="delivery_txt">Порядок оформления заказов в другие города:</h3>

        <div className="flex_df">
            <div className="delivery_card flex">
                <div className="delivery_ic"> 
                 <img src={deliveryIc} alt="" />
                </div>
                <p className="abaut_txt_card">Отправление транспортной компанией "СДЭК" по 100% предоплате.</p>
            </div>
            <div className="delivery_card flex">
                <div className="delivery_ic"> 
                 <img src={deliveryIc} alt="" />
                </div>
                <p className="abaut_txt_card">Отправление транспортной компанией "СДЭК" по 100% предоплате.</p>
            </div>
            <div className="delivery_card flex">
                <div className="delivery_ic"> 
                 <img src={deliveryIc} alt="" />
                </div>
                <p className="abaut_txt_card">Отправление транспортной компанией "СДЭК" по 100% предоплате.</p>
            </div>
            <div className="delivery_card flex">
                <div className="delivery_ic"> 
                 <img src={deliveryIc} alt="" />
                </div>
                <p className="abaut_txt_card">Отправление транспортной компанией "СДЭК" по 100% предоплате.</p>
            </div>
        </div>

        <p className="delivery_txt">Стоимость на товары с доставкой в регионы составляет +500 рублей к цене по городу Москва. Отправление заказа — через двое суток с даты оплаты. Доставка габаритных товаров (электросамокаты, ТВ) временно не осуществляется.</p>

      </div>
    </section>
    </>
  )
}

export default About
