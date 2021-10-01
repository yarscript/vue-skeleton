<template>
  <div class="product-block container">
    <div class="product-header">
      {{ our_models_text['text_' + selectedLang] }}
    </div>
    <b-row>
      <b-col cols="12" md="6" lg="4" class="column" v-for="product in products">
        <AppProductCard
            :name="product['name_' + selectedLang]"
            :imageUrl="getImage(product.images)"
            :imageAlt="product['imageAlt_' + selectedLang]"
            :price="product.price"
            :board_height="product.board_height"
            :wheel_track="product.wheel_track"
            :ark_height="product.ark_height"
            :width="product.width"
            :length="product.length"
        />
      </b-col>
      <div class="product-star">{{ star_text['text_' + selectedLang] }}</div>
    </b-row>
  </div>
</template>

<script>
import AppProductCard from "./AppProductCard";
import {mapGetters}   from 'vuex';

export default {
  name: "AppProduct",
  components: {AppProductCard},

  data() {
    return {
      our_models_text: {
        text_ru: 'НАШИ ПОПУЛЯРНЫЕ МОДЕЛИ',
        text_ua: 'НАШІ ПОПУЛЯРНІ МОДЕЛІ',
      },
      star_text: {
        text_ru: 'ЦЕНЫ УКАЗАНЫ БЕЗ УЧЕТА КОЛЁС',
        text_ua: 'ЦІНИ ВКАЗАНІ БЕЗ УРАХУВАННЯ КОЛІС',
      },
    }
  },

  methods: {
    getImage(images) {
      if (images?.length) {
        // return images[0].src
        return `storage/item-image/${images[0].title}`
      }
    },
  },

  computed: {
    ...mapGetters('product', {products: 'products'}),
    ...mapGetters('lang', ['selectedLang'])
  },
}
</script>

<style lang="scss">

.product-header {
  font-weight: 800;
  font-size: $h28;
  line-height: $h44;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #E21E24;
}

.column {
  margin: calc(var(--bs-gutter-x) * .5) 0;
}

.product-card {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-card-upper {
  width: 100%;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0 0 5px 5px;
}

.product-card-title {
  font-weight: 600;
  font-size: $h18;
  line-height: $h28;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 29px;
  }

  color: #000000;
}

.product-card-upper img {
  width: 100%;
}

.product-card-bottom {
  width: 100%;
  background: #E21E24;
  padding: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0 0 5px 5px;
  flex: auto;
  justify-content: space-between;
}

.product-card-specifications {
  font-size: $h14;
  line-height: $h22;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 15px;
  }

  color: #FFFFFF;
}

.product-card-price {
  font-weight: 600;
  font-size: $h18;
  line-height: $h28;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 29px;
  }

  color: #FFFFFF;
  padding: 5px;
}

.product-card-button {
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-weight: bold;
  font-size: $h14;
  line-height: $h28;
  letter-spacing: 0.05em;
  display: flex;
  padding: 0 12px;

  color: #2C2C2C;
}

.product-card-button p {
  margin-bottom: 0;
}

.product-star {
  font-weight: 600;
  font-size: $h14;
  line-height: $h22;
  margin-left: auto;
  width: auto;
  margin-top: 2%;

  color: #E21E24;
}
</style>
