<template lang="">
  <div
    class="w-72 h-64 md:w-[200px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] flex flex-col justify-center mx-4 md:my-6"
  >
    <div class="flex flex-col items-center">
      <img
        class="2xl:w-40 2xl:h-40 md:w-28 object-cover md:h-28 w-24 h-24 mb-3 rounded-full shadow-lg border border-mypurple"
        alt="Bonnie image"
        src="@/assets/images/avatar3.jpg"
      />
      <h1 class="font-medium text-white 2xl:text-xl">Look Deof</h1>
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
