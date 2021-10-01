<template>
  <div class="contact-block container">
    <div class="contact-header">
      {{ contact_text['text_' + selectedLang] }}
    </div>
    <div class="contact-info">
      <b-row align-v="center">
        <b-col cols="1">
          <div class="contact-info-icon">
            <img src="@/assets/icons/Location.png">
          </div>
        </b-col>
        <b-col>
          <div>
            {{ texts[14]['text_' + selectedLang] }}
          </div>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col cols="1">
          <div class="contact-info-icon">
            <img src="@/assets/icons/Phone.png">
          </div>
        </b-col>
        <b-col>
          <div>
            <div class="contact-info-phone-number">
              <a :href="'tel:' + texts[15]['text_' + selectedLang]">
                {{ texts[15]['text_' + selectedLang] }}
              </a>
            </div>
            <div class="contact-info-phone-number">
              <a :href="'tel:' + texts[16]['text_' + selectedLang]">
                {{ texts[16]['text_' + selectedLang] }}
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col cols="1">
          <div class="contact-info-icon">
            <img src="@/assets/icons/Mail.png">
          </div>
        </b-col>
        <b-col>
          <div>
            Email: {{ texts[17]['text_' + selectedLang] }}
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="contact-description">
      {{ texts[18]['text_' + selectedLang] }}
    </div>
    <div class="contact-button showForm">
      <p>
        {{ order_text['text_' + selectedLang] }}
      </p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AppContact",

  data() {
    return {
      contact_text: {
        text_ru: 'КОНТАКТЫ',
        text_ua: 'КОНТАКТИ',
      },
      order_text: {
        text_ru: 'ПОЛУЧИТЬ\u00A0КОНСУЛЬТАЦИЮ',
        text_ua: 'ОТРИМАТИ\u00A0КОНСУЛЬТАЦІЮ',
      },
    }
  },

  computed: {
    ...mapGetters('lang', ['selectedLang', 'texts']),
  }
}
</script>

<style lang="scss">
.contact-block {
  background: #363636;
  padding-top: 3%;
  padding-bottom: 3%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.contact-header {
  font-weight: bold;
  font-size: $h36;
  line-height: $h56;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #FFFFFF;

  border-bottom: 5px solid #E21E24;;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
  }
}

.contact-info {
  font-weight: normal;
  font-size: $h18;
  line-height: $h28;

  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 13px;
  }
}

.contact-info > div {
  padding: 1% 0;
}

.contact-info-div {
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
}

.contact-info-icon img{
  height: 45px;

  @media (max-width: 768px) {
    height: 20px;
  }
}

.contact-info-phone-number a {
  font-weight: normal;

  color: #FFFFFF;
}

.contact-description {
  font-weight: normal;
  font-size: $h18;
  line-height: $h28;
  text-align: center;
  letter-spacing: 0.05em;

  color: #FFFFFF;

  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 12px;
  }
}

.contact-button {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 2% 2% 0 2%;
}

.contact-button p {
  background: #E21E24;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  border-radius: 50px;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: $h28;
  letter-spacing: 0.1em;
  display: flex;
  padding: 5px 15px;
  color: #FFFFFF;
  margin-bottom: 0;
}
</style>
