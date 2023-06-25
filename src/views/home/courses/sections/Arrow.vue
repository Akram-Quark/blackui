<template lang="">
  <div class="flex items-start justify-center mt-2">
    <span
      class="text-white mx-1"
      :class="[$i18n.locale == 'ar' ? 'font-cairo font-semibold' : '']"
      >{{ $t("message.courses.more") }}</span
    >
    <ArrowRightIcon
      class="text-white animate-bounce"
      v-if="$i18n.locale == 'en'"
    />
    <ArrowLeftIcon class="text-white animate-bounce" v-else />
  </div>
</template>

<script>
import { ArrowRightIcon, ArrowLeftIcon } from "@vue-hero-icons/outline";

export default {
  components: {
    ArrowRightIcon,
    ArrowLeftIcon,
  },
};
</script>
