<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="10"
    :breakpoints="{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 4 } }"
    :loop="false"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="swiper"
  >
    <swiper-slide v-for="n in 10" :key="n">
      <CardComponent />
    </swiper-slide>
    <div
      dir="ltr"
      class="w-full flex items-center justify-around text-white text-xl cursor-pointer"
    >
      <ArrowLeftIcon @click="locale_swiper.slidePrev()" />

      <ArrowRightIcon @click="locale_swiper.slideNext()" />
    </div>
  </swiper>
</template>

<script>
import { A11y, Navigation } from "swiper";
import CardComponent from "./cards/Card.vue";
import { Swiper, SwiperSlide } from "swiper-vue2";
import { ArrowRightIcon, ArrowLeftIcon } from "@vue-hero-icons/outline";

// Import Swiper styles
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      locale_swiper: null,
    };
  },
  setup() {
    const onSlideChange = () => {};
    return {
      onSlideChange,
      modules: [Navigation, A11y],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    CardComponent,
    ArrowRightIcon,
    ArrowLeftIcon,
  },
  methods: {
    onSwiper(swiper) {
      this.locale_swiper = swiper;
    },
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
}
</style>
