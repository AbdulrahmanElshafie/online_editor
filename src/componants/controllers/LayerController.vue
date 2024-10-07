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
        <h2>
            {{ draw }}
        </h2>
    </div>
</template>

<script>

export default {
    name: 'LayerController',
    computed: {
        draw() {
            return this.$store.state.draw;
        }
    }
}
</script>