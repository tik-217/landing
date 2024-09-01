// entities
import Callback from "../../entities/Callback/Callback";

// styles
import "./Payments.css";

export default function Payments() {
  return (
    <div className="payments widthStop" id="payments">
      <div className="payments__wrap marginTop generalMargin">
        <h3 className="payments__title">Способы покупки</h3>
        <div className="payments__content">
          <section className="payments__item">
            <h3 className="payments__itemTitle">Ипотека</h3>
            <ul className="payments__itemList">
              <li>Семейная ипотека;</li>
              <li>Остальные виды.</li>
            </ul>
          </section>
          <section className="payments__item">
            <h3 className="payments__itemTitle">Рассрочка 0%</h3>
            <ul className="payments__itemList">
              <li>
                Рассрочка на год при первоначальном взносе 50% от стоимости
                объекта;
              </li>
              <li>Без переплаты.</li>
            </ul>
          </section>
        </div>
        <Callback
          title={"Подробности о способе оплаты"}
          description={
            "Наши консультанты помогут вам с возникшими вопросами, чтобы вы могли совершить покупку мечты."
          }
        />
      </div>
    </div>
  );
}
