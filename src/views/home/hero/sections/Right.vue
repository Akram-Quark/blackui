<template lang="">
  <div
    class="my-12 flex items-start md:my-0 md:grid sm:order-2 lg:order-3"
    :class="[$i18n.locale == 'ar' ? 'font-cairo' : '']"
  >
    <div class="w-full h-14 hidden lg:block">
      <h1
        class="lg:block font-semibold border right-0 p-1 text-white absolute w-36 2xl:w-40 text-center px-4"
      >
        {{ $t("message.hero.right.edition") }}<br />2022
      </h1>
    </div>

    <div
      class="text-center sm:text-right max-w-sm bg-mydark rounded-lg mx-auto"
      v-if="$i18n.locale == 'ar'"
    >
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
          class="inline-flex items-center font-semibold px-4 py-2 text-sm text-center text-white bg-mypurple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
        >
          {{ $t("message.hero.right.READ") }}
        </a>
        <a class="text-white text-sm font-semibold ml-4">
          {{ $t("message.hero.right.READ") }}
        </a>
      </div>
    </div>

    <div
      class="text-center sm:text-left max-w-sm bg-mydark rounded-lg mx-auto"
      v-else
    >
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
          class="inline-flex items-center font-semibold px-4 py-2 text-sm text-center text-white bg-mypurple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
        >
          {{ $t("message.hero.right.READ") }}
        </a>
        <a class="text-white text-sm font-semibold ml-4">
          {{ $t("message.hero.right.READ") }}
        </a>
      </div>
    </div>
  </div>
</template>
