<style>

</style>

<template>
    <div>
        <ActionTop></ActionTop>
        <div
            class="wrapper d-flex flex-xxl-row flex-xl-row flex-md-row flex-sm-column flex-column flex-column-reverse">
            <ActionLeft></ActionLeft>
            <Controller></Controller>
            <Preview></Preview>
        </div>
    </div>
</template>

<script>
import ActionTop from "@/componants/ActionTop.vue";
import ActionLeft from "@/componants/ActionLeft.vue";
import Controller from "@/componants/Controller.vue";
import Preview from "@/componants/Preview.vue";

export default {
    name: "EditorLayout",
    components: {Preview, Controller, ActionLeft, ActionTop}
}
</script>