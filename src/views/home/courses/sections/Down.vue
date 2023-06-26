<template>
  <swiper
    :slides-per-view="1"
    :space-between="10"
    :breakpoints="{ 600: { slidesPerView: 4 } }"
    :loop="false"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="swiper"
  >
    <swiper-slide
      v-for="n in 5"
      :key="n"
      class="test"
      :class="{ test_2: true }"
    >
      <CardComponent />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Navigation, Pagination } from "swiper";
import CardComponent from "./cards/Card.vue";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardComponent,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
}
</style>
