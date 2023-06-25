<template lang="">
  <div
    class="flex items-center justify-between"
    :class="[$i18n.locale == 'ar' ? 'font-cairo' : '']"
  >
    <h1
      class="text-5xl ml-9 text-white font-medium"
      :class="[$i18n.locale == 'ar' ? 'mr-9' : '']"
    >
      {{ $t("message.courses.up.find") }}
      <sub class="text-lg font-semibold">
        {{ $t("message.courses.up.your") }}</sub
      >
    </h1>
    <div
      class="mr-9 hidden md:flex"
      :class="[$i18n.locale == 'ar' ? 'ml-9' : '']"
    >
      <div class="empty:bg-white mt-1 mx-2 w-3 h-3 inline-block"></div>
      <h1>
        <span class="font-semibold text-white"
          >{{ $t("message.hero.right.edition") }}<br />2022</span
        >
      </h1>
    </div>
  </div>
</template>
