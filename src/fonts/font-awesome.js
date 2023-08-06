import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faChevronRight, faCirclePlus, faCircle } from '@fortawesome/free-solid-svg-icons'

export const createFontAwesome = (app) => {
  library.add([
    faChevronRight,
    faCirclePlus,
    faCircle
  ])
  
  app.component('font-awesome-icon', FontAwesomeIcon)
} 
