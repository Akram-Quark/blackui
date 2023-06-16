<template lang="">
  <div class="grid md:grid-cols-3 md:gap-y-8 md:h-screen mb-20">
    <Left />
    <Mid />
    <Right />
  </div>
</template>
<script>
import Left from "./sections/Left.vue";
import Mid from "./sections/Mid.vue";
import Right from "./sections/Right.vue";
export default {
  components: {
    Left,
    Mid,
    Right,
  },
};
</script>
<style lang=""></style>
