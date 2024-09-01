// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// images
import image1 from "../../assets/images/PHOTO-2024-08-23-17-49-08.4.webp";
import image2 from "../../assets/images/PHOTO-2024-08-23-17-49-08 2.7.webp";
import image4 from "../../assets/images/PHOTO-2024-08-23-17-49-08 4.8.webp";
import image5 from "../../assets/images/PHOTO-2024-08-23-17-49-08 5.7.webp";
import image6 from "../../assets/images/PHOTO-2024-08-23-17-49-08 6.8.webp";
import image7 from "../../assets/images/PHOTO-2024-08-23-17-49-08 7.6.webp";

// styles
import "./ConstrProgress.css";
import "swiper/css";
import "swiper/css/navigation";

export default function ConstrProgress() {
  return (
    <div className="constrProgress" id="constrProgress">
      <div className="constrProgress__wrap marginTop">
        <h2 className="constrProgress__title">Ход строительства</h2>
        <div className="constrProgress__slider">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={2}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation
            loop
            autoHeight
            breakpoints={{
              0: {
                spaceBetween: 50,
                slidesPerView: 1,
              },
              900: {
                spaceBetween: 80,
              },
              1100: {
                spaceBetween: 100,
              },
              1101: {
                spaceBetween: 130,
              },
            }}
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
