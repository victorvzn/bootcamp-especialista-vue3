import BaseButton from '@/components/shared/BaseButton.vue'
import BaseInput from '@/components/shared/BaseInput.vue';
import BaseSelect from '@/components/shared/BaseSelect.vue';

export const globalRegistration = (app) => {
  app.component('BaseButton', BaseButton)
  app.component('BaseInput', BaseInput)
  app.component('BaseSelect', BaseSelect)
}