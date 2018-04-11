
import { configure } from '@storybook/vue'
import Vue from 'vue'

// Import your custom components.
import VueButton from '../src/components/atoms/VueButton/VueButton.vue'

// Install Vue plugins.
// Vue.use(Vuex);

// Register custom components.
Vue.component('vue-button', VueButton);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/components/atoms/VueButton/VueButton.stories.js');
}

configure(loadStories, module);
