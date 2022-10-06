import React from "react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const usenavegate = useNavigate();

  return (
    <nav>
    <div className="nav">
        <img src="img/logo.svg" alt="" />
      <div className="inputtt">
        <button className="asos">Каталог</button>
        <input type="text"  placeholder="Поиск" />
      </div>
      <div className="bten">
        <button onClick={() => usenavegate("/")}>Акции</button>
        <button onClick={() => usenavegate("/Доставка")}>Доставка</button>
        <button onClick={() => usenavegate("/Контакты")}>Контакты</button>
        <button onClick={() => usenavegate("/Asosiy")}>Галерея</button>
        <button onClick={() => usenavegate("/Отзывы")}>Отзывы</button>
        <button onClick={() => usenavegate("/Доставка")}><img src="img/sumka.svg" alt="" /></button>
      </div>
    </div>
    <div className="navbar">
        <button onClick={()=> usenavegate('/Birinchi')}>Латексные шары</button>
        <button onClick={()=> usenavegate('/Ikkinchi')}>Фольгированые шары</button>
        <button onClick={()=> usenavegate('/Uchinchi')}>Цифры</button>
        <button onClick={()=> usenavegate('/Tortinchi')}>3D Сферы</button>
        <button onClick={()=> usenavegate('/Beshinchi')}>Хромовые шары</button>
        <div className="nomer">
          <a href="+7 861 204 24 46">+7 861 204 24 46</a>
          <a href="https://www.instagram.com"><img src="img/instagram.svg" alt="" /></a>
          <a href="https://web.telegram.org/k/"><img src="img/telegram.svg" alt="" /></a>
          <p>Режим работы <br />Круглосуточно</p>
        </div>
    </div>
    </nav>
  )
};
