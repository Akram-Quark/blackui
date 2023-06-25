<template lang="">
  <div class="flex items-center justify-center shadow-xl shadow-black">
    <GmapMap
      :center="center"
      :zoom="zoomLevel"
      map-style-id="roadmap"
      :options="mapOptions"
      style="width: 100%; height: 100%"
      ref="mapRef"
      @click="handleMapClick"
    >
      <GmapMarker
        :position="marker.position"
        :clickable="true"
        :draggable="true"
        @drag="handleMarkerDrag"
        @click="panToMarker"
      />
    </GmapMap>
  </div>
</template>
<script>
export default {
  name: "Left",

  data() {
    return {
      marker: { position: { lat: 35.54069774065647, lng: 6.16386622064474 } },
      center: { lat: 35.54069774065647, lng: 6.16386622064474 },
      zoomLevel: 15,
      mapOptions: {
        disableDefaultUI: true,
      },
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    //detects location from browser
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.marker.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.marker.position = {
          lat: 35.54069774065647,
          lng: 6.16386622064474,
        };
        this.panToMarker();
      });
    },
    //sets the position of marker when dragged
    handleMarkerDrag(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    },
    //Moves the map view port to marker
    panToMarker() {
      this.$refs.mapRef.panTo(this.marker.position);
    },
    //Moves the marker to click position on the map
    handleMapClick(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      console.log(e);
    },
  },
};
</script>
<style lang=""></style>
