<template lang="">
  <div
    class="px-6 flex flex-col text-white font-medium lg:gap-4 w-full lg:grid lg:grid-cols-2 h-[600px] lg:h-96 my-12"
  >
    <Right @find:pos="findPosition()" />

    <Left ref="mapComponent" />
  </div>
</template>
<script>
import Left from "./google/Left.vue";
import Right from "./google/Right.vue";
export default {
  name: "Map",
  data() {
    return {
      coords: {},
    };
  },
  methods: {
    findPosition() {
      this.$refs.mapComponent.geolocate();
    },
  },
  components: {
    Left,
    Right,
  },
};
</script>
