// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// images
import image1 from "../../assets/images/PHOTO-2024-08-23-17-49-08.jpg";
import image2 from "../../assets/images/PHOTO-2024-08-23-17-49-08 2.jpg";
import image4 from "../../assets/images/PHOTO-2024-08-23-17-49-08 4.jpg";
import image5 from "../../assets/images/PHOTO-2024-08-23-17-49-08 5.jpg";
import image6 from "../../assets/images/PHOTO-2024-08-23-17-49-08 6.jpg";
import image7 from "../../assets/images/PHOTO-2024-08-23-17-49-08 7.jpg";

// styles
import "./ConstrProgress.css";
import "swiper/css";
import "swiper/css/navigation";

export default function ConstrProgress() {
  return (
    <div className="constrProgress widthStop">
      <div className="constrProgress__wrap marginTop generalMargin">
        <h2 className="constrProgress__title" id="constrProgress">
          Ход строительства
        </h2>
        <div className="constrProgress__slider">
          <Swiper
            modules={[Navigation]}
            autoHeight
            navigation
            loop
            centeredSlides={true}
          >
            <SwiperSlide>
              <div className="constrProgress__sliderItem borders">
                <img src={image1} alt="image1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="constrProgress__sliderItem borders">
                <img src={image4} alt="image4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="constrProgress__sliderItem borders">
                <img src={image2} alt="image2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="constrProgress__sliderItem borders">
                <img src={image5} alt="image5" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="constrProgress__sliderItem borders">
                <img src={image7} alt="image7" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="constrProgress__sliderItem borders">
                <img src={image6} alt="image6" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
