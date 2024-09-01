// styles
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer marginTop" id="contacts">
      <div className="footer__wrap widthStop generalMargin">
        <div className="footer__background">
          <div className="footer__info">
            <section className="footer__listWrap">
              <h3 className="footer__listTitle">Режим работы</h3>
              <ul className="footer__list">
                <li className="footer__listItem">ПН-ПТ с 9:00 до 19:00</li>
                <li className="footer__listItem">СБ-ВС с 9:00 до 18:00</li>
              </ul>
            </section>
            <section className="footer__listWrap">
              <h3 className="footer__listTitle">
                Отдел продаж и менеджер по ипотеке
              </h3>
              <ul className="footer__list">
                <li className="footer__listItem">
                  <a href="tel:+78005056485">+ 7 (800) 505-64-85</a>
                </li>
              </ul>
            </section>
            <section className="footer__listWrap">
              <h3 className="footer__listTitle">Адрес</h3>
              <ul className="footer__list">
                <li className="footer__listItem">
                  <a href="https://yandex.ru/maps/10995/krasnodar-krai/house/ulitsa_pobedy_10/Z08YcQRpQEcAQFpvfX5wdHthYw==/?ll=36.741783%2C45.216673&z=16.03">
                    Краснодарский край, ст. Тамань, проезд Калинина, 1-20
                  </a>
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
