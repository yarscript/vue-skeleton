<template>
  <div class="AppSalesMobile">
    <div class="AppSalesMobile__top container">
      <div class="AppSalesMobile__top__header">
        {{ name }}
      </div>

      <img
          :src="base_url + imageUrl"
          :alt="imageAlt"
          class="AppSalesMobile__top__image"
      >

      <div class="AppSalesMobile__top__cover">
        <div class="AppSalesMobile__top__cover__triangle"></div>
      </div>
    </div>

    <div class="AppSalesMobile__bottom container">
      <div class="AppSalesMobile__bottom__subheader">
        {{ texts[0]['text_' + selectedLang] }}
      </div>

      <div class="AppSalesMobile__bottom__content">
        <div class="AppSalesMobile__bottom__content__specifications">
          {{ gabarit_text['text_' + selectedLang] }}<br>
          {{ length_text['text_' + selectedLang] }} {{ length }}<br>
          {{ width_text['text_' + selectedLang] }} {{ width }}<br>
          {{ board_height_text['text_' + selectedLang] }} {{ board_height }}<br>
          {{ wheel_track_text['text_' + selectedLang] }} {{ wheel_track }}<br>
          {{ ark_height_text['text_' + selectedLang] }} {{ ark_height }}<br>
        </div>

        <div class="AppSalesMobile__bottom__content__youtube" @click="href(yt_link)">
          <img src="@/assets/icons/yt-icon.svg" class="yt-icon">
          <span>
            {{ more_text['text_' + selectedLang] }}
          </span>
        </div>
      </div>
      <div class="AppSalesMobile__bottom__content__button showForm">
        <span>
          {{ order_text['text_' + selectedLang] }}
        </span>
      </div>
    </div>

    <div class="AppSalesMobile__price">
      {{ price_text['text_' + selectedLang] }} {{ price * 1 }}{{ wallet_text['text_' + selectedLang] }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppSalesMobile",

  props: {
    name        : String,
    description : String,
    imageUrl    : String,
    imageAlt    : String,
    price       : String,
    board_height: Number,
    wheel_track : Number,
    ark_height  : Number,
    width       : Number,
    length      : Number,
    yt_link     : String,
  },

  data() {
    return {
      base_url         : process.env.VUE_APP_BASE_URL + '/',
      gabarit_text     : {
        text_ru: 'Габаритные размеры прицепа:',
        text_ua: 'Габаритні розміри причепа:',
      },
      length_text      : {
        text_ru: 'Длина кузова, мм -',
        text_ua: 'Довжина кузова, мм -',
      },
      width_text       : {
        text_ru: 'Ширина кузова, мм -',
        text_ua: 'Ширина кузова, мм -',
      },
      board_height_text: {
        text_ru: 'Высота борта, мм -',
        text_ua: 'Висота борту, мм -',
      },
      wheel_track_text : {
        text_ru: 'Колея колес, мм -',
        text_ua: 'Колія коліс, мм -',
      },
      ark_height_text  : {
        text_ru: 'Высота дуги, мм -',
        text_ua: 'Висота дуги, мм -',
      },
      more_text        : {
        text_ru: 'УЗНАТЬ\u00A0БОЛЬШЕ',
        text_ua: 'ДІЗНАТИСЯ\u00A0БІЛЬШЕ',
      },
      price_text       : {
        text_ru: 'ВСЕГО:',
        text_ua: 'ВСЬОГО:',
      },
      wallet_text      : {
        text_ru: 'грн.',
        text_ua: 'грн.',
      },
      order_text       : {
        text_ru: 'ОФОРМИТЬ\u00A0ЗАКАЗ',
        text_ua: 'ОФОРМИТИ\u00A0ЗАМОВЛЕННЯ',
      },
    }
  },

  computed: {
    ...mapGetters('lang', [ 'selectedLang', 'texts' ]),
  },

  methods: {
    href(yt_link) {
      window.open(yt_link);
    }
  }
}
</script>

<style lang="scss">
.AppSalesMobile {
  display: flex;
  flex-direction: column;

  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__header {
      font-weight: 800;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.25em;
      text-align: center;

      color: #E21E24;
    }

    &__image {
      width: 100%;
    }

    &__cover {
      height: 20px;
      width: 40px;

      &__triangle {
        top: 8px;
        position: relative;
        width: 40px;
        height: 40px;
        background: #E21E24;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        border-radius: 4px;
      }
    }
  }

  &__bottom {
    background: linear-gradient(180deg, #E21E24 0%, #A40005 100%);

    &__subheader {
      position: relative;
      padding: 5% 0;

      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      text-transform: uppercase;

      color: #FFFFFF;
    }

    &__content {
      display: flex;
      flex-direction: row;
      align-items: flex-end;

      &__specifications {
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;

        color: #FFFFFF;
      }

      &__youtube {
        font-weight: bold;
        font-size: 10px;
        line-height: 13px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        color: #FFFFFF;

        .yt-icon {
          width: 53.89px;
          height: 35.81px;
        }
      }

      &__button {
        display: flex;
        justify-content: center;
      }

      &__button span {
        position: relative;
        top: 20px;
        width: 250px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;

        background: #FFFFFF;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;

        font-weight: bold;
        font-size: 13px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #2C2C2C;

      }
    }
  }

  &__price {
    margin: 30px;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    text-align: center;

    color: #E21E24;

    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
}
</style>
