<template lang="">
  <div class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
