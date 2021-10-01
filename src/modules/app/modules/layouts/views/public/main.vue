<template>
  <div>
    <app-header />
    <transition-group name="fade" mode="out-in">
      <router-view key="id" />
    </transition-group>
<!--    <AppMainFooter />-->
  </div>
</template>

<script>
import AppHeader from '@/modules/app/modules/layouts/components/public/AppHeader';
// import AppMainFooter from '@/components/TheFooter/AppMainFooter';

export default {
  name: 'PublicLayout',
  props: {
    data: Object,
  },
  components: {
    AppHeader,
    // AppMainFooter
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
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
