<template lang="">
  <div class="w-72 h-64 md:w-[200px] md:h-[300px] flex flex-col mx-4 md:my-6">
    <div class="flex flex-col items-center">
      <img
        class="md:w-28 object-cover md:h-28 w-24 h-24 mb-3 rounded-full shadow-lg border border-mypurple"
        src="@/assets/images/avatar1.jpg"
        alt="Bonnie image"
      />
      <h1 class="font-medium text-white">Look Deof</h1>
    </div>
    <div>
      <Raiting />
    </div>
    <div>
      <Quote />
    </div>
  </div>
</template>
<script>
import Raiting from "./cardTools/Raiting.vue";
import Quote from "./cardTools/Quote.vue";
export default {
  props: ["img"],
  components: {
    Raiting,
    Quote,
  },
};
</script>
<style lang=""></style>
