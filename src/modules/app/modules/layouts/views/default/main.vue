<template>
  <div class="main-app" v-if="isLoaded()">
    <AppHeader/>
    <div class="site__body">
      <transition-group name="fade" mode="out-in">
        <router-view key="id"/>
      </transition-group>
    </div>
    <app-footer></app-footer>
  </div>
  <AppLoader v-else/>
</template>

<script>
import AppHeader                from '@/modules/app/modules/layouts/components/default/AppHeader';
import AppFooter                from "@/modules/app/modules/layouts/components/default/AppFooter";
import AppLoader                from '@/modules/app/modules/layouts/components/default/AppLoader';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'DefaultLayout',
  props: {data: Object},
  components: {AppFooter, AppHeader, AppLoader},
  data() {
    return {};
  },
  methods: {
    ...mapActions('product', ['productsInit']),
    ...mapActions('lang', ['textsInit']),
    ...mapActions('news', ['newsInit']),

    isLoaded(){
      return this.productLoading && this.textLoading && this.newsLoading
    }
  },
  computed: {
    ...mapGetters('product', {productLoading: 'isLoading'}),
    ...mapGetters('lang', {textLoading: 'isLoading'}),
    ...mapGetters('news', {newsLoading: 'isLoading'}),
  },
  created() {
    this.productsInit();
    this.newsInit();
    this.textsInit();
  },
};
</script>

<style lang="scss">
body:before {
  content: '';
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  //background: -webkit-gradient(linear,left top,right bottom,from(#6d327c),color-stop(#485DA6),color-stop(#00a1ba),color-stop(#01b18e),to(#32b37b));
  //background: -o-linear-gradient(left top,#6d327c,#485DA6,#00a1ba,#01b18e,#32b37b);
  background: linear-gradient(to right bottom,#6d327c,#485DA6,#00a1ba,#01b18e,#32b37b);
}

.site__body {
  margin-top: 0;
}

.box {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
