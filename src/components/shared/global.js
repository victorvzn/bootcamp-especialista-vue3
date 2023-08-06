import BaseButton from '@/components/shared/BaseButton.vue'
import BaseSelect from '@/components/shared/BaseSelect.vue'

import BaseTag from '@/components/shared/BaseTag.vue'

export const globalRegistration = (app) => {
  app.component('BaseButton', BaseButton)
  app.component('BaseSelect', BaseSelect)
  app.component('BaseTag', BaseTag)
}