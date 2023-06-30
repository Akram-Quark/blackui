<template lang="">
  <div class="grid grid-cols-1 lg:grid-cols-2 2xl:w-3/4 2xl:mx-auto my-14">
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
