<template lang="">
  <div
    href="#"
    class="2x:lg:mx-20 mx-8 my-8 relative before:content-['01'] before:absolute before:top-0 before:left-0 before:bg-white flex flex-col items-center justify-center 2xl:w-68 h-80 font-krub bg-mydark border border-gray-200 before:p-2"
  >
    <h5
      class="mb-2 text-2xl font-bold text-center text-white relative after:content-[''''] after:absolute after:bg-mypurple after:h-1 after:rounded-full after:-bottom-2 after:left-0"
      :class="[
        $i18n.locale == 'ar' ? 'font-cairo after:w-20 font-bold' : 'after:w-28',
      ]"
    >
      {{ $t("message.courses.card.title") }}
      <span class="text-mypurple">01</span>
    </h5>

    <p
      class="font-normal text-center p-2 text-white"
      :class="[$i18n.locale == 'ar' ? 'font-cairo font-semibold' : '']"
    >
      {{ $t("message.courses.card.p") }}
    </p>
    <button
      :class="[$i18n.locale == 'ar' ? 'font-cairo' : '']"
      type="button"
      class="focus:outline-none mt-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >
      {{ $t("message.courses.card.btn") }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
};
</script>
