<template lang="">
  <div class="grid md:grid-cols-2 md:h-96 xs:h-[900px] py-10 mt-10 bg-mypurple">
    <Left />
    <Right />
  </div>
</template>
<script>
import Left from "./sections/Left.vue";
import Right from "./sections/Right.vue";
export default {
  components: {
    Left,
    Right,
  },
};
</script>
<style lang=""></style>
