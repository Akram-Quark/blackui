<template lang="">
  <div
    class="text sm:order-2 lg:order-1 white flex text-white p-3 2xl:w-[50%] 2xl:mx-auto"
  >
    <div class="flex-1 items-center justify-center flex">
      <div>
        <h1
          class="font-bold 2xl:text-2xl text-2xl underline underline-offset-8 my-3"
        >
          {{ $t("message.footer.left.title") }}
        </h1>
        <ul
          class="2xl:text-xl space-y-2"
          :class="$i18n.locale == 'ar' ? 'font-semibold' : ''"
        >
          <li>{{ $t("message.footer.left.item1") }}</li>
          <li>{{ $t("message.footer.left.item2") }}</li>
          <li>{{ $t("message.footer.left.item3") }}</li>
          <li>{{ $t("message.footer.left.item4") }}</li>
          <li>{{ $t("message.footer.left.item5") }}</li>
        </ul>
      </div>
    </div>
    <div class="flex-1 items-center justify-center flex">
      <div>
        <h1
          class="font-bold text-2xl 2xl:text-2xl underline underline-offset-8 my-3"
        >
          {{ $t("message.footer.mid.title") }}
        </h1>
        <ul
          class="2xl:text-xl space-y-2"
          :class="$i18n.locale == 'ar' ? 'font-semibold' : ''"
        >
          <li>{{ $t("message.footer.mid.item1") }}</li>
          <li>{{ $t("message.footer.mid.item2") }}</li>
          <li>{{ $t("message.footer.mid.item3") }}</li>
          <li>{{ $t("message.footer.mid.item4") }}</li>
          <li>{{ $t("message.footer.mid.item5") }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
