<template lang="">
  <div
    class="grid mx-8 2xl:p-10 md:mx-0 md:flex md:items-center justify-evenly shadow-2xl shadow-black"
  >
    <div v-for="offer in offers" :key="offer.id">
      <div
        class="text-white w-60 h-20 flex space-x-4 py-2 items-center p-5"
        :class="[$i18n.locale == 'ar' ? 'justify-center' : '']"
        v-if="$i18n.locale == 'en'"
      >
        <div
          class="2xl:text-3xl text-white font-bold flex"
          :class="[$i18n.locale == 'ar' ? ' ml-2' : '']"
        >
          <span class="text-mypurple">+</span>{{ offer.count }}
        </div>
        <div class="flex flex-col">
          <h1 class="text-gray-500 text-start">{{ offer.msg[0] }}</h1>
          <h2 class="text-white font-semibold text-start">
            {{ offer.msg[1] }}
          </h2>
        </div>
      </div>
      <div
        :key="offer.id"
        class="text-white w-60 h-20 flex space-x-4 py-2 items-center p-5"
        :class="[
          $i18n.locale == 'ar' ? 'justify-center font-cairo font-semibold' : '',
        ]"
        v-else
      >
        <div
          class="2xl:text-3xl text-white font-bold flex"
          :class="[$i18n.locale == 'ar' ? ' ml-2' : '']"
        >
          <span class="text-mypurple">+</span>{{ offer.count }}
        </div>
        <div class="flex flex-col">
          <h1 class="text-gray-500 text-start">{{ offer.msgAr[0] }}</h1>
          <h2 class="text-white font-semibold text-start">
            {{ offer.msgAr[1] }}
          </h2>
        </div>
      </div>
    </div>
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
          msgAr: ["طالب", "سعيد"],
        },
        {
          id: 2,
          count: 50,
          msg: ["CERTIFIED", "CORSES"],
          msgAr: ["درس", "معتمد"],
        },
        {
          id: 3,
          count: 1000,
          msg: ["AWARDS", "RECIEVED"],
          msgAr: ["جوائز", "منح"],
        },
      ],
    };
  },
};
</script>
