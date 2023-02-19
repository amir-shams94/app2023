import { Notify } from 'quasar'
import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/animate/backInDown.css'
import '@quasar/extras/animate/backOutUp.css'
import '@quasar/extras/animate/fadeIn.css'
import '@quasar/extras/animate/fadeOut.css'


// To be used on app.use(Quasar, { ... })
export default {
  plugins: {
    Notify,
},
 animations: ['backInDown', 'backOutUp', 'fadeIn', 'fadeOut'],

  config: {},
    
  
}