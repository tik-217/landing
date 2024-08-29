// svg
import PlaningScheme from "../../entities/PlaningScheme/PlaningScheme";
import planScheme1 from "../../assets/svg/apartment-scheme-type-1.svg";
import planScheme1Floor2 from "../../assets/svg/apartment-scheme-floor-1-type-1.svg";
import planScheme2 from "../../assets/svg/apartment-scheme-type-2.svg";
import planScheme2Floor2 from "../../assets/svg/apartment-scheme-floor-2-type-2.svg";

// ui
import { scheme1, scheme2 } from "./Planing.ui";

// styles
import "./Planing.css";

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
