<template lang="">
  <div class="w-full">
    <div class="flex justify-center mx-auto my-2">
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
<style lang=""></style>
