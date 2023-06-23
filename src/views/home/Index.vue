<template>
  <section class="mx-auto w-full font-krub bg-mydark" :dir="dir">
    <Nav />
    <div class="mt-28 flex flex-col">
      <Banner />
      <Offers />
      <Chalenge />
      <CoursSection />
      <About />
      <Video />
      <TeamSection />
      <Subscribe />
      <Footer />
    </div>
  </section>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Banner from "./hero/Banner.vue";
import Offers from "./offers/Offers.vue";
import Chalenge from "@/views/home/chalenges/Chalenge.vue";
import CoursSection from "./courses/CoursSection.vue";
import About from "./about-section/About.vue";
import Video from "./video-section/Video.vue";
import TeamSection from "./team/TeamSection.vue";
import Subscribe from "./subscribtion/Subscribe.vue";
import Footer from "./footer-section/Footer.vue";

export default {
  name: "HomeView",

  computed: {
    dir() {
      if (this.$i18n.locale === "en") {
        return "ltr";
      } else {
        return "rtl";
      }
    },
  },

  components: {
    Nav,
    Banner,
    Offers,
    Chalenge,
    CoursSection,
    About,
    Video,
    TeamSection,
    Subscribe,
    Footer,
  },
};
</script>
