<template>
  <div class="why-block"
       :style="{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + require('@/assets/road-forest.jpg') + ')', 'background-size' : 'cover'}">
    <div class="container why-container">
      <div class="why-text">
        <div class="why-header">{{ texts[1]['text_' + selectedLang] }}</div>
        <div class="why-description">
          {{ texts[2]['text_' + selectedLang] }}
        </div>
      </div>
      <b-row>
        <b-col cols="6" lg="3" class="column">
          <div class="why-card">
            <div class="why-card-icon">
              <img src="@/assets/icons/lock.svg">
            </div>
            <div class="why-card-header">{{ texts[3]['text_' + selectedLang] }}</div>
            <div class="why-card-description">
              {{ texts[4]['text_' + selectedLang] }}
            </div>
          </div>
        </b-col>
        <b-col cols="6" lg="3" class="column">
          <div class="why-card">
            <div class="why-card-icon">
              <img src="@/assets/icons/gift.svg">
            </div>
            <div class="why-card-header">{{ texts[5]['text_' + selectedLang] }}</div>
            <div class="why-card-description">
              {{ texts[6]['text_' + selectedLang] }}
            </div>
          </div>
        </b-col>
        <b-col cols="6" lg="3" class="column">
          <div class="why-card">
            <div class="why-card-icon">
              <img src="@/assets/icons/sale.svg">
            </div>
            <div class="why-card-header">{{ texts[7]['text_' + selectedLang] }}</div>
            <div class="why-card-description">
              {{ texts[8]['text_' + selectedLang] }}
            </div>
          </div>
        </b-col>
        <b-col cols="6" lg="3" class="column">
          <div class="why-card">
            <div class="why-card-icon">
              <img src="@/assets/icons/garant.svg">
            </div>
            <div class="why-card-header">{{ texts[9]['text_' + selectedLang] }}</div>
            <div class="why-card-description">
              {{ texts[10]['text_' + selectedLang] }}
            </div>
          </div>
        </b-col>
      </b-row>
        <div class="why-button showForm">
          <p>
            {{ more_text['text_' + selectedLang] }}
          </p>
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AppWhy",

  data() {
    return {
      more_text: {
        text_ru: 'УЗНАТЬ\u00A0БОЛЬШЕ',
        text_ua: 'ДІЗНАТИСЯ\u00A0БІЛЬШЕ',
      },
    }
  },

  computed: {
    ...mapGetters('lang', ['selectedLang', 'texts']),
  }
}
</script>

<style lang="scss">
.why-block {
  width: 100%;
}

.why-container {
  width: 100%;
  max-width: 100%;
}

.why-header {
  font-weight: 800;
  font-size: $h48;
  line-height: $h68;
  text-align: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  color: #FFFFFF;
}

.why-description {
  font-weight: bold;
  font-size: $h14;
  line-height: $h22;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #FFFFFF;
}

.why-card {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10%;
  @media (max-width: 768px) {
    padding: 7%;
  }

  background: #FFFFFF;
  border-radius: 10px;
}

.why-card-icon img{
  height: 100px;
  @media (max-width: 768px) {
    height: 40px;
  }
}

.why-text {
  padding-top: 50px;
  padding-bottom: 30px;
}

.why-card-header {
  font-weight: 600;
  font-size: $h14;
  line-height: $h22;
  text-align: center;
  letter-spacing: 0.1em;
  padding: 3% 0 6% 0;

  color: #000000;
}

.why-card-description {
  font-weight: 500;
  font-size: $h10;
  line-height: $h16;
  text-align: center;
  letter-spacing: 0.05em;

  color: #727272;
}

.why-button {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 5%;
}

.why-button p {
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  border-radius: 50px;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: $h28;
  letter-spacing: 0.1em;
  display: flex;
  padding: 5px 15px;
  color: #2C2C2C;
  margin-bottom: 0;
}
</style>
