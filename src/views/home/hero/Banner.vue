<template lang="">
  <div class="grid grid-cols-1 gap-y-40 md:grid-cols-3 md:gap-19 p-8">
    <Left />
    <Mid />
    <Right />
  </div>
</template>
<script>
import Mid from "./sections/Mid.vue";
import Left from "./sections/Left.vue";
import Right from "./sections/Right.vue";
export default {
  components: {
    Mid,
    Left,
    Right,
  },
};
</script>
<style lang=""></style>
