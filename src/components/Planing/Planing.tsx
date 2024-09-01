// svg
import PlaningScheme from "../../entities/PlaningScheme/PlaningScheme";
import planScheme1 from "../../assets/svg/apartment-scheme-type-1.svg";
import planScheme1Floor2 from "../../assets/svg/apartment-scheme-floor-1-type-1.svg";

// ui
import { scheme1 } from "./Planing.ui";

// styles
import "./Planing.css";

export default function Planing() {
  return (
    <div className="planing marginTop widthStop" id="planing">
      <div className="planing__wrap generalMargin">
        <div className="planing__titleSection">
          <h2 className="planing__title">Планировка</h2>
          <p className="planing__subtitle">
            Блокированные жилые дома свободной планировки от 63,8 м2 до 100 м2
          </p>
        </div>
        <div className="planing__items">
          <PlaningScheme
            totalArea={"63,8 м2 / 58 м2"}
            tableSchemes={scheme1}
            scheme={planScheme1}
            schemeFloor2={planScheme1Floor2}
            title={"Блокированный жилой дом"}
          />
        </div>
      </div>
    </div>
  );
}
