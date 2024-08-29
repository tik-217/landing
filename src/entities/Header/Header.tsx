// react
import { useEffect, useState } from "react";

// styles
import "./Header.css";

export default function Header() {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function getScrollInfo() {
      if (window.scrollY === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    }

    window.addEventListener("scroll", () => getScrollInfo());

    return () => window.removeEventListener("scroll", () => getScrollInfo());
  }, []);

  return (
    <header className="header">
      <div
        className={`header__background ${
          !mobMenuOpen && isScrolled
            ? "header__background_scrolled"
            : "widthStop"
        }`}
      >
        <div
          className={`header__wrap ${
            !mobMenuOpen && isScrolled ? "header__wrap_scrolled" : ""
          } ${mobMenuOpen ? "open" : ""}`}
        >
          <div className="header__titleWrap">
            <h1 className="header__title">
              <a href="#main" onClick={() => setMobMenuOpen(false)}>
                ЖК «Центральный»
              </a>
            </h1>
          </div>
          <nav className="header__navigation">
            <ul className="header__list">
              <li
                className="header__item"
                onClick={() => setMobMenuOpen(false)}
              >
                <a href="#aboutUs">О комплексе</a>
              </li>
              <li
                className="header__item"
                onClick={() => setMobMenuOpen(false)}
              >
                <a href="#planing">Планировка</a>
              </li>
              <li
                className="header__item"
                onClick={() => setMobMenuOpen(false)}
              >
                <a href="#constrProgress">Ход строительства</a>
              </li>
              <li
                className="header__item"
                onClick={() => setMobMenuOpen(false)}
              >
                <a href="#payments">Способы покупки</a>
              </li>
              <li
                className="header__item"
                onClick={() => setMobMenuOpen(false)}
              >
                <a href="#contacts">Контакты</a>
              </li>
            </ul>
          </nav>
          <div className={`header__contacts ${mobMenuOpen ? "active" : ""}`}>
            <a href="tel:+79883401414">+ 7 (988) 340-14-14</a>
          </div>
          <div
            className={`toggle-menu ${mobMenuOpen ? "active" : ""}`}
            onClick={() => setMobMenuOpen(!mobMenuOpen)}
          >
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
    </header>
  );
}
