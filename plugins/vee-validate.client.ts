import { setLocale } from 'yup'
import { suggestive } from 'yup-locale-ja'

setLocale(suggestive)

export default defineNuxtPlugin((nuxtApp) => {})
