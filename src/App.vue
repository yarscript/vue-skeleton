<template>
  <div id="app">
    <component :is="layout">
      <slot/>
    </component>
  </div>
</template>

<script>
import PublicLayout  from "@/modules/app/modules/layouts/views/public/main.vue";
import DefaultLayout from "@/modules/app/modules/layouts/views/default/main.vue";
import {mapGetters}  from "vuex";

export default {
  name: "App",
  components: {
    PublicLayout,
    DefaultLayout,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('lang', ['selectedLang']),
    ...mapGetters('seo', ['getTitle', 'getDescription']),

    layout() {
      return this.$store.state?.core.layout;
    },
  },
  mounted() {
    this.$store.watch(
        (state) => {
          return state.core.title;
        },
        (title) => {
          document.title = title.toString();
        },
        {
          deep: true,
        }
    );
  },

  metaInfo() {
    return {
      title: this.getTitle['text_' + this.selectedLang] ?? process.env.VUE_APP_TITLE,
      meta: [{vmid: 'description', name: 'description', content: this.getDescription['text_' + this.selectedLang] ?? process.env.VUE_APP_DESCRIPTION},]
    }
  },
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
