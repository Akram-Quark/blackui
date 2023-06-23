<template>
  <div class="relative inline-block text-left">
    <div>
      <div
        class="block py-2 pl-3 mx-10 pr-4 text-white hover:underline hover:underline-offset-8 bg-mydark rounded md:bg-transparent md:p-0 cursor-pointer"
        @click="toggleMenue()"
      >
        <span v-if="$i18n.locale == 'en'">
          {{ $t("message.nav.lang.english") }}
          <flag iso="us" class="mx-2" />
        </span>
        <span v-else>
          {{ $t("message.nav.lang.arab") }}
          <flag iso="dz" class="mx-2" />
        </span>
      </div>
    </div>

    <div
      class="absolute text-white bg-mydark right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
      v-if="show"
    >
      <div class="py-1 cursor-pointer" role="none ">
        <span
          class="block px-4 py-2 text-sm hover:bg-gray-200"
          @click="setlocal('en')"
        >
          {{ $t("message.nav.lang.english") }}
          <flag iso="us" class="mx-2" />
        </span>
        <span
          class="block px-4 py-2 text-sm hover:bg-gray-200"
          @click="setlocal('ar')"
        >
          {{ $t("message.nav.lang.arab") }}
          <flag iso="dz" class="mx-2" />
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
