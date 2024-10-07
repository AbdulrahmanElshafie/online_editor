<style scoped>
.actions-left {
    background-color: var(--color2);
    border-right: 1px solid var(--secondary-color);
    max-height: 93vh;
    min-width: 5vw;
}

.actions-left .wrapper {
    border-radius: 30px;
}

.actions-left-item {
    color: var(--color6);
}

.actions-left-item.active {
    color: var(--color1);
    background-color: var(--color6);
}

.link-square-40 {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.bg-color-3 {
    background-color: var(--color3);
}
</style>

<template>
    <div
        class="actions-left py-4 px-2">
        <div
            class="wrapper bg-color-3 d-flex align-items-center justify-content-center flex-xxl-column flex-xl-column flex-md-column flex-sm-row flex-row">
            <a role="button" @click="actionLiftToggle"
               class="actions-left-item link-square-40 d-flex align-items-center justify-content-center p-0 m-1">
                <i class="fa-solid fa-plus"></i>
            </a>
            <a role="button" @click="actionLiftToggle"
               class="actions-left-item link-square-40 d-flex align-items-center justify-content-center p-0 m-1">
                <i class="fa-solid fa-layer-group"></i>
            </a>
            <a role="button" @click="actionLiftToggle"
               class="actions-left-item active link-square-40 d-flex align-items-center justify-content-center p-0 m-1">
                <i class="fa-solid fa-sliders"></i>
            </a>
            <a role="button" @click="actionLiftToggle"
               class="actions-left-item link-square-40 d-flex align-items-center justify-content-center p-0 m-1">
                <i class="fa-solid fa-hand-sparkles"></i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: "ActionLeft",
    methods: {
        actionLiftToggle(e) {
            document.querySelectorAll('.actions-left-item').forEach((item) => {
                item.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
        },
    }
}
</script>