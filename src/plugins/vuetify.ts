// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@/styles/variables.scss'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'

const protofishTheme = {
  dark: false,
  colors: {
    background: '#EEEEEE',
    surface: '#FFFFFF',
    primary: '#006E7F',
    secondary: '#F8CB2E',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      }
    },
    theme: {
      defaultTheme: 'protofishTheme',
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 2,
        darken: 2,
      },
      themes: {
        protofishTheme,
      }
    }
  }
)
