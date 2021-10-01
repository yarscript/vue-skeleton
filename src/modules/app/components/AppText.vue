<template>
  <div class="text-block"
       :style="{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(' + require('@/assets/background-image.png') + ')', 'background-size' : 'cover'}">
    <div class="container text-block-container">
      <div class="text-block-header">{{ texts[12]['text_' + selectedLang] }}</div>
      <div class="text-block-description">
        {{ texts[13]['text_' + selectedLang] }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name    : "AppText",
  computed: {
    ...mapGetters('lang', [ 'getLangsList', 'selectedLang', 'texts' ]),
  },
}
</script>

<style lang="scss">
.text-block {
  width: 100%;
}

.text-block-container {
  padding-top: 10%;
  padding-bottom: 10%;
  @media (max-width: 768px) {
    padding-bottom: 20%;
  }
}

.text-block-header {
  font-weight: 900;
  font-size: $h36;
  line-height: $h56;
  letter-spacing: 0.2em;
  text-align: center;

  color: #FFFFFF;

  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  padding-bottom: 5%;
}

.text-block-description {
  font-weight: bold;
  font-size: $h14;
  line-height: $h22;
  text-align: center;

  color: #FFFFFF;
}
</style>
