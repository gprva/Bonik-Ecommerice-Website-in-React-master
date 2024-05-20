import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/phon.png",
      cateName: "Смартфоны",
    },
    {
      cateImg: "./images/category/computer.png",
      cateName: "Компьютеры и ноутбуки",
    },
    {
      cateImg: "./images/category/planshet.png",
      cateName: "Планшеты",
    },
    {
      cateImg: "./images/category/chasy.png",
      cateName: "Смарт-часы",
    },
    {
      cateImg: "./images/category/byt.png",
      cateName: "Бытовая техника",
    },
    {
      cateImg: "./images/category/pristavka.png",
      cateName: "Игровые приставки",
    },
    {
      cateImg: "./images/category/krasotka.png",
      cateName: "Для красоты и здоровья",
    },
    {
      cateImg: "./images/category/aksesyar.png",
      cateName: "Аксессуары",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='picture' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
