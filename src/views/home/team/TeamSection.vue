<template>
  <div :class="[$i18n.locale == 'ar' ? 'font-cairo' : '']">
    <div class="">
      <h1 class="text-white text-5xl 2xl:text-6xl font-bold text-center">
        {{ $t("message.team.title.what") }}
      </h1>
      <h5 class="font-medium text-xl text-mypurple text-center">
        {{ $t("message.team.title.users") }}
      </h5>
    </div>
    <div class="grid md:flex w-full justify-center">
      <div v-for="(path, index) of imgs" :key="index">
        <Card :img="path" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./cards/Card.vue";

export default {
  data() {
    return {
      imgs: ["avatar1.jpg", "avatar2.jpg", "avatar3.jpg"],
    };
  },

  components: {
    Card,
  },
};
</script>
