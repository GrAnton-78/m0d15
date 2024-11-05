import React, { useState, useEffect, useRef } from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./Header.css";

export const Header = () => {
  const [isOpen, setOpen] = useState();
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  useEffect(() => {
    let startTouchX = 0;
    let endTouchX = 0;
    let startTouchY = 0;
    let endTouchY = 0;

    document.addEventListener("touchstart", (event) => {
      startTouchX = event.changedTouches[0].pageX;
      startTouchY = event.changedTouches[0].pageY;
    });

    document.addEventListener("touchend", (event) => {
      endTouchX = event.changedTouches[0].pageX;
      endTouchY = event.changedTouches[0].pageY;
      if (
        startTouchX < 100 &&
        Math.abs(endTouchY - startTouchY) < 40 &&
        endTouchX > startTouchX
      )
        setOpen(true);
      if (
        startTouchX < 240 &&
        Math.abs(endTouchY - startTouchY) < 40 &&
        endTouchX < startTouchX
      )
        setOpen(false);
    });
  }, []);

  return (
    <header className="header">
      <div className="logo-text"><a href="../../assets/logo-text-black.png"></a>AVGR</div>
      {/* <img className="logo-text" src="../../assets/logo-text-black.png" alt="Logo" /> */}
      <nav className={`header__nav ${isOpen ? "active" : ""}`} ref={menuRef}>
        <ul className="header__nav-list">
          <li className="header__nav-item">Главная</li>
          <li className="header__nav-item">О Нас</li>
          <li className="header__nav-item">Соцсети</li>
          <li className="header__nav-item">Контакты</li>
          <li className="header__nav-item">Войти</li>
        </ul>
      </nav>
      <MenuButton isActive={isOpen} onClick={() => setOpen(!isOpen)} />
    </header>
  );
};
