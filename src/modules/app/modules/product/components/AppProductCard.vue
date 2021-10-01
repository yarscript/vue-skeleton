<template>
  <div class="product-card">
    <div class="product-card-upper">
      <div class="product-card-title">
        {{ name }}
      </div>
      <div class="product-card-image">
        <img :src="base_url + imageUrl" :alt="imageAlt">
      </div>
    </div>
    <div class="product-card-bottom">
      <div class="product-card-specifications">
        <b>{{ gabarit_text['text_' + selectedLang] }}</b><br>
        {{ length_text['text_' + selectedLang] }} {{ length }}<br>
        {{ width_text['text_' + selectedLang] }} {{ width }}<br>
        {{ board_height_text['text_' + selectedLang] }} {{ board_height }}<br>
        {{ wheel_track_text['text_' + selectedLang] }} {{ wheel_track }}<br>
        {{ ark_height_text['text_' + selectedLang] }} {{ ark_height }}<br>
      </div>
      <div>
        <div class="product-card-price">
          {{ price * 1 }}{{ wallet_text['text_' + selectedLang] }}
        </div>
        <div class="product-card-button showForm">
          <p>
            {{ order_text['text_' + selectedLang] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  name: "AppProductCard",

  props: {
    name: String,
    imageUrl: String,
    imageAlt: String,
    price: String,
    board_height: Number,
    wheel_track: Number,
    ark_height: Number,
    width: Number,
    length: Number,
  },

  data() {
    return {
      base_url: process.env.VUE_APP_BASE_URL + '/',
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
      wallet_text: {
        text_ru: 'грн.',
        text_ua: 'грн.',
      },
      order_text: {
        text_ru: 'ПОЛУЧИТЬ\u00A0КОНСУЛЬТАЦИЮ',
        text_ua: 'ОТРИМАТИ\u00A0КОНСУЛЬТАЦІЮ',
      },
    }
  },
  computed: {
    ...mapGetters('lang', ['selectedLang']),
  }
}
</script>

<style scoped>

</style>
