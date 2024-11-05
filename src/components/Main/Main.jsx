import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import "./Main.css";
import "./MainMedia.css"

export const Main = () => {
  return (
    <div className="main">
      <div className="info-one">
        <img src="../../assets/coverhunt.png" alt="UU" />
        <h1 className="zagolovoc">Сообщество Urban University</h1>
        <h2 className="zagolovoc">Обучаем узкому куругу IT профессий</h2>
        <h3 className="zagolovoc">Познаем IT профессии через практику!</h3>
        <img
          className="miracle"
          src="https://optim.tildacdn.com/tild6132-3365-4265-a566-313933313934/-/format/webp/Desktop.png"
          alt=""
        />
        <ul className="spisoc">
          <li>
            <FontAwesomeIcon className="fonticon" icon={faHouse} />{" "}
            <span className="spisoc">Мы находимся:</span> Республика Татарстан, г.п. город
            Иннополис
          </li>
          <li>
            <FontAwesomeIcon className="fonticon" icon={faLocationDot} />{" "}
            <span className="spisoc">Адрес:</span> м.р-н Верхнеусло, ул Университетская, д. 5 ,
            помещ. 204
          </li>
          <li>
            <FontAwesomeIcon className="fonticon" icon={faTelegram} />{" "}
            <a className="spisoc" href="t.me/urbanuniver">Наш ТГ канал</a>
          </li>
        </ul>
        <div className="footer">
          <p>Государственная лицензия № Л035-01272-16/00679161</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
