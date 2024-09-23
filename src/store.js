import {reactive} from "vue";

export const store = reactive ({
    mediaMovieList: [],
    mediaSeriesList: [],
    languageToCountry: {
        en: 'us',
        fr: 'fr',
        de: 'de',
        it: 'it',
        es: 'es',
        zh: 'cn',
        ja: 'jp',
      }
});