<template lang="">
  <nav class="bg-mydark fixed z-10 dark:bg-gray-900 w-full top-0 left-0">
    <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center">
        <div class="w-4 mx-3 h-4 empty:bg-white"></div>
        <span class="self-center text-white text-xl font-krub whitespace-nowrap"
          >YOUR LOGO</span
        >
      </a>
      <div class="flex md:order-2">
        <button
          type="button"
          class="text-mydark bg-white md:hover:bg-mydark md:hover:text-white focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0"
        >
          Get started
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 tfont-krub bg-mydark md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-bgnd"
        >
          <li>
            <a
              href="#"
              class="block py-2 mx-10 pl-3 pr-4 text-white hover:underline hover:underline-offset-8 bg-mydark rounded md:bg-transparent md:p-0"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 mx-10 pl-3 pr-4 text-white hover:underline hover:underline-offset-8 bg-mydark rounded md:bg-transparent md:p-0"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 mx-10 pl-3 pr-4 text-white hover:underline hover:underline-offset-8 bg-mydark rounded md:bg-transparent md:p-0"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 mx-10 pr-4 text-white hover:underline hover:underline-offset-8 bg-mydark rounded md:bg-transparent md:p-0"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { initCollapses } from "flowbite";
export default {
  mounted() {
    initCollapses();
  },
  name: "Nav",
};
</script>
