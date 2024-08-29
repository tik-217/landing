// entities
import Callback from "../../entities/Callback/Callback";

// images
import image147 from "../../assets/images/1_47-image.533a169b1733d7df03a2_5_11zon_5_11zon.webp";
import image143 from "../../assets/images/1_43-image.11ae9a7b7b38d4a51145_1_11zon_1_11zon.webp";
import image144 from "../../assets/images/1_44-image.b490d5f048fad3f4c558_2_11zon_2_11zon.webp";

// styles
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="aboutUs marginTop widthStop">
      <div className="aboutUs__wrap generalMargin">
        <div className="aboutUs__descripSection">
          <h2 className="aboutUs__title" id="aboutUs">
            О комплексе
          </h2>
          <p className="aboutUs__descrip">
            Жилой комплекс «Центральный» – это недвижимость для жизни, отпуска,
            инвестиций и просто для счастья.
          </p>
        </div>
        <div className="aboutUs__cards">
          <div className="bigCard borders">
            <img src={image147} className="bigCard__photo" alt="1_41" />
          </div>
          <div className="smallCards">
            <div className="smallCards__card">
              <div className="smallCards__descripSection">
                <p className="smallCards__descrip">
                  Комплекс расположен в живописном и экологически чистом месте
                  ст. Тамань. При этом в этом районе хорошо развита социальна и
                  торговая инфраструктура.
                </p>
                <p className="smallCards__descrip">
                  Неподалеку от жилого комплекса расположен торговый центр,
                  рынок, а также школа и детский сад.
                </p>
              </div>
              <div className="smallCards__photo borders">
                <img src={image143} alt="1_43" className="smallCards__image" />
              </div>
            </div>
            <div className="smallCards__card">
              <div className="smallCards__descripSection">
                <p className="smallCards__descrip">
                  Благоустроенный двор, в котором комфортно находиться в любое
                  время суток. Отдельное парковочное место у каждого автомобиля.
                </p>
                <p className="smallCards__descrip">
                  Озеленение формируется кустарниками, деревьями и цветочными
                  клумбами.
                </p>
              </div>
              <div className="smallCards__photo borders">
                <img src={image144} alt="1_44" className="smallCards__image" />
              </div>
            </div>
          </div>
        </div>

        <Callback
          title={"Узнать о комплексе подробнее"}
          description={
            "Подробности по телефону о том, когда будет запущена стройка комплекса, какие сроки и тд."
          }
        />
      </div>
    </div>
  );
}
