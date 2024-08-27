// svg
import PlaningScheme from "../../entities/PlaningScheme/PlaningScheme";
import planScheme1 from "../../assets/svg/apartment-scheme-type-1.svg";
import planScheme1Floor2 from "../../assets/svg/apartment-scheme-floor-1-type-1.svg";
import planScheme2 from "../../assets/svg/apartment-scheme-type-2.svg";
import planScheme2Floor2 from "../../assets/svg/apartment-scheme-floor-2-type-2.svg";

// styles
import "./Planing.css";

const scheme1 = [
  {
    title: "Кухня-столовая, совмещенная с прихожей",
    value: "28,6 м2",
  },
  {
    title: "Санузел",
    value: "2,8 м2",
  },
  {
    title: "Коридор",
    value: "2,6 м2",
  },
  {
    title: "Жилая комната",
    value: "8,3 м2",
  },
  {
    title: "Жилая комната",
    value: "11,1 м2",
  },
  {
    title: "Санузел",
    value: "4,6 м2",
  },
];

const scheme2 = [
  {
    title: "Прихожая",
    value: "4,2 м2",
  },
  {
    title: "Кухня",
    value: "9,0 м2",
  },
  {
    title: "Гостиная",
    value: "22,8 м2",
  },
  {
    title: "Подсобное помещение",
    value: "2,9 м2",
  },
  {
    title: "Санузел",
    value: "4,6 м2",
  },
  {
    title: "Коридор",
    value: "10,1 м2",
  },
  {
    title: "Санузел",
    value: "4,6 м2",
  },
  {
    title: "Жилая комната",
    value: "14,2 м2",
  },
  {
    title: "Жилая комната",
    value: "14,6 м2",
  },
];

export default function Planing() {
  return (
    <div className="planing marginTop widthStop">
      <div className="planing__wrap generalMargin">
        <h2 className="planing__title" id="planing">
          Планировка
        </h2>
        <div className="planing__items">
          <PlaningScheme
            totalArea={"63,8 м2 / 58 м2"}
            tableSchemes={scheme1}
            scheme={planScheme1}
            schemeFloor2={planScheme1Floor2}
            title={"Блокированный жилой дом (тип 1)"}
          />
          <PlaningScheme
            totalArea={"89,6 м2 / 87,0 м2"}
            tableSchemes={scheme2}
            scheme={planScheme2}
            schemeFloor2={planScheme2Floor2}
            title={"Блокированный жилой дом (тип 2)"}
          />
        </div>
      </div>
    </div>
  );
}
