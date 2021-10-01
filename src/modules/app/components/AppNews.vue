<template>
  <div class="news-block">
    <div class="news-header">
      <span>{{ last_news_text['text_' + selectedLang] }}</span>
    </div>
    <div v-for="splitNews in getSplitNews" v-if="splitNews !== undefined">
      <div class="news" v-if="splitNews[0]">
        <div class="news-1-main"
             v-bind:style="news1main">
          <div class="news-main-text">
            <div class="news-main-text-header">
              {{ splitNews[0]['title_' + selectedLang] }}
            </div>
            <div class="news-main-text-description">
              {{ splitNews[0]['text_' + selectedLang] }}
            </div>
          </div>
        </div>
        <div class="news-aside"></div>
      </div>
      <AppLine v-if="splitNews[0]"/>
      <div class="news" v-if="splitNews[1]">
        <div class="news-aside"></div>
        <div class="news-2-main"
             :style="news2main">
          <div class="news-main-text">
            <div class="news-main-text-header">
              {{ splitNews[1]['title_' + selectedLang] }}
            </div>
            <div class="news-main-text-description">
              {{ splitNews[1]['text_' + selectedLang] }}
            </div>
          </div>
        </div>
      </div>
      <AppLine v-if="splitNews[1]"/>
    </div>
    <div class="news-more" @click="newsInit()" v-if="getSplitNews.length = getPageNumber">
      <p>
        {{ more_text['text_' + selectedLang] }}
      </p>
    </div>
  </div>
</template>

<script>
import AppLine                  from '@/modules/app/components/AppLine';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "AppNews",
  components: {AppLine},

  data() {
    return {
      isMobile: true,
      news1main: {},
      news2main: {},
      last_news_text: {
        text_ru: 'ПОСЛЕДНИЕ НОВОСТИ',
        text_ua: 'ОСТАННІ НОВИНИ',
      },
      more_text: {
        text_ru: 'ПОКАЗАТЬ\u00A0ЕЩЁ',
        text_ua: 'ПОКАЗАТИ\u00A0ЩЕ',
      },
    }
  },

  computed: {
    ...mapGetters('lang', ['selectedLang']),
    ...mapGetters('news', ['getSplitNews', 'getPageNumber']),
  },

  methods: {
    ...mapActions('news', ['newsInit']),

    onResize() {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) {
        this.news1main = {
          'background-image': 'linear-gradient(to right, rgba(255, 255, 255) 40%, rgba(0, 0, 0, 0)), url(' + '/background-image.png' + ')',
          'background-size': 'cover'
        }
        this.news2main = {
          'background-image': 'linear-gradient(to left, rgba(255, 255, 255) 40%, rgba(0, 0, 0, 0)), url(' + '/background-image.png' + ')',
          'background-size': 'cover'
        }
      } else {
        this.news1main = {'background-image': 'url(' + '/background-image.png' + ')', 'background-size': 'cover'}
        this.news2main = {'background-image': 'url(' + '/background-image.png' + ')', 'background-size': 'cover'}
      }
    },
  },

  created() {
    this.onResize();
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style lang="scss">
.news-block {
  width: 100%;
  margin-bottom: 5%;
}

.news-header {
  font-weight: 600;
  font-size: $h28;
  line-height: $h44;
  text-align: center;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #000000;

  padding-top: 2%;
  padding-bottom: 2%;
}

.news {
  display: flex;
  flex-direction: row;
}

.news-1-main {
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
}

.news-2-main {
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-right: 10%;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
}

.news-main-text {
  width: 40%;
  background: #FFFFFF;
  padding: 3% 0;
}

.news-main-text-header {
  font-weight: 800;
  font-size: $h36;
  line-height: $h56;

  letter-spacing: 0.1em;

  color: #000000;
}

.news-main-text-description {
  font-weight: 600;
  font-size: $h14;
  line-height: $h22;
  letter-spacing: 0.05em;

  color: #000000;
}

.news-aside {
  width: 10%;
  background: #E21E24;
}

.news-more {
  display: flex;
  justify-content: center;
  align-content: center;
}

.news-more p {
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  border-radius: 50px;
  font-weight: bold;
  font-size: $h18;
  line-height: $h28;
  letter-spacing: 0.1em;
  display: flex;
  padding: 5px 15px;
  color: #2C2C2C;
  margin-bottom: 0;
  cursor: pointer;
}

@media (max-width: 768px) {
  .news-header {
    display: flex;
    justify-content: center;
    padding: 0;
  }

  .news-header span {
    position: relative;
    top: -25px;
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    background: #FFFFFF;
    border-radius: 59.5px;

    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    color: #2C2C2C;

  }
  .news-aside {
    display: none;
  }

  .news-main-text {
    padding: 10%;
    width: 70%;
    background: linear-gradient(180deg, #232323 0%, rgba(0, 0, 0, 0) 100%);
  }

  .news-main-text-header {
    display: none;
  }

  .news-main-text-description {
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }
}
</style>
