<style scoped>
.controller {
    background-color: var(--color1);
    border-right: 1px solid var(--secondary-color);
    max-height: 93vh;
    min-width: 25vw;
    overflow: scroll;
}
</style>

<template>
    <div class="controller py-4 px-2">
        <TextController v-if="actionBar === 'EditController'" :textElement="selectedElement"></TextController>
        <LayerController v-if="actionBar === 'LayerController'"></LayerController>
    </div>
</template>

<script>
import TextController from "@/componants/controllers/TextController.vue";
import LayerController from "@/componants/controllers/LayerController.vue";

export default {
    name: "Controller",
    components: {LayerController, TextController},
    computed: {
        draw() {
            return this.$store.state.draw;
        },
        selectedElement() {
            return this.$store.state.selectedElement;
        },
        actionBar() {
            return this.$store.state.actionBar;
        }
    },
}
</script>