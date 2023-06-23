<template lang="">
  <div
    class="my-12 flex items-start md:my-0 md:grid sm:order-2 lg:order-3"
    :class="[$i18n.locale == 'ar' ? 'font-cairo' : '']"
  >
    <div class="w-full h-14 hidden lg:block">
      <h1
        class="lg:block font-semibold border 2xl:p-2 text-white absolute w-40 2xl:w-60 text-center px-4"
        :class="[$i18n.locale == 'en' ? 'right-0' : 'left-0']"
      >
        {{ $t("message.hero.right.edition") }}<br />2022
      </h1>
    </div>

    <div class="text-center sm:text-left max-w-sm bg-mydark rounded-lg mx-auto">
      <div class="md:p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            {{ $t("message.hero.right.title") }}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-400">
          {{ $t("message.hero.right.p") }}
        </p>
        <a
          href="#"
          class="inline-flex items-center font-semibold px-3 py-2 text-sm text-center text-white bg-mypurple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
          dir="ltr"
        >
          {{ $t("message.hero.right.read") }}
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          class="text-white font-semibold"
          :class="[$i18n.locale == 'ar' ? 'mr-5' : 'ml-5']"
        >
          {{ $t("message.hero.right.READ") }}
        </a>
      </div>
    </div>
  </div>
</template>
