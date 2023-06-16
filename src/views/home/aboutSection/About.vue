<template lang="">
  <div class="grid my-36 md:my-36 md:py-0 md:grid-cols-2 p-6">
    <Left />
    <Right />
  </div>
</template>
<script>
import Left from "./sections/Left.vue";
import Right from "./sections/Right.vue";

export default {
  components: { Left, Right },
};
</script>
<style lang=""></style>
