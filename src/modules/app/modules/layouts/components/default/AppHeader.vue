<template>
  <div class="AppHeader">
    <div class="container side-header">
      <router-link to='/'>
        <div class="side-header-logo">
          <div class="side-header-logo-image">
            <img src="@/assets/logo/logo.png" class="side-header-logo-image-image" alt="logo">
          </div>

          <div class="side-header-logo-border"></div>

          <div class="side-header-logo-text">
            <div class="main-text-logo">ЛЕВ</div>

            <div class="second-text-logo">Кременчуцкий<br>завод прицепов</div>
          </div>
        </div>
      </router-link>

      <div class="side-header-search"></div>

      <div class="site-header__phone">
        <div class="site-header__phone-number">
          <a href="tel:+380671181888">
            +380671181888
          </a>
        </div>

        <div class="site-header__phone-number">
          <a href="tel:+380689554802">
            +380689554802
          </a>
        </div>
      </div>

      <div class="side-header__lang">
        <div class="side-header__lang__box" :class="{ active: isActive }">
          <ul class="side-header__lang__box__items">
            <li
                class="side-header__lang__box__items__item"
                v-for="lang in this.getLangsList"
                :key="lang"
                @click="changeLangEvent(lang)"
            >
              {{ lang }}
            </li>
          </ul>
        </div>

        <div
            class="side-header__lang__now"
            @click="isActiveMethods"
            :class="{ active: isActive }"
        >
          {{ selectedLang }}
          <p class="side-header__lang__arrow" :class="{ active: isActive }">
            <svg
                width="16"
                height="10"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 4L4 1L7 4" stroke="#FEFFE6"/>
            </svg>
          </p>
        </div>
      </div>

      <div class="side-header-burger">
        <input id="menu__toggle" type="checkbox"/>

        <label class="menu__btn" for="menu__toggle"><span></span></label>

        <div class="container menu__box">
          <ul>
            <li><a class="menu__item" @click="scrollMeTo('about_us')">{{ about_us_text['text_' + selectedLang] }}</a>
            </li>
            <li><a class="menu__item" @click="scrollMeTo('catalog')">{{ catalog_text['text_' + selectedLang] }}</a></li>
            <li><a class="menu__item" @click="scrollMeTo('news')">{{ news_text['text_' + selectedLang] }}</a></li>
            <li><a class="menu__item" @click="scrollMeTo('contacts')">{{ contacts_text['text_' + selectedLang] }}</a>
            </li>
          </ul>

          <div class="menu__box__bottom">
            <div class="menu__box__phone">
              <div class="menu__box__phone-number">
                <a :href="'tel:' + texts[15]['text_' + selectedLang]">
                  {{ texts[15]['text_' + selectedLang] }}
                </a>
              </div>
              <div class="menu__box__phone-number">
                <a :href="'tel:' + texts[16]['text_' + selectedLang]">
                  {{ texts[16]['text_' + selectedLang] }}
                </a>
              </div>
            </div>
            <div class="menu__box__lang">
              <div class="menu__box__lang__box" :class="{ active: isActive }">
                <ul class="menu__box__lang__items">
                  <li
                      class="menu__box__lang__item"
                      v-for="lang in this.getLangsList"
                      :key="lang"
                      @click="changeLangEvent(lang)"
                  >
                    {{ lang }}
                  </li>
                </ul>
              </div>
              <div
                  class="menu__box__lang__now"
                  @click="isActiveMethods"
                  :class="{ active: isActive }"
              >
                {{ selectedLang }}
                <p class="menu__box__lang__arrow" :class="{ active: isActive }">
                  <svg
                      width="16"
                      height="10"
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 4L4 1L7 4" stroke="#FEFFE6"/>
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="AppHeader__menu">
      <div class="AppHeader__menu__inner1">
        <b-navbar type="dark">
          <div class="container AppHeader__container__nav">
            <b-navbar-nav class="AppHeader__nav">
              <b-nav-item @click="scrollMeTo('about_us')" exact exact-active-class="active">
                {{ about_us_text['text_' + selectedLang] }}
              </b-nav-item>
              <b-nav-item @click="scrollMeTo('catalog')" exact exact-active-class="active">
                {{ catalog_text['text_' + selectedLang] }}
              </b-nav-item>
              <b-nav-item @click="scrollMeTo('news')" exact exact-active-class="active">
                {{ news_text['text_' + selectedLang] }}
              </b-nav-item>
              <b-nav-item @click="scrollMeTo('contacts')" exact exact-active-class="active">
                {{ contacts_text['text_' + selectedLang] }}
              </b-nav-item>
            </b-navbar-nav>
          </div>
        </b-navbar>
      </div>
      <div class="AppHeader__menu__inner2">
        <span>{{ sales_text['text_' + selectedLang] }}</span>
      </div>
    </div>

    <div class="AppHeader__card"></div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';

export default {
  name: "AppHeader",

  data() {
    return {
      about_us_text: {
        text_ru: 'О НАС',
        text_ua: 'ПРО НАС',
      },
      catalog_text: {
        text_ru: 'КАТАЛОГ',
        text_ua: 'КАТАЛОГ',
      },
      news_text: {
        text_ru: 'НОВОСТИ',
        text_ua: 'НОВИНИ',
      },
      contacts_text: {
        text_ru: 'КОНТАКТЫ',
        text_ua: 'КОНТАКТИ',
      },
      sales_text: {
        text_ru: 'АКЦИЯ',
        text_ua: 'АКЦІЯ',
      },
      isActive: false,
    };
  },

  computed: {
    ...mapGetters('lang', ['getLangsList', 'selectedLang', 'texts']),
  },

  methods: {
    ...mapActions('lang', ['changeLang']),

    scrollMeTo(refName) {
      let element = this.$parent.$children[1].$children[0].$refs[refName].$el;
      let top = element.offsetTop;

      window.scrollTo(0, top);
    },

    changeLangEvent(lang) {
      this.changeLang(lang);
      this.isActive = !this.isActive;
    },

    isActiveMethods: function () {
      if (this.isActive) {
        return (this.isActive = false);
      } else {
        return (this.isActive = true);
      }
    },
  },
};
</script>

<style lang="scss">


@media (min-width: 769px) {
  .AppHeader {
  }
}

@media (max-width: 768px) {
  .AppHeader {
  }
}


.AppHeader__nav {
  color: #fff;
  width: 100%;

  &__cart-icon-button {
    color: #ffffff;
  }

  &__cart-badge {
    color: black !important;
    background-color: #ffffff;
    padding: 0.3em 0.5em 0.3em 0.5em !important;
  }
}

.AppHeader__nav .nav-item {
  font-size: $h18;
  color: inherit;
  padding: 0 14px;
  align-items: center;
  text-align: center;
}

.AppHeader__nav .nav-item:hover {
  color: inherit;
  background: hsla(0, 0%, 100%, .08);
  box-shadow: none;
  transition-duration: .1s;
}

.AppCartProductList-div {
  margin-top: 10px;
}

.container.AppHeader__container__nav {
  background: #333 !important;
}

.navbar-dark {
  background: #333 !important;
  width: 100%;
}

.side-header {
  display: flex;
  align-items: center;
}

.side-header-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.side-header-logo-image-image {
  width: 97px;
  height: 139px;
}

.side-header-logo-text {
  color: #E21E24;
  padding-left: 10px;
}

.main-text-logo {
  font-size: 72px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.15em;
  top: -2px;
  position: relative;
}

.second-text-logo {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0;
  text-align: left;
  position: relative;
  bottom: 22px;
  line-height: $h28;
}

.side-header-search {
  flex-grow: 1;
}

.site-header__phone {
  text-align: right;
  margin-left: 80px;
  line-height: 1;
  flex-shrink: 0;
}

.site-header__phone-number a {
  font-weight: 500;
  font-size: $h18;
  line-height: $h28;
  text-align: center;
  color: #252525 !important;
}

.side-header__lang {
  width: 53px;
  height: 53px;
  background: #E21E24;
  border-radius: 25px;
  margin-left: 5px;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  line-height: $h28;
  color: #FFFFFF;
  margin-bottom: 0;

  position: relative;

  &__now {
    @include flex(center, center, row, nowrap);
    cursor: pointer;
    transition: color 0.2s ease;
    align-content: center;
    z-index: 1;
  }

  &__arrow {
    transition: transform, 0.2s ease;
    transform-origin: center;
    position: relative;
    left: 2px;
    top: -1px;
    transform: rotate(0);
    margin-bottom: 7px;
  }

  &__arrow.active {
    transform: rotate(-180deg);
    transform-origin: center;
    top: 5px;
  }

  &__item {
    margin-bottom: 7px;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  &__box {
    position: absolute;
    height: 0;
    width: 0;
    top: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    transition-property: overflow, height, top;
    transition-duration: 0.2s;
    transition-timing-function: ease;

    &.active {
      width: 53px;
      height: 80px;
      top: 27.5px;
      background: #E21E24;
    }

    &__items {
      margin-bottom: 0;

      &__item {
        margin-bottom: 7px;
        cursor: pointer;
        transition: color 0.2s ease;
      }
    }
  }
}

.side-header-logo-border {
  width: 0;
  height: 110px;
  border-left: 7px solid #E21E24;
}

.AppHeader__menu {
  background: #363636;
  color: #ffffff;
}

.nav-link {
  color: #ffffff !important;
}

.side-header-burger {
  display: none;
}

.AppHeader__menu__inner2 {
  display: none;
}

@media (max-width: 768px) {
  .AppHeader__menu__inner1 {
    display: none;
  }

  .AppHeader__menu__inner2 {
    display: block;
    padding: 12px;

    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.4em;

    color: #FFFFFF;
  }
  .side-header {
    height: 107px;
    position: fixed;
    background: #FFFFFF;
    z-index: 1;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .AppHeader__menu {
    padding-top: 107px;
  }

  .main-text-logo {
    font-size: 36px;
    top: 2px;
  }

  .second-text-logo {
    font-size: 14px;
    bottom: 10px;
  }

  .side-header-logo-image-image {
    height: 90px;
    width: 64px;
  }

  .side-header-logo-border {
    height: 69px;
    border-left: 3px solid #E21E24;
  }

  .site-header__phone {
    display: none;
  }

  .side-header__lang {
    display: none;
  }

  .side-header-burger {
    display: block;
  }

  #menu__toggle {
    opacity: 0;
  }

  #menu__toggle:checked ~ .menu__btn > span {
    transform: rotate(45deg);
    background-color: #FFFFFF;
  }
  #menu__toggle:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
    background-color: #FFFFFF;
  }
  #menu__toggle:checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
    background-color: #FFFFFF;
  }
  #menu__toggle:checked ~ .menu__box {
    visibility: visible;
    right: 0;
  }

  .menu__btn {
    display: flex;
    align-items: center;
    position: fixed;
    top: 42px;
    right: 40px;

    width: 33px;
    height: 26px;

    cursor: pointer;
    z-index: 2;
  }

  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;

    width: 100%;
    height: 2px;

    background-color: #E21E24;

    transition-duration: .25s;
  }
  .menu__btn > span::before {
    content: '';
    top: -8px;
  }
  .menu__btn > span::after {
    content: '';
    top: 8px;
  }

  .menu__box {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: fixed;
    visibility: hidden;
    top: 0;
    right: -100%;

    width: 100%;
    height: 100%;

    margin: 0;
    padding: 80px 0;

    list-style: none;

    background-color: #A01919;

    transition-duration: .25s;

    z-index: 1;
  }

  .menu__item {
    display: block;
    padding: 5% 0;

    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: #FFFFFF;

    text-decoration: none;

    transition-duration: .25s;
  }

  .menu__item:hover {
    color: #FFFFFF;
  }

  .menu__box__phone a {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;

    color: #FFFFFF;
  }

  .menu__box__phone a:hover {
    color: #FFFFFF;
  }

  .menu__box__bottom {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .menu__box__lang {
    width: 53px;
    height: 53px;
    background: #E21E24;
    border-radius: 25px;
    margin-left: 5px;
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 24px;
    line-height: $h28;
    color: #FFFFFF;
    margin-bottom: 0;

    position: relative;

    &__now {
      @include flex(center, center, row, nowrap);
      cursor: pointer;
      transition: color 0.2s ease;
      align-content: center;
      z-index: 1;
    }

    &__arrow {
      transition: transform, 0.2s ease;
      transform-origin: center;
      position: relative;
      left: 2px;
      top: -1px;
      margin-bottom: 7px;
    }

    &__arrow.active {
      transform: rotate(-180deg);
      transform-origin: center;
      top: 5px;
    }

    &__item {
      margin-bottom: 7px;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    &__items {
      margin-top: 7px;
    }

    &__box {
      position: absolute;
      height: 0;
      width: 0;
      top: 0;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      overflow: hidden;
      transition-property: overflow, height, top;
      transition-duration: 0.2s;
      transition-timing-function: ease;

      &.active {
        width: 53px;
        height: 80px;
        top: -50px;
        background: #E21E24;
      }
    }
  }
}
</style>
