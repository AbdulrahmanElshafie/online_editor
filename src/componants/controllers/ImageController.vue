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

  /* Style the active button */
  .btn.active {
    background-color: #007bff; /* Optional: change to indicate active state */
    color: white;
  }
</style>

<template>
    <div class="layer-controller hidden active">
        <p class="text-main-color">
            Image Properties
        </p>
        <div class="accordion" id="image-controller">
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
                     aria-labelledby="transform-heading" data-bs-parent="#image-controller">
                    <div class="accordion-body">
                        <div class="card card-body border-0">
                            <div class="card-title">Transform</div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group p-2">
                                    <input type="number" class="form-control" @input="setTransform(tx=$event.target.value)">
                                    <span class="input-group-image image-secondary bg-transparent">X</span>
                                </div>
                                <div class="input-group p-2">
                                    <input type="number" class="form-control" @input="setTransformY(ty=$event.target.value)">
                                    <span class="input-group-image image-secondary bg-transparent">Y</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group p-2">
                                    <input type="number" class="form-control" @input="setTransformW(scaleX$event.target.value)">
                                    <span class="input-group-image image-secondary bg-transparent">W</span>
                                </div>
                                <div class="input-group p-2">
                                    <input type="number" class="form-control" @input="setTransformH(scaleY=$event.target.value)">
                                    <span class="input-group-image image-secondary bg-transparent">H</span>
                                </div>
                            </div>

                            <div class="d-flex align-items-center justify-content-between mt-2">
                            
                            <div>
                                <div class="card-title">Flip</div>
                                <div class="input-group p-2">
                                    <button class="btn btn-secondary" id="flip-horizontal" data-bs-toggle="tooltip" 
                                    title="Flip Horizontal" @click="setTransform(flipH=true)">
                                        <i class="fi fi-rr-reflect-horizontal"></i>
                                    </button>
                                    <button class="btn btn-secondary" id="flip-vertical" data-bs-toggle="tooltip"
                                    title="Flip Vertical" @click="setTransform(flipV=true)">
                                        <i class="fi fi-rr-reflect-vertical"></i>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div class="card-title">Rotate</div>
                                <div class="input-group p-2">
                                    <input type="number" class="form-control" @input="setTransform(rotation=$event.target.value)">
                                    <span class="input-group-image image-secondary bg-transparent">
                                        <i class="suffix">o</i>
                                    </span>

                                </div>
                           
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
                     aria-labelledby="transparency-heading" data-bs-parent="#image-controller">
                    <div class="accordion-body">
                        <div class="card card-body border-0">
                            <div class="card-title">Transparency</div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group p-2">
                                    <input type="range" class="form-range" min="0" max="100" value="100" @input="setTransparency($event.target.value)">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        
        <div class="card card-body">
            <p class="text-main-color card-title">Fill</p>
            <div class="d-flex align-items-center justify-content-start">
                <span class="input-group-text text-secondary bg-transparent border-0">Color</span>
                <input type="color" class="form-control p-1 list-square-40" @input="setColor($event.target.value)"/>
            </div>
        </div>

        <div class="card card-body">
            <p class="text-main-color card-title">Border</p>
            <div class="d-flex align-items-center justify-content-start">
                <input type="color" class="form-control p-1 list-square-40" @input="setBorder(color=$event.target.value)"/>
                <input type="number" class="form-control p-1 list-square-40" id="BorderSizeInput" min="0" value="0" list="BorderSizeOptions" @input="setBorder(width=$event.target.value)"/>
                <datalist id="BorderSizeOptions">
                    <option value="2"></option>
                    <option value="4"></option>
                    <option value="6"></option>
                    <option value="8"></option>
                    <option value="10"></option>
                    <option value="12"></option>
                    <option value="14"></option>
                </datalist>
                <select class="form-control p-1 list-square-40" @input="setBorder(style=$event.target.value)">
                    <option value="Normal">Normal</option>
                    <option value="Dotted">Dotted</option>
                    <option value="Dashed">Dashed</option>
                </select>
            </div>
        </div>

        <div class="card card-body">
            <p class="text-main-color card-title">Shadow</p>
            <div class="d-flex align-items-center justify-content-start">
                
                <input type="color" class="form-control p-1 list-square-40" @input="setShadow(color=$event.target.value)"/>
                <input type="number" class="form-control p-1 list-square-40" min="1" value="1" @input="setShadow(x=$event.target.value)"/>
                <i class="suffix">X</i>
                <input type="number" class="form-control p-1 list-square-40" min="1" value="1" @input="setShadow(y=$event.target.value)"/>
                <i class="suffix">Y</i>
                <input type="number" class="form-control p-1 list-square-40" min="1" value="1" @input="setShadow(blur=$event.target.value)"/>
                <i class="suffix">Blur</i>

            </div>
        </div>
        
        <div class="card card-body">

            <p class="text-main-color card-title">Align</p>
        <div class="btn-group" role="group" aria-label="Text alignment">
            <button
            class="btn"
            :class="{ 'btn-primary': selectedAlignment === 'left', 'btn-secondary': selectedAlignment !== 'left' }"
            @click="setAlignment('left')"
            data-bs-toggle="tooltip"
            title="Align Left"
            style="margin-right: 20px;"
            >
            <i class="fa-solid fa-align-left"></i>
            </button>

            <button
            class="btn"
            :class="{ 'btn-primary': selectedAlignment === 'right', 'btn-secondary': selectedAlignment !== 'right' }"
            @click="setAlignment('right')"
            data-bs-toggle="tooltip"
            title="Align Right"
            style="margin-right: 20px;"
            >
            <i class="fa-solid fa-align-right"></i>
            </button>

            <button
            class="btn"
            :class="{ 'btn-primary': selectedAlignment === 'center', 'btn-secondary': selectedAlignment !== 'center' }"
            @click="setAlignment('center')"
            data-bs-toggle="tooltip"
            title="Align Center"
            >
            <i class="fa-solid fa-align-center"></i>
            </button>
        </div>

        </div>

        </div>
    </div>
</template>

<script>
import Tooltip from 'bootstrap/js/dist/tooltip';

export default {
    name: 'ImageController',
    props: {
        svgItem: Object,
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
        setTransparency(t) {
            element.opacity(t / 100);
        },

        setAlignment(alignment) {
            element.css({
                "align": alignment
            })
        },

        setTransform(tx=None, ty=None, scaleX=None, scaleY=None, rotation=None, flipV=false, flipH=false) {
            tx = tx || element.transform('translateX');
            ty = ty || element.transform('translateY');
            scaleX = scaleX || element.transform('scaleX');
            scaleY = scaleY || element.transform('scaleY');
            rotation = rotation || element.transform('rotate');
            element.transform({
                tx:tx,
                ty:ty,
                scaleX:scaleX,
                scaleY:scaleY,
                rotation:rotation,
                flipV:flipV,
                flipH:flipH
            })
        },

        setColor(color){
            element.fill({
                color:color,
            })
        },

        setBorder(color, width, style){
            element.stroke({
                color:color,
                width:width
            })
            element.css({
                    "border-style": style,
                })
        },

        setShadow(color, x, y, blur){
            element.css({
                "box-shadow": `${x}px ${y}px ${blur}px ${color}`
            })  
        },

    }
}


</script>