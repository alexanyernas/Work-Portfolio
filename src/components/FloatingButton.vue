<template>
  <div class="floating-container">
    <div class="floating-button">
      <v-icon icon="mdi-translate-variant" />
    </div>
    <div class="element-container">
        <span class="float-element" @click="changeLanguage('es')">
          ES
        </span>
        <span class="float-element" @click="changeLanguage('en')">
          EN
        </span>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import i18n from '../plugins/i18n';

// Styling
import './styles/FloatingButton.css';

export default defineComponent({
    name: 'FloatingButton',
    setup () {

      const changeLanguage = (lang) => {
        i18n.global.locale = lang;
      }

      return { 
        changeLanguage
      }
    }
});
</script>