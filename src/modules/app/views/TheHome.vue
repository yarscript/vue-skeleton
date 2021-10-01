<template>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "",
  components: {
  },
  data() {
    return {
      isMobile: false,
    };
  },

  computed: {
    ...mapGetters('product', {salesProduct: 'salesProduct', specialProduct: 'specialProduct'}),
    ...mapGetters('lang', ['selectedLang']),
  },

  methods: {
    getImage(images) {
      if (images?.length) {
        // return images[0].src
        return `storage/item-image/${images[0].title}`
      }
    },

    onResize() {
      this.isMobile = window.innerWidth <= 768;
    }
  },

  created() {
    this.onResize();

    window.addEventListener('resize', this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style lang="scss">


.showForm {
  cursor: pointer;
}
</style>
