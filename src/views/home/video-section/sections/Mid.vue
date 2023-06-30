<template lang="">
  <div
    class="md:flex grid place-content-center p-12 relative"
    :class="[$i18n.locale == 'ar' ? 'font-cairo font-semibold' : '']"
  >
    <span
      class="[writing-mode:vertical-lr] hidden lg:block 2xl:text-xl text-white font-bold absolute top-[50%] left-4 -translate-y-[50%]"
      >{{ $t("message.video.ready") }} <br />{{ $t("message.video.started") }}
      <ArrowNarrowDownIcon class="inline" v-if="$i18n.locale == 'en'" />
      <ArrowNarrowUpIcon class="inline" v-else />
    </span>
    <video class="lg:w-[65%] shadow-xl shadow-black" controls>
      <source src="@/assets/videos/vid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <span
      class="[writing-mode:vertical-lr] 2xl:text-xl hidden lg:block animate-pulse text-white font-bold absolute right-4 -translate-y-[50%] top-[50%]"
      >{{ $t("message.video.ready") }} <br />{{ $t("message.video.started") }}
      <ArrowNarrowDownIcon class="inline" v-if="$i18n.locale == 'en'" />
      <ArrowNarrowUpIcon class="inline" v-else />
    </span>
  </div>
</template>

<script>
import {
  ArrowNarrowDownIcon,
  ArrowNarrowUpIcon,
} from "@vue-hero-icons/outline";

export default {
  components: { ArrowNarrowDownIcon, ArrowNarrowUpIcon },
};
</script>
