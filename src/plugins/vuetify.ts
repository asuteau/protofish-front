// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@/styles/variables.scss'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'

const protofishTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#364F6B',
    secondary: '#3FC1C9',
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
      themes: {
        protofishTheme,
      }
    }
  }
)
