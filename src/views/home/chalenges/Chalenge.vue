<template lang="">
  <div
    class="grid md:grid-cols-3 my-14 space-x-5"
    :class="[$i18n.locale == 'ar' ? 'font-cairo' : '']"
  >
    <Left />
    <Mid />
    <Right />
    <Dowen />
  </div>
</template>

<script>
import Left from "./sections/Left.vue";
import Mid from "./sections/Mid.vue";
import Right from "./sections/Right.vue";
import Dowen from "./sections/Dowen.vue";

export default {
  components: {
    Left,
    Mid,
    Right,
    Dowen,
  },
};
</script>
