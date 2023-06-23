<template lang="">
  <div class="grid my-14 gap-y-8 lg:grid-cols-2 md:py-0">
    <Right />
    <Left />
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
