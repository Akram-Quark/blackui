<template lang="">
  <div class="flex flex-col w-full">
    <Up />
    <Down />
    <Arrow />
  </div>
</template>

<script>
import Up from "./sections/Up.vue";
import Down from "./sections/Down.vue";
import Arrow from "./sections/Arrow.vue";

export default {
  components: {
    Up,
    Down,
    Arrow,
  },
};
</script>
