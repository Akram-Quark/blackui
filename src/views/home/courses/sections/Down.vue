<template lang="">
  <div class="w-full">
    <div
      class="sm:grid sm:grid-cols-2 lg:flex lg:justify-center lg:mx-auto lg:my-2"
    >
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
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
};
</script>
