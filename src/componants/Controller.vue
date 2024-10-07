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
        <LayerController></LayerController>
        <TextController></TextController>
    </div>
</template>

<script>
import TextController from "@/componants/controllers/TextController.vue";
import LayerController from "@/componants/controllers/LayerController.vue";

export default {
    name: "Controller",
    components: {LayerController, TextController},
}
</script>