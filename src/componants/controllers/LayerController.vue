<style scoped>
.text-main-color {
    color: var(--main-color);
}

.hidden {
    display: none;
}

.hidden.active {
    display: block;
}

.list-group-item.active {
    background-color: var(--color3);
    border-color: var(--color4);
    color: var(--color6);
}
</style>

<template>
    <div class="layer-controller hidden active">
        <p class="text-main-color">
            Layer Explorer
        </p>
        <ul v-if="draw" class="list-group list-group-flush">
            <li v-for="(layer, index) in draw.children()" :key="index" class="list-group-item">
                <a role="button" @click="(e) => setSelectedElement(e, layer)">
                    {{ `${(layer.type || 'None' && layer.getId()).toUpperCase()} ${index}` }}
                </a>
                <!--                <ul v-if="layer.children()" class="list-group list-group-flush">-->
                <!--                    <li v-for="(child_layer, child_index) in layer.children()" :key="child_index"-->
                <!--                        class="list-group-item">-->
                <!--                        <a role="button" @click="(e) => setSelectedElement(e, child_layer)">-->
                <!--                            {{ `${(child_layer.type || 'None').toUpperCase()} ${child_index}` }}-->
                <!--                        </a>-->
                <!--                    </li>-->
                <!--                </ul>-->
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'LayerController',
    computed: {
        draw() {
            return this.$store.state.draw;
        },
        selectedElement() {
            return this.$store.state.selectedElement
        }
    },
    methods: {
        setSelectedElement(e, element) {
            e.preventDefault();
            document.querySelectorAll('.list-group-item')
                .forEach(elem => elem.classList.remove('active'));
            e.currentTarget.parentNode.classList.add('active');
            this.$store.dispatch('setSelectedElement', element);
        },
    }
}
</script>