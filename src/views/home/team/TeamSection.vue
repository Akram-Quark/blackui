<template>
  <div class="md:my-8 md:py-0 my-16">
    <div class="my-10">
      <h1 class="text-white text-5xl font-bold text-center">What</h1>
      <h5 class="font-medium text-xl text-mypurple text-center">users think</h5>
    </div>
    <div class="grid md:flex w-full justify-center">
      <div v-for="(img, index) of imgs" :key="index">
        <Card :img="img" />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./cards/Card.vue";
export default {
  data() {
    return {
      imgs: [
        "@/assets/images/avatar1.jpg",
        "@/assets/images/avatar2.jpg",
        "@/assets/images/avatar3.jpg",
      ],
    };
  },
  components: {
    Card,
  },
};
</script>
<style lang=""></style>
