<template>
  <div id="AppForm" class="AppForm container">
    <div class="AppForm__modal">
      <div class="AppForm__modal__leftColumn">
        <div class="AppForm__modal__leftColumn__header">
          {{ texts[19]['text_' + selectedLang] }}
        </div>
        <div class="AppForm__modal__leftColumn__description">
          {{ texts[20]['text_' + selectedLang] }}
        </div>
        <div class="AppForm__modal__leftColumn__naming">
          {{ texts[21]['text_' + selectedLang] }}
        </div>
      </div>
      <div class="AppForm__modal__rightColumn">
        <span class="AppForm__modal__rightColumn__close">&times;</span>
        <div class="AppForm__modal__rightColumn__header">
          {{ texts[22]['text_' + selectedLang] }}
        </div>

        <div class="AppForm__modal__rightColumn__description">
          {{ texts[23]['text_' + selectedLang] }}<br>
          {{ texts[24]['text_' + selectedLang] }}<br>
          {{ texts[25]['text_' + selectedLang] }}<br>
        </div>

        <form class="AppForm__modal__rightColumn__form" @submit.prevent.stop="onSubmit">
          <div class="AppForm__modal__rightColumn__form__inputs">
            <input type="text" :placeholder="name_text['text_' + selectedLang]" v-model="form.name"
                   :style="{'background-image': 'url(' + require('@/assets/icons/Group.svg') + ')', 'background-repeat': 'no-repeat', 'background-position-x': '97%', 'background-position-y': 'center', 'background-size': '5%'}"/>
            <input type="text" :placeholder="phone_text['text_' + selectedLang]" v-model="form.phone_number"
                   :style="{'background-image': 'url(' + require('@/assets/icons/phone.svg') + ')', 'background-repeat': 'no-repeat', 'background-position-x': '97%', 'background-position-y': 'center', 'background-size': '5%'}"/>
            <input type="text" :placeholder="comment_text['text_' + selectedLang]" v-model="form.text"/>
          </div>
          <div class="AppForm__modal__rightColumn__form__button">
            <input type="submit" :value="button_text['text_' + selectedLang]">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppForm",

  data() {
    return {
      form        : {
        name        : '',
        phone_number: '',
        text        : ''
      },
      span        : document.getElementsByClassName("AppForm__modal__rightColumn__close")[0],
      btn         : document.getElementsByClassName("showForm"),
      base_url    : process.env.VUE_APP_BASE_URL + '/',
      name_text   : {
        text_ru: 'Введите ваше имя',
        text_ua: 'Введіть ваше ім\'я',
      },
      phone_text  : {
        text_ru: 'Введите ваш телефон',
        text_ua: 'Введіть ваш телефон',
      },
      comment_text: {
        text_ru: 'Коментарий',
        text_ua: 'Коментар',
      },
      button_text : {
        text_ru: 'ОСТАВИТЬ ЗАЯВКУ',
        text_ua: 'ЗАЛИШИТИ ЗАЯВКУ',
      },
    }
  },

  methods: {
    ...mapActions('feedback', [ 'sendFeedback' ]),

    async onSubmit() {
      const requestData = { feedback: this.form };
      const response = await this.sendFeedback(requestData);
      setTimeout(() => {
        document.getElementById("AppForm").style.display = "none"
        this.clearForm();
      }, 300)
    },

    clearForm() {
      Object.keys(this.form).forEach((key) => this.form[key] = '');
    }
  },

  computed: {
    ...mapGetters('lang', [ 'selectedLang', 'texts' ]),
  },

  mounted() {
    this.span = document.getElementsByClassName("AppForm__modal__rightColumn__close")[0];
    this.btn = document.getElementsByClassName("showForm");

    this.span.onclick = function () {
      document.getElementById("AppForm").style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target === this.modal) {
        document.getElementById("AppForm").style.display = "none";
      }
    }

    for (let btnKey in this.btn) {
      if (typeof (this.btn[btnKey]) === 'object') {
        this.btn[btnKey].onclick = function () {
          document.getElementById("AppForm").style.display = "flex";
        }
      }
    }
  },
}
</script>

<style lang="scss">
.AppForm {
  display: none;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-content: center;
  align-items: center;

  &__modal {
    background-color: #fefefe;
    margin: auto;
    border-radius: 30px;
    overflow: hidden;
    display: flex;

    &__leftColumn {
      width: 45%;
      background-color: #E21E24;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3%;

      @media (max-width: 768px) {
        display: none;
      }

      &__header {
        padding-bottom: 5%;

        font-weight: 500;
        font-size: $h18;
        line-height: $h28;
        letter-spacing: 0.05em;

        color: #FFFFFF;
      }

      &__description {
        font-weight: normal;
        font-size: $h14;
        line-height: $h22;
        letter-spacing: 0.05em;
        padding: 0 50px;
        flex-grow: 1;

        color: #FFFFFF;

      }

      &__naming {
        align-self: flex-end;

        font-weight: normal;
        font-size: $h14;
        line-height: $h22;

        letter-spacing: 0.05em;

        color: #FFFFFF;
      }
    }

    &__rightColumn {
      width: 55%;
      display: flex;
      flex-direction: column;
      padding: 3% 6%;

      @media (max-width: 768px) {
        width: 100%;
        padding: 10% 12%;
      }

      &__close {
        position: relative;
        color: #aaaaaa;
        font-size: 40px;
        height: 0;
        @media (max-width: 768px) {
          top: -10%;
          right: -97%;
        }
        top: -8%;
        right: -100%;
      }

      &__close:hover,
      &__close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }

      &__header {
        padding-bottom: 5%;
        align-self: center;

        font-weight: 500;
        font-size: $h18;
        line-height: $h28;
        letter-spacing: 0.05em;

        color: #000000;
      }

      &__description {
        padding-bottom: 5%;

        font-weight: 300;
        font-size: $h14;
        line-height: $h22;
        letter-spacing: 0.05em;

        color: #000000;
      }

      &__form {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-between;

        &__inputs {
          input {
            width: 100%;
            border: 1px solid #AEAEAE;
            box-sizing: border-box;
            border-radius: 5px;
            overflow: hidden;
            margin: 5px 0;
            display: flex;
            flex-direction: row;
            padding: 3% 10% 3% 3%;
          }

          input[type=text]:focus {
            border: 2px solid #535353;
            outline: none;
          }
        }

        &__button {
          display: flex;
          justify-content: center;
          align-content: center;
          margin-top: 10%;

          input {
            background: #E21E24;
            box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
            border-radius: 50px;
            font-weight: bold;
            font-size: $h14;
            line-height: $h16;
            letter-spacing: 0.1em;
            display: flex;
            padding: 5% 10%;
            color: #FFFFFF;
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
