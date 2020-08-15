import Vue from "vue";
import {
  Swiper as SwiperClass,
  Navigation,
  Pagination,
  Mousewheel,
  Autoplay
} from "swiper/core";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper-bundle.css";

SwiperClass.use([Navigation, Pagination, Mousewheel, Autoplay]);

Vue.use(getAwesomeSwiper(SwiperClass));
