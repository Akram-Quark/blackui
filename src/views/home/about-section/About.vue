<template lang="">
  <div class="grid grid-cols-1 lg:grid-cols-2 2xl:w-3/4 2xl:mx-auto my-14">
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
