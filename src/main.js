import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import './assets/style.css';
import '@svgdotjs/svg.select.js/src/svg.select.css';
import '@flaticon/flaticon-uicons/css/all/all.css';

import {createApp} from 'vue';
import {createStore} from 'vuex'
import EditorLayout from "./EditorLayout.vue";

import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';

const store = createStore({
    state: {
        draw: null,
        selectedElement: null,
        actionBar: 'LayerController',
    },
    mutations: {
        setDraw(state, draw) {
            state.draw = draw
        },
        setSelectedElement(state, element) {
            if (state.selectedElement) {
                state.selectedElement.select(false);
            }
            if (element) {
                element.select({
                    createHandle: (group) => group.rect(30, 30).css({fill: "red"}),
                    updateHandle: (shape, p) => shape.center(p[0], p[1]),
                    createRot: (group) => {
                        group.circle(40).move(0, -120).css({fill: 'yellow'});
                        group.line(0, 80, 0, 0).move(20, 0).stroke({color: 'transparent', width: 2, linecap: 'round'});
                        return group;
                    },
                    updateRot: (shape, p) => shape.center(p[0], p[1]),
                }).resize();
                state.selectedElement = element;
            }
        },
        setActionBar(state, action) {
            state.actionBar = action
        }
    },
    actions: {
        setDraw({commit}, draw) {
            commit('setDraw', draw)
        },
        setSelectedElement({commit}, element) {
            commit('setSelectedElement', element)
        },
        setActionBar({commit}, action) {
            commit('setActionBar', action)
        }
    }
})

const app = createApp(EditorLayout);
app.use(store);
app.mount('#app');
