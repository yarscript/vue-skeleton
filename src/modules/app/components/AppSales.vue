<template>
  <div class="sales-block">
    <div class="sales-aside">
      <div class="sales-aside-text">
        {{ sales_text['text_' + selectedLang] }}
      </div>
    </div>
    <div class="sales-main-content">
      <div class="sales-main-content-text">
        <div class="sales-main-content-header">
          {{ name }}
        </div>
        <div class="sales-main-content-subheader">
          {{ texts[0]['text_' + selectedLang] }}
        </div>
        <div class="sales-main-content-specifications">
          {{ gabarit_text['text_' + selectedLang] }}<br>
          {{ length_text['text_' + selectedLang] }} {{ length }}<br>
          {{ width_text['text_' + selectedLang] }} {{ width }}<br>
          {{ board_height_text['text_' + selectedLang] }} {{ board_height }}<br>
          {{ wheel_track_text['text_' + selectedLang] }} {{ wheel_track }}<br>
          {{ ark_height_text['text_' + selectedLang] }} {{ ark_height }}<br>
        </div>
        <div class="sales-main-content-description">
          {{ description }}
        </div>
      </div>
      <div class="sales-main-content-youtube" @click="href(yt_link)">
        <img src="@/assets/icons/yt-icon.svg">
        <p>{{ more_text['text_' + selectedLang] }}</p>
      </div>
      <div class="sales-main-content-price">
        {{ price_text['text_' + selectedLang] }} {{ price * 1 }}{{ wallet_text['text_' + selectedLang] }}
      </div>
      <div class="sales-main-content-button showForm">
        <p>
          {{ order_text['text_' + selectedLang] }}
        </p>
      </div>
    </div>
    <div class="sales-circle">
      <img :src="base_url + imageUrl" :alt="imageAlt">
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AppSales",

  props: {
    name: String,
    description: String,
    imageUrl: String,
    imageAlt: String,
    price: String,
    board_height: Number,
    wheel_track: Number,
    ark_height: Number,
    width: Number,
    length: Number,
    yt_link: String,
  },

  data() {
    return {
      base_url: process.env.VUE_APP_BASE_URL + '/',
      sales_text: {
        text_ru: 'АКЦИЯ',
        text_ua: 'АКЦІЯ',
      },
      gabarit_text: {
        text_ru: 'Габаритные размеры прицепа:',
        text_ua: 'Габаритні розміри причепа:',
      },
      length_text: {
        text_ru: 'Длина кузова, мм -',
        text_ua: 'Довжина кузова, мм -',
      },
      width_text: {
        text_ru: 'Ширина кузова, мм -',
        text_ua: 'Ширина кузова, мм -',
      },
      board_height_text: {
        text_ru: 'Высота борта, мм -',
        text_ua: 'Висота борту, мм -',
      },
      wheel_track_text: {
        text_ru: 'Колея колес, мм -',
        text_ua: 'Колія коліс, мм -',
      },
      ark_height_text: {
        text_ru: 'Высота дуги, мм -',
        text_ua: 'Висота дуги, мм -',
      },
      more_text: {
        text_ru: 'УЗНАТЬ\u00A0БОЛЬШЕ',
        text_ua: 'ДІЗНАТИСЯ\u00A0БІЛЬШЕ',
      },
      price_text: {
        text_ru: 'ВСЕГО:',
        text_ua: 'ВСЬОГО:',
      },
      wallet_text: {
        text_ru: 'грн.',
        text_ua: 'грн.',
      },
      order_text: {
        text_ru: 'ОФОРМИТЬ\u00A0ЗАКАЗ',
        text_ua: 'ОФОРМИТИ\u00A0ЗАМОВЛЕННЯ',
      },
    }
  },

  computed: {
    ...mapGetters('lang', ['selectedLang', 'texts']),
  },

  methods: {
    href(yt_link) {
      window.open(yt_link);
    }
  }
}
</script>

<style lang="scss">
.sales-block {
  width: 100%;
  display: flex;
  background: #E21E24;
}

.sales-aside {
  width: 10%;
  background: linear-gradient(180deg, #961F22 0%, #802E30 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sales-aside-text {
  font-weight: 600;
  font-size: $h18;
  line-height: $h28;
  text-align: center;
  letter-spacing: 0.4em;
  color: #FFFFFF;
  transform: rotate(-90deg);
}

.sales-main-content {
  color: #FFFFFF;
  width: 35%;
  padding: 2%;
}

.sales-main-content-header {
  font-weight: 800;
  font-size: $h48;
  line-height: $h68;
  text-align: center;
  letter-spacing: 0.1em;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.sales-main-content-subheader {
  font-weight: 800;
  font-size: $h18;
  line-height: $h28;
  margin: 5px 0 10px 0;
}

.sales-main-content-specifications, .sales-main-content-description {
  font-weight: 600;
  font-size: $h14;
  line-height: $h28;
  margin-bottom: $h14;
}

.sales-main-content-youtube {
  display: flex;
  margin-top: $h28;
  margin-bottom: $h28;
  cursor: pointer;
}

.sales-main-content-youtube p {
  font-weight: 600;
  font-size: $h14;
  line-height: $h28;
  margin: auto 0 auto 5px;
}

.sales-main-content-price {
  font-weight: 600;
  font-size: $h28;
  line-height: $h28;
  font-feature-settings: 'pnum' on, 'lnum' on;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.sales-main-content-button {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 2% 2% 0 2%;
}

.sales-main-content-button p {
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-weight: bold;
  font-size: $h18;
  line-height: $h28;
  letter-spacing: 0.05em;
  display: flex;
  padding: 5px 15px;
  color: #2C2C2C;
  margin-bottom: 0;
}

.sales-circle {
  border-radius: 100% 0 0 100%;
  background: #FFFFFF;
  width: 58.3333333%;
  padding-right: 10%;
  padding-left: 7.5%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.sales-circle img {
  width: 100%;
}
</style>
