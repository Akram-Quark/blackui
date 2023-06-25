<template lang="">
  <div class="ml-12 flex lg:items-start justify-center flex-col m-4">
    <h1 class="text-3xl font-semibold lg:text-left">
      Find <sub class="text-mypurple">Us</sub>
    </h1>
    <p class="text-sm lg:text-left my-2">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesent Lorem
      ipsum dolor sit amet consectetur, adipisicing elit. Praesent
    </p>
    <button
      @click="getPosition()"
      type="button"
      class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      :class="[$i18n.locale == 'ar' ? 'font-semibold' : 'font-medium']"
    >
      FIND
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
<style lang=""></style>
