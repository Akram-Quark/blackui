<template lang="">
  <div class="">
    <div class="md:flex grid place-content-center p-12 relative">
      <span
        class="[writing-mode:vertical-lr] 2xl:text-xl text-white font-bold absolute top-[50%] border-red-500 left-4 -translate-y-[50%]"
        >Ready <br />to get started <ArrowNarrowDownIcon class="inline" />
      </span>
      <img
        class="h-19 w-[50%] shadow-xl shadow-black"
        src="@/assets/images/test.jpg"
        alt=""
      />
      <span
        class="[writing-mode:vertical-lr] 2xl:text-xl hidden md:block animate-pulse text-white font-bold absolute right-4 -translate-y-[50%] top-[50%]"
        >Ready <br />to get started <ArrowNarrowDownIcon class="inline" />
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
