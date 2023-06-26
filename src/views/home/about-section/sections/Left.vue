<template lang="">
  <div
    class="text-white space-y-4 container mx-auto lg:w-full order-2 lg:order-1 lg:ml-6"
    :class="[$i18n.locale == 'ar' ? 'font-cairo lg:mr-8 font-semibold' : '']"
  >
    <h1
      class="text-3xl 2xl:text-6xl text-center lg:text-left font-bold"
      :class="[$i18n.locale == 'ar' ? 'lg:text-right font-semibold' : '']"
    >
      {{ $t("message.about.left.title.about") }}
      <span class="text-mypurple">
        {{ $t("message.about.left.title.us") }}</span
      >
    </h1>
    <p
      class="leading-6 py-3 text-justify font-medium text-sm 2xl:text-xl w-3/4 lg:mx-0 lg:text-left mx-auto text-white"
      :class="[$i18n.locale == 'ar' ? 'lg:text-right font-semibold' : '']"
    >
      {{ $t("message.about.left.p") }}
    </p>
    <div class="">
      <ul
        class="place-content-center grid sm:grid-cols-2 text-white md:font-normal"
      >
        <span>
          <li
            class="mb-4 text-center lg:text-left"
            :class="[$i18n.locale == 'ar' ? 'lg:text-right font-semibold' : '']"
          >
            <div class="empty:bg-mypurple inline-block w-3 h-3 mx-1"></div>
            {{ $t("message.about.left.item") }}
          </li>
          <li
            class="text-center mb-4 lg:text-left"
            :class="[$i18n.locale == 'ar' ? 'lg:text-right font-semibold' : '']"
          >
            <div class="empty:bg-mypurple inline-block w-3 h-3 mx-1"></div>
            {{ $t("message.about.left.item") }}
          </li>
        </span>

        <span>
          <li
            class="mb-4 text-center lg:text-left"
            :class="[$i18n.locale == 'ar' ? 'lg:text-right font-semibold' : '']"
          >
            <div class="empty:bg-mypurple inline-block w-3 h-3 mx-1"></div>
            {{ $t("message.about.left.item") }}
          </li>
          <li
            class="text-center mb-4 lg:text-left"
            :class="[$i18n.locale == 'ar' ? 'lg:text-right font-semibold' : '']"
          >
            <div class="empty:bg-mypurple inline-block w-3 h-3 mx-1"></div>
            {{ $t("message.about.left.item") }}
          </li>
        </span>
      </ul>
      <div class="flex justify-center lg:justify-start">
        <button
          type="button"
          class="focus:outline-none mt-12 text-white bg-purple-700 hover:bg-purple-800 text-sm px-5 py-2.5 mb-2"
          :class="[$i18n.locale == 'ar' ? 'font-semibold' : 'font-medium']"
        >
          {{ $t("message.about.left.btn") }}
        </button>
      </div>
    </div>
  </div>
</template>
