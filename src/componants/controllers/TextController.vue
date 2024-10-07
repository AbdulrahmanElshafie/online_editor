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


.suffix {
    position: relative;
    right: -7px;
    top: -9px;
}

.link-square-40 {
    width: 40px;
    height: 40px;
    border: 1px solid var(--secondary-color);
    transition: all 0.5s ease;
}

.link-square-40.active {
    border: 1px solid var(--color6);
    box-shadow: 0 0 1px 2px var(--color3);
}

.text-color-6 {
    color: var(--color6);
}

.link-bg-color-1 {
    background-color: var(--color1);
}

.menu {
    position: absolute;
    top: 100%;
    display: none;
    transition: all 0.5s ease;
    z-index: 1111;
}

.menu.active {
    display: block;
}

.list-square-40 {
    width: 40px;
    height: 40px;
}
</style>

<template>
    <div class="text-controller hidden active">
        <p class="text-main-color">
            Text Properties
        </p>
        <div class="accordion" id="text-controller">
            <div class="accordion-item">
                <h2 class="accordion-header" id="transform-heading" data-bs-toggle="tooltip"
                    title="Transform">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#transform-collapse" aria-expanded="true"
                            aria-controls="transform-collapse">
                        <i class="fa-solid fa-rotate me-2"></i>
                        Transform
                    </button>
                </h2>
                <div id="transform-collapse" class="accordion-collapse collapse"
                     aria-labelledby="transform-heading" data-bs-parent="#text-controller">
                    <div class="accordion-body">
                        <div class="card card-body border-0">
                            <div class="card-title">Transform</div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group p-2">
                                    <input type="number" class="form-control">
                                    <span class="input-group-text text-secondary bg-transparent">X</span>
                                </div>
                                <div class="input-group p-2">
                                    <input type="number" class="form-control">
                                    <span class="input-group-text text-secondary bg-transparent">Y</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group p-2">
                                    <input type="number" class="form-control">
                                    <span class="input-group-text text-secondary bg-transparent">W</span>
                                </div>
                                <div class="input-group p-2">
                                    <input type="number" class="form-control">
                                    <span class="input-group-text text-secondary bg-transparent">H</span>
                                </div>
                            </div>
                            <div class="card-title">Rotate</div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group p-2">
                                    <input type="number" class="form-control">
                                    <span class="input-group-text text-secondary bg-transparent">
                                <i class="suffix">o</i>
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="transparency-heading" data-bs-toggle="tooltip"
                    title="Transparency">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#transparency-collapse" aria-expanded="true"
                            aria-controls="transparency-collapse">
                        <i class="fa-regular fa-eye me-2"></i>
                        Transparency
                    </button>
                </h2>
                <div id="transparency-collapse" class="accordion-collapse collapse"
                     aria-labelledby="transparency-heading" data-bs-parent="#text-controller">
                    <div class="accordion-body">
                        <div class="card card-body border-0">
                            <div class="card-title">Transparency</div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group p-2">
                                    <input type="range" class="form-range" min="0" max="100" value="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card card-body border-0 px-0 py-1">
            <div class="d-flex align-items-center justify-content-between">
                <div class="form-floating w-100">
                    <select class="form-select" id="font-family-select" aria-label="Font family"
                            data-bs-toggle="tooltip"
                            title="Family">
                        <option selected>Open Sans</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="font-family-select">Font family</label>
                </div>
            </div>
        </div>
        <div class="card card-body border-0 px-0 py-1">
            <div class="d-flex align-items-center justify-content-between">
                <div class="input-group w-50">
                    <input type="number" class="form-control w-50"/>
                    <span class="input-group-text text-secondary bg-transparent" data-bs-toggle="tooltip"
                          title="Size">pt</span>
                </div>
                <a role="button"
                   class="menu-toggle text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0"
                   data-bs-target="#text-align" data-bs-toggle="tooltip"
                   title="Align">
                    <i class="fa-solid fa-align-left"></i>
                </a>
                <a role="button"
                   class="menu-toggle text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0"
                   data-bs-target="#text-shape" data-bs-toggle="tooltip"
                   title="Shape">
                    <i class="fa-solid fa-font"></i>
                </a>
                <a role="button"
                   class="menu-toggle text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0"
                   data-bs-target="#text-decoration" data-bs-toggle="tooltip"
                   title="Decoration">
                    <i class="fa-solid fa-text-slash"></i>
                </a>
                <div id="text-align"
                     class="menu card card-body border-0 w-100 shadow shadow-lg mt-2">
                    <div class="card card-body border-0">
                        <div class="card-title">Text Align</div>
                        <div class="d-flex align-items-center justify-content-around">
                            <a role="button"
                               class="active text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0">
                                <i class="fa-solid fa-align-left"></i>
                            </a>
                            <a role="button"
                               class="text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0">
                                <i class="fa-solid fa-align-center"></i>
                            </a>
                            <a role="button"
                               class="text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0">
                                <i class="fa-solid fa-align-right"></i>
                            </a>
                            <a role="button"
                               class="text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0">
                                <i class="fa-solid fa-align-justify"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="text-shape"
                     class="menu card card-body border-0 w-100 shadow shadow-lg mt-2">
                    <div class="card card-body border-0">
                        <div class="card-title">Text Align</div>
                        <div class="d-flex align-items-center justify-content-around">
                            <a role="button"
                               class="active text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0">
                                <i class="fa-solid fa-a"></i>
                            </a>
                            <a role="button"
                               class="text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0">
                                <i class="fa-solid fa-a"></i>
                            </a>
                            <a role="button"
                               class="text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0">
                                <i class="fa-solid fa-a"></i>
                            </a>
                            <a role="button"
                               class="text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0">
                                <i class="fa-solid fa-a"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="text-decoration"
                     class="menu card card-body border-0 w-100 shadow shadow-lg mt-2">
                    <div class="card card-body border-0">
                        <div class="card-title">Text Decoration</div>
                        <div class="d-flex align-items-center justify-content-around">
                            <a role="button"
                               class="active text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0">
                                <i class="fa-solid fa-xmark"></i>
                            </a>
                            <a role="button"
                               class="text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0">
                                <i class="fa-solid fa-text-slash"></i>
                            </a>
                            <a role="button"
                               class="text-color-6 link-square-40 link-bg-color-1 d-flex align-items-center justify-content-center p-0 m-0">
                                <i class="fa-solid fa-underline"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="card card-body border-0 px-0 py-1">
            <p class="text-main-color">Fill</p>
            <div class="d-flex align-items-center justify-content-start">
                <input type="color" class="form-control p-1 list-square-40"/>
                <span class="input-group-text text-secondary bg-transparent border-0">Color</span>
            </div>
        </div>
    </div>
</template>

<script>
import {Tooltip} from "bootstrap";

export default {
    name: 'TextController',
    props: {
        svgItem: Object
    },
    mounted() {
        new Tooltip(document.body, {
            selector: "[data-bs-toggle='tooltip']",
            trigger: "hover",
            placement: "top",

        });
        document.querySelectorAll('.menu-toggle').forEach((item) => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.menu').forEach((menu_item) => {
                    const targetMenuID = item.getAttribute('data-bs-target').replace('#', '');
                    if (menu_item.getAttribute('id') === targetMenuID) {
                        menu_item.classList.toggle('active');
                    } else {
                        menu_item.classList.remove('active');
                    }
                });
            })
        })
    },
    methods: {
        transform() {
            console.log('transform action triggered');
        },
        transparency() {
            console.log('transparency action triggered');
        }
    }
}
</script>