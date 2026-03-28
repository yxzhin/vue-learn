import { createApp } from "vue"
import App from "./App.vue"
import PrimeVue from "primevue/config"
import { AppPreset } from "./theme"

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: AppPreset,
    options: {
      prefix: "p",
      darkModeSelector: ".theme-dark",
      cssLayer: false,
    },
  },
})
app.mount("#app")
