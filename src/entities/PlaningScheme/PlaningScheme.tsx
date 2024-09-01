// react
import { useContext } from "react";

// components
import { ModalOpenContext } from "../../components/App/App";

// swiper
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

// entities
import CallbackModal from "../../entities/CallbackModal/CallbackModal";

// images
import { MutableRefObject, useRef, useState } from "react";
import arrow from "../../assets/svg/arrow.svg";

// styles
import "./PlaningScheme.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface ITableSchemes {
  title: string;
  value: string;
}

interface IPlaningScheme {
  totalArea: string;
  tableSchemes: ITableSchemes[];
  title: string;
  scheme: string;
  schemeFloor2: string;
}

export default function PlaningScheme({
  totalArea,
  tableSchemes,
  title,
  scheme,
  schemeFloor2,
}: IPlaningScheme) {
  const swiper: MutableRefObject<SwiperRef | null> = useRef(null);
  const [floor, setFloor] = useState(true);

  const isModal = useContext(ModalOpenContext);

  return (
    <div className="planing__item">
      <div className="planing__content planing__schemeSlider1">
        <Swiper
          loop
          centeredSlides={false}
          ref={swiper}
          className="swiper-schema1 planing__scheme swiper"
        >
          <SwiperSlide>
            <img
              src={scheme}
              alt="schema_type1"
              className="planing__schemeFloorFirst"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={schemeFloor2}
              alt="schema_type2"
              className="planing__schemeFloorSecond"
            />
          </SwiperSlide>
        </Swiper>

        <section className="planing__info">
          <div className="planing__table">
            <span className="planing__floorSchema1">
              {floor ? "1-ый этаж" : "2-ой этаж"}
            </span>
            <div className="planing__btns">
              <div className="planing__btnsWrap">
                <button
                  className="planing__btnNext planing__btnNextSheme1"
                  onClick={() => {
                    setFloor(!floor);
                    swiper.current && swiper.current.swiper.slideNext(0);
                  }}
                >
                  <span className="planing__btnNextTextSheme1">
                    {floor ? "На второй этаж" : "На первый этаж"}
                  </span>
                  <img src={arrow} alt="arrow" />
                </button>
                <button
                  className="planing__btnCallback"
                  onClick={() => isModal.handleChangeModal()}
                >
                  Заказать обратный звонок
                </button>
              </div>
            </div>
          </div>
          <CallbackModal />
        </section>
      </div>
    </div>
  );
}
