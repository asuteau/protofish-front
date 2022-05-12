// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@/styles/variables.scss'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      }
    }
  }
)
