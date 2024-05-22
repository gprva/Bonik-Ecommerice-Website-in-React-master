// import React from "react"

// const Categories = () => {
//   const data = [
//     {
//       cateImg: "./images/category/phon.png",
//       cateName: "Смартфоны",
//     },
//     {
//       cateImg: "./images/category/computer.png",
//       cateName: "Компьютеры и ноутбуки",
//     },
//     {
//       cateImg: "./images/category/planshet.png",
//       cateName: "Планшеты",
//     },
//     {
//       cateImg: "./images/category/chasy.png",
//       cateName: "Смарт-часы",
//     },
//     {
//       cateImg: "./images/category/byt.png",
//       cateName: "Бытовая техника",
//     },
//     {
//       cateImg: "./images/category/pristavka.png",
//       cateName: "Игровые приставки",
//     },
//     {
//       cateImg: "./images/category/krasotka.png",
//       cateName: "Для красоты и здоровья",
//     },
//     {
//       cateImg: "./images/category/aksesyar.png",
//       cateName: "Аксессуары",
//     },
//   ]

//   return (
//     <>
//       <div className='category'>
//         {data.map((value, index) => {
//           return (
//             <div className='box f_flex' key={index}>
//               <img src={value.cateImg} alt='' />
//               <span>{value.cateName}</span>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default Categories



import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container'>
         

          <div>
            <ul>
              <li>
                <Link className="link_for_category" to='phone'>Смартфоны</Link>
              </li>
              <li>
                <Link className="link_for_category" to='/about'> Hоутбуки</Link>
              </li>
              <li>
                <Link className="link_for_category" to='/delivery'>Планшеты</Link>
              </li>
              <li>
                <Link className="link_for_category" to='/contact'>Смарт-часы</Link>
              </li>
              <li>
                <Link className="link_for_category" to='/contact'>Бытовая техника</Link>
              </li>
              <li>
                <Link className="link_for_category" to='/contact'>Игровые приставки</Link>
              </li>
              <li>
                <Link className="link_for_category" to='/contact'>Для красоты и здоровья</Link>
              </li>
              <li>
                <Link className="link_for_category" to='/contact'>Аксессуары</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
