<template lang="">
  <div class="flex items-start justify-center mt-2" dir="ltr">
    <span
      class="text-white mx-1"
      :class="[$i18n.locale == 'ar' ? 'font-cairo' : '']"
      >{{ $t("message.courses.more") }}</span
    >
    <ArrowRightIcon class="text-white animate-bounce" />
  </div>
</template>

<script>
import { ArrowRightIcon } from "@vue-hero-icons/outline";

export default {
  components: {
    ArrowRightIcon,
  },
};
</script>
