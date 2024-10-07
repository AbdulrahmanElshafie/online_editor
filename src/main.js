import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import './assets/style.css';
import '@svgdotjs/svg.select.js/src/svg.select.css';

import {createApp} from 'vue';
import {createStore} from 'vuex'
import EditorLayout from "./EditorLayout.vue";

import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';

const store = createStore({
    state: {
        draw: null,
        selectedElement: null,
    },
    mutations: {
        setDraw(state, draw) {
            state.draw = draw
        },
        setSelectedElement(state, element) {
            state.selectedElement = element
        }
    },
    actions: {
        setDraw({commit}, draw) {
            commit('setDraw', draw)
        },
        setSelectedElement({commit}, element) {
            commit('setSelectedElement', element)
        }
    }
})

const app = createApp(EditorLayout);
app.use(store);
app.mount('#app');
