import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import { createPinia } from 'pinia'

import FontAwesomePlugin from './plugins/FontAwesome'
import AppButton from './components/AppButton.vue'
import AppCountInput from './components/AppCountInput.vue'
import AppModalOverlay from './components/AppModalOverlay.vue'

const pinia = createPinia()

createApp(App)
	.use(createPinia)
	.use(FontAwesomePlugin)
	.use(pinia)
	.component('AppButton', AppButton)
	.component('AppCountInput', AppCountInput)
	.component('AppModalOverlay', AppModalOverlay)
	.mount('#app')
