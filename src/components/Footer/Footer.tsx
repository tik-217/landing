// styles
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer marginTop">
      <div className="footer__wrap widthStop generalMargin">
        <div className="footer__background">
          <div className="footer__info">
            <section className="footer__listWrap">
              <h3 className="footer__listTitle" id="contacts">
                Режим работы
              </h3>
              <ul className="footer__list">
                <li className="footer__listItem">ПН-ПТ с 9:00 до 19:00</li>
                <li className="footer__listItem">СБ-ВС выходной</li>
              </ul>
            </section>
            <section className="footer__listWrap">
              <h3 className="footer__listTitle">Контакты</h3>
              <ul className="footer__list">
                <li className="footer__listItem">
                  <a href="https://yandex.ru/maps/10995/krasnodar-krai/house/ulitsa_kalinina_20/Z08YcQRmSEUHQFpvfX5wdHRlYg==/?ll=36.739697%2C45.215036&z=15.23">
                    г. Темрюк, ул. Октябрьская, д. 110
                  </a>
                </li>
                <li className="footer__listItem">
                  <a href="tel:+79883401414">+ 7 (988) 340-14-14</a>
                </li>
              </ul>
            </section>
          </div>
          <h2 className="footer__companyName">ЖК «Центральный»</h2>
        </div>
      </div>
    </div>
  );
}
