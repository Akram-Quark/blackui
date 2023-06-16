<template lang="">
  <div class="md:mx-6 h-[26rem] my-40">
    <div
      class="md:flex grid place-content-center h-full justify-center relative"
    >
      <span
        class="md:[writing-mode:vertical-lr] text-white font-bold absolute top-0 left-40"
        >Ready to get started <ArrowNarrowDownIcon class="inline" />
      </span>
      <img
        class="object-fill md:w-1/2 shadow-xl md:m-0 shadow-mypurple"
        src="@/assets/images/thumbnail.jpg"
        alt=""
      />
      <span
        class="md:[writing-mode:vertical-lr] hidden md:block animate-bounce text-white font-bold absolute right-40 bottom-0"
        >Ready to get started <ArrowNarrowDownIcon class="inline" />
      </span>
    </div>
  </div>
</template>
<script>
import { ArrowNarrowDownIcon } from "@vue-hero-icons/outline";
export default {
  components: { ArrowNarrowDownIcon },
};
</script>
<style lang=""></style>
