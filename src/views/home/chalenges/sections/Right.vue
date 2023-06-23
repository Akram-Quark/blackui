<template lang="">
  <div class="flex md:mt-0 flex-col">
    <div class="flex justify-end">
      <h1
        class="text-medium [writing-mode:vertical-lr] mr-8 text-right text-white text-lg tracking-wider"
        :class="[$i18n.locale == 'ar' ? 'ml-8' : '']"
      >
        <div class="empty:bg-white w-3 h-3 mx-1 inline-block"></div>
        {{ $t("message.chalanges.left") }}
      </h1>
    </div>
  </div>
</template>
