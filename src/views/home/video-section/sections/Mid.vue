<template lang="">
  <div class="md:flex grid place-content-center p-12 relative">
    <span
      class="[writing-mode:vertical-lr] hidden lg:block 2xl:text-xl text-white font-bold absolute top-[50%] border-red-500 left-4 -translate-y-[50%]"
      >Ready <br />to get started <ArrowNarrowDownIcon class="inline" />
    </span>
    <img
      class="lg:w-[65%] shadow-xl shadow-black"
      src="@/assets/images/test.jpg"
      alt=""
    />
    <span
      class="[writing-mode:vertical-lr] 2xl:text-xl hidden lg:block animate-pulse text-white font-bold absolute right-4 -translate-y-[50%] top-[50%]"
      >Ready <br />to get started <ArrowNarrowDownIcon class="inline" />
    </span>
  </div>
</template>

<script>
import { ArrowNarrowDownIcon } from "@vue-hero-icons/outline";

export default {
  components: { ArrowNarrowDownIcon },
};
</script>
