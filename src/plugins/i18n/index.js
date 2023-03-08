import { createI18n } from "vue-i18n";
import en from './languages/en.json';
import es from './languages/es.json'; 

const messages = {
    en,
    es
}

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages
});

export default i18n;