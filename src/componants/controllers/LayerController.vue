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
</style>

<template>
    <div class="layer-controller hidden active">
        <p class="text-main-color">
            Layer Explorer
        </p>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="item in svgItems" :key="item">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'LayerController',
    props: {
        svgItems: Array
    },
}
</script>