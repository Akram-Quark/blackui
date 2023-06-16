<template lang="">
  <div class="grid gap-6 md:grid-cols-4 ml-14 my-5">
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
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
