import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faChevronLeft, faChevronRight, faCirclePlus, faCircle } from '@fortawesome/free-solid-svg-icons'

export const createFontAwesome = (app) => {
  library.add([
    faChevronLeft,
    faChevronRight,
    faCirclePlus,
    faCircle
  ])
  
  app.component('font-awesome-icon', FontAwesomeIcon)
} 
