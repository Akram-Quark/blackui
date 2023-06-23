<template>
  <div class="relative inline-block text-left">
    <div>
      <div
        class="block py-2 pl-3 mx-10 pr-4 text-white hover:underline hover:underline-offset-8 bg-mydark rounded md:bg-transparent md:p-0 cursor-pointer"
        @click="toggleMenue()"
      >
        <span v-if="$i18n.locale == 'en'">
          {{ $t("message.nav.lang.english") }}
          <flag iso="us" />
        </span>
        <span v-else>
          {{ $t("message.nav.lang.arab") }}
          <flag iso="dz" />
        </span>
      </div>
    </div>

    <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
    <div
      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
      v-if="show"
    >
      <div class="py-1" role="none">
        <span
          class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
          @click="setlocal('en')"
        >
          {{ $t("message.nav.lang.english") }}
          <flag iso="us" />
        </span>
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <span
          class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
          @click="setlocal('ar')"
        >
          {{ $t("message.nav.lang.arab") }}
          <flag iso="dz" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LangSelector",
  data() {
    return {
      show: false,
    };
  },

  methods: {
    setlocal(locale) {
      this.$i18n.locale = locale;
      this.show = false;
    },

    toggleMenue() {
      this.show = !this.show;
    },
  },
};
</script>
