import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../../categoryPage/Category.css"
import SliderPhone from "./SliderPhone"


const Phone = ({ productItems, addToCart, CartItem, shopItems }) => {
    return (
      <>
      <div className="main_phone d_flex">

      <ul>
              <li className="link_for_category">
                <Link  to='phone'>Смартфоны</Link>
              </li>
              
              <li className="link_for_category">
                <Link  to='/about'>Hоутбуки</Link>
              </li>
              <li className="link_for_category">
                <Link  to='/delivery'>Планшеты</Link>
              </li>
              <li className="link_for_category">
                <Link  to='/contact'>Смарт-часы</Link>
              </li>
              <li className="link_for_category">
                <Link  to='/contact'>Бытовая техника</Link>
              </li>
              <li className="link_for_category">
                <Link  to='/contact'>Игровые приставки</Link>
              </li>
              <li className="link_for_category">
                <Link  to='/contact'>Для красоты и здоровья</Link>
              </li>
              <li className="link_for_category">
                <Link  to='/contact'>Аксессуары</Link>
              </li>
            </ul>

            <SliderPhone/>

      </div>
       
      </>
    )
  }
  
  export default Phone