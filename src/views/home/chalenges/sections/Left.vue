<template lang="">
  <div class="flex md:mt-0 flex-col">
    <div class="flex items-center">
      <h1
        class="text-medium ml-8 [writing-mode:vertical-lr] text-left text-white text-lg tracking-wider"
        :class="[$i18n.locale == 'ar' ? 'mr-8' : '']"
      >
        <div class="empty:bg-white w-3 h-3 mx-1 inline-block"></div>
        {{ $t("message.chalanges.left") }}
      </h1>
    </div>
  </div>
</template>
