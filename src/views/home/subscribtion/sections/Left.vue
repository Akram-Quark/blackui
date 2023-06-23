<template lang="">
  <div
    class="flex flex-col justify-center mt-8 md:mt-0"
    :class="[$i18n.locale == 'ar' ? 'font-cairo' : '']"
  >
    <div class="text-center text-white">
      <h1 class="font-bolder text-4xl 2xl:text-6xl">
        {{ $t("message.subscribe.left.subs") }}
      </h1>
      <h5 class="text-mypurple text-2xl 2xl:text-4xl">
        {{ $t("message.subscribe.left.to") }}
      </h5>
      <h5 class="text-sm py-3 text-gray-500 2xl:text-xl">
        {{ $t("message.subscribe.left.p") }}
      </h5>
    </div>

    <form class="w-[60%] mx-auto mt-2">
      <div class="mb-6 2xl:mb-12">
        <input
          :placeholder="$t('message.subscribe.left.name')"
          type="text"
          id="name"
          class="bg-mydark border border-mypurple text-gray-400 text-sm focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
          required
        />
      </div>
      <div class="mb-6 2xl:mb-12">
        <input
          type="email"
          id="email"
          class="bg-mydark border border-mypurple text-gray-400 text-sm focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div class="mb-6 2xl:mb-12">
        <textarea
          type="text"
          id="message"
          class="bg-mydark border border-mypurple text-gray-400 text-sm focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
          :placeholder="$t('message.subscribe.left.message')"
          required
        />
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="text-white bg-mypurple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5"
        >
          {{ $t("message.subscribe.left.btn") }}
        </button>
      </div>
    </form>
  </div>
</template>
