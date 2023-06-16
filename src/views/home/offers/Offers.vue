<template lang="">
  <div
    class="grid mb-20 mx-8 md:mx-0 md:flex md:items-center md:justify-between h-1/2 col-span-3 py-5"
  >
    <template v-for="offer in offers">
      <div
        :key="offer.id"
        class="text-white w-60 h-20 flex space-x-4 py-2"
        :class="offer.class"
      >
        <div class="text-3xl text-white font-bold flex items-start">
          <span class="text-mypurple">+</span>{{ offer.count }}
        </div>
        <div class="flex flex-col">
          <h1 class="text-gray-500 text-start">{{ offer.msg[0] }}</h1>
          <h2 class="text-white font-semibold text-start">
            {{ offer.msg[1] }}
          </h2>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      offers: [
        {
          id: 1,
          count: 150,
          msg: ["HAPPY", "STUDENTS"],
          class: "md:ml-20",
        },
        {
          id: 2,
          count: 50,
          msg: ["CERTIFIED", "CORSES"],
          class: "md:pr-50",
        },
        {
          id: 3,
          count: 1000,
          msg: ["AWARDS", "RECIEVED"],
          class: "md:mr-24",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
