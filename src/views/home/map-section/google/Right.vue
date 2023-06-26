<template lang="">
  <div
    class="flex justify-center lg:items-start items-center flex-1 flex-col"
    :class="[$i18n.locale == 'ar' ? 'font-cairo lg:items-start' : 'lg:items-']"
  >
    <h1 class="text-3xl font-semibold lg:text-left">
      {{ $t("message.map.right.find") }}
      <sub class="text-mypurple"> {{ $t("message.map.right.us") }}</sub>
    </h1>

    <p
      class="text-mypurple lg:text-left text-center w-full text-sm my-3"
      :class="[$i18n.locale == 'ar' ? ' lg:text-right' : '']"
    >
      {{ $t("message.map.right.address") }}
    </p>
    <button
      @click="getPosition()"
      type="button"
      class="focus:outline-none w-[60%] text-white bg-purple-700 hover:bg-purple-800 text-sm px-5 py-2.5 mb-2"
      :class="[$i18n.locale == 'ar' ? 'font-semibold' : 'font-medium']"
    >
      {{ $t("message.map.right.find") }}
    </button>
  </div>
</template>
<script>
export default {
  name: "Right",
  methods: {
    getPosition() {
      this.$emit("find:pos");
    },
  },
};
</script>
