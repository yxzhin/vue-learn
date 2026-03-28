import { definePreset } from "@primeuix/themes"
import Aura from "@primeuix/themes/aura"

import { primary, surface } from "./colors"
import { radius } from "./radius"
import { components } from "./components"

export const AppPreset = definePreset(Aura, {
  primitive: {
    borderRadius: radius,
  },
  semantic: {
    primary: primary,
    surface: surface,
    colorScheme: {
      light: {
        semantic: {
          surface: surface,
        },
      },
      dark: {
        semantic: {
          surface: surface,
        },
      },
    },
  },
  components: components,
})
