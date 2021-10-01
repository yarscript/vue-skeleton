template>
  <div class="map">
    <l-map
        style="height: 100%; width: 100%"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url"/>
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <a
              target="blank"
              href="https://www.google.com/maps/dir//Тарта,+вулиця+Пекарська,+24,+Львів,+Львівська+область,+79000/@49.8360903,24.0270008,14.46z/data=!4m9!4m8!1m0!1m5!1m1!1s0x473add698f334df5:0x1160d541a9231a53!2m2!1d24.0385865!2d49.8377794!3e0"
          >Проложить маршрут...</a
          >
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
export default {
  name: 'AppMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      zoom: 20,
      center: latLng(49.0799482,33.4128923),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      withPopup: latLng(49.0799482,33.4128923),
      currentZoom: 16,
      currentCenter: latLng(49.0799482,33.4128923),
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
  },
};
</script>

<style lang="scss">
.map {
  height: 450px;
}
</style>
