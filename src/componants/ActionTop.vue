<style scoped>
.actions-top {
    background-color: var(--color2);
    border-bottom: 1px solid var(--secondary-color);
    min-height: 7vh;
    max-height: 7vh;
}

.link-square-40 {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.link-rectangle-40 {
    height: 40px;
    width: 80px;
    border-radius: 20px;
}

.link-bg-color-3 {
    background-color: var(--color3);
}

.text-color-6 {
    color: var(--color6);
}

</style>

<template>
    <div class="actions-top d-flex align-items-center justify-content-between p-1 overflow-auto">
        <div class="d-flex align-items-center justify-content-center">
            <a role="button" @click="goBack"
               class="text-color-6 link-square-40 link-bg-color-3 d-flex align-items-center justify-content-center p-0 m-0">
                <i class="fa-solid fa-angle-left"></i>
            </a>
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <a role="button" @click="undo"
               class="text-color-6 link-square-40 link-bg-color-3 d-flex align-items-center justify-content-center p-0 my-0 mx-1">
                <i class="fa-solid fa-rotate-left"></i>
            </a>
            <a role="button" @click="redo"
               class="text-color-6 link-square-40 link-bg-color-3 d-flex align-items-center justify-content-center p-0 my-0 mx-1">
                <i class="fa-solid fa-rotate-right"></i>
            </a>
            <a role="button" @click="reset"
               class="text-color-6 link-rectangle-40 link-bg-color-3 d-flex align-items-center justify-content-center p-0 my-0 mx-1">
                Reset
            </a>
            <a role="button" @click="download"
               class="text-color-6 link-square-40 link-bg-color-3 d-flex align-items-center justify-content-center p-0 my-0 mx-1">
                <i class="fa-solid fa-arrow-down"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "ActionTop",
    methods: {
        goBack() {
            console.log('goBack action triggered');
        },
        undo() {
            console.log('undo action triggered');
        },
        redo() {
            console.log('redo action triggered');
        },
        reset() {
            console.log('reset action triggered');
        },
        download() {
            console.log('download action triggered');
        },
    }
}
</script>