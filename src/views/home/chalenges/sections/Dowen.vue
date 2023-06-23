<template lang="">
  <div class="col-span-3 flex justify-between mt-40">
    <div
      class="flex item-center justify-center ml-4"
      :class="[$i18n.locale == 'ar' ? 'mr-6' : '']"
    >
      <h1 class="md:text-5xl font-extrabold text-[#252525]">
        {{ $t("message.chalanges.dowen.explore") }}
      </h1>
    </div>
    <div
      class="flex item-center justify-center mr-8"
      :class="[$i18n.locale == 'ar' ? 'ml-4' : '']"
    >
      <h1 class="md:text-5xl font-extrabold text-[#252525]">
        {{ $t("message.chalanges.dowen.about") }}
      </h1>
    </div>
  </div>
</template>
