import { createApp } from "vue"
import App from "./App.vue"
import PrimeVue from "primevue/config"
import Aura from "@primeuix/themes/aura"
import { definePreset } from "@primeuix/themes"

const themePreset = definePreset(Aura, {
  primitive: {
    borderRadius: {
      sm: "6px",
      md: "10px",
      lg: "16px",
    },
  },

  semantic: {
    primary: {
      500: "#6366f1",
    },
  },

  components: {
    button: {
      borderRadius: "12px",
    },
    inputtext: {
      borderRadius: "10px",
    },
  },
})

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: themePreset,
    options: {
      darkModeSelector: ".theme-dark",
    },
  },
})
app.mount("#app")
