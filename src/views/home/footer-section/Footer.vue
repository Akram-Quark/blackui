<template lang="">
  <div
    class="grid h-[700px] sm:grid-cols-2 md:h-96 sm:h-[700px] mt-10 bg-mypurple"
    :class="[$i18n.locale == 'ar' ? 'font-cairo' : '']"
  >
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
