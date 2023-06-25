<template lang="">
  <div
    class="px-6 text-white font-medium w-full grid lg:grid-cols-2 h-96 my-12"
  >
    <Left ref="mapComponent" />
    <Right @find:pos="find()" />
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
    find() {
      this.$refs.mapComponent.geolocate();
    },
  },
  components: {
    Left,
    Right,
  },
};
</script>
