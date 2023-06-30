<template lang="">
  <div class="flex flex-1 items-center justify-center">
    <GmapMap
      :center="center"
      :zoom="zoomLevel"
      map-style-id="roadmap"
      :options="mapOptions"
      class="map"
      ref="mapRef"
      @click="handleMapClick"
    >
      <GmapMarker
        :key="index"
        v-for="(gmp, index) in locations"
        :position="gmp"
        @mouseover="showByIndex = index"
        @mouseout="showByIndex = null"
        :icon="{
          url: require('@/assets/images/location.png'),
          size: { width: 35, height: 40, f: 'px', b: 'px' },
          scaledSize: { width: 35, height: 45, f: 'px', b: 'px' },
        }"
      >
        <gmap-info-window :opened="showByIndex === index">
          <div class="p-2 text-center w-full">
            <h3
              class="text-black font-cairo text-center border-black font-semibold"
              v-if="$i18n.locale == 'ar'"
            >
              {{ gmp.label_ar }}
            </h3>
            <h3 class="text-black text-bold" v-else>
              {{ gmp.label_en }}
            </h3>
          </div>
        </gmap-info-window>
      </GmapMarker>
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "Left",

  data() {
    return {
      showByIndex: null,
      locations: [
        {
          lat: 35.54069774065647,
          lng: 6.16386622064474,
          label_en: "Principal store",
          label_ar: "المتجر الرئيسي",
        },
        {
          lat: 35.543680490182176,
          lng: 6.167278289794922,
          label_en: "store 1",
          label_ar: "متجر 1",
        },
        {
          lat: 35.548778507756225,
          lng: 6.165218353271484,
          label_en: "store 2",
          label_ar: "متجر 2",
        },
        {
          lat: 35.54240881892859,
          lng: 6.15761969112518,
          label_en: "store 3",
          label_ar: "متجر 3",
        },
      ],
      marker: {
        position: [
          {
            lat: 35.54069774065647,
            lng: 6.16386622064474,
            label_en: "Principal store",
            label_ar: "المتجر الرئيسي",
          },
        ],
      },
      center: {
        lat: 35.54069774065647,
        lng: 6.16386622064474,
        label_en: "Principal store",
        label_ar: "المتجر الرئيسي",
      },
      zoomLevel: 15,
      mapOptions: {
        disableDefaultUI: true,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }],
          },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
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
<style scoped>
.map {
  width: 600px;
  height: 400px;
}

@media screen and (max-width: 500px) {
  .map {
    width: 600px;
    height: 400px;
  }
}
@media screen and (min-width: 501px) and (max-width: 999px) {
  .map {
    width: 600px;
    height: 400px;
  }
}
</style>
