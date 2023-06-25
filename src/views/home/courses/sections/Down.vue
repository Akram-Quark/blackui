<template lang="">
  <div class="w-full">
    <div
      class="sm:grid sm:grid-cols-2 lg:flex lg:justify-center lg:mx-auto lg:my-2"
    >
      <div v-for="(card, idx) in cards" :key="idx">
        <CardComponent />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "./cards/Card.vue";

export default {
  name: "Down",
  components: {
    CardComponent,
  },

  data() {
    return {
      cards: [1, 2, 3, 4],
    };
  },
};
</script>
