import React from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { cardItems } from "../constant/data";
import PopularCard from "./PopularCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PopularProperties = () => {
  return (
    <section className="section">
      <div className="container">
        
        <div className="lg:flex lg:justify-between lg:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">Popular Properties</h2>
            <p className="pt-4 pb-7 text-gray-600 max-w-[500px] w-full">
              Lorem ipsum dolor sit amet consectetur. Faucibus tristique auctor mauris velit varius. Eu duis viverra.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-5 mb-5">
            <button className="popular-swiper-button-prev left-right">
              <IoChevronBack className="text-2xl" />
            </button>
            <button className="popular-swiper-button-next left-right">
              <IoChevronForward className="text-2xl" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".popular-swiper-button-next",
            prevEl: ".popular-swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            575: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {cardItems.map((item, index) => (
            <SwiperSlide key={index}>
              <PopularCard
                imgURL={item.imgURL}
                price={item.price}
                name={item.name}
                location={item.location}
                bed={item.bed}
                bath={item.bath}
                area={item.area}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularProperties;