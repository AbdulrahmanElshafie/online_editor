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
                                    <input type="number" class="form-control" id="translateX" @input="setTransform($event.target.value)" :value="imageElement.transform('translateX')">
                                    <span class="input-group-image image-secondary bg-transparent">X</span>
                                </div>
                                <div class="input-group p-2">
                                    <input type="number" class="form-control" id="translateY" @input="setTransform(undefined, $event.target.value)"  :value="imageElement.transform('translateY')">
                                    <span class="input-group-image image-secondary bg-transparent">Y</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group p-2">
                                    <input type="number" class="form-control" @input="resize(null, $event.target.value)" :value="imageElement.width()">
                                    <span class="input-group-image image-secondary bg-transparent">W</span>
                                </div>
                                <div class="input-group p-2">
                                    <input type="number" class="form-control" @input="resize($event.target.value, null)" :value="imageElement.height()">
                                    <span class="input-group-image image-secondary bg-transparent">H</span>
                                </div>
                            </div>

                            <div class="d-flex align-items-center justify-content-between mt-2">
                            
                            <div>
                                <div class="card-title">Flip</div>
                                <div class="input-group p-2">
                                    <button class="btn btn-secondary" id="flip-horizontal" data-bs-toggle="tooltip" 
                                    title="Flip Horizontal" @click="flipy()">
                                        <i class="fi fi-rr-reflect-horizontal"></i>
                                    </button>
                                    <button class="btn btn-secondary" id="flip-vertical" data-bs-toggle="tooltip"
                                    title="Flip Vertical" @click="flipx()">
                                        <i class="fi fi-rr-reflect-vertical"></i>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div class="card-title">Rotate</div>
                                <div class="input-group p-2">
                                    <input type="number" class="form-control" @input="rotate($event.target.value)" :value="this.imageElement.transform('rotate')">
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
                                    <input type="range" class="form-range" min="0" max="100" value="100" @input="setTransparency($event.target.value)"
                                    :value="this.imageElement.opacity()">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>

        <div class="card card-body">
            <p class="text-main-color card-title">Border</p>
            <div class="d-flex align-items-center justify-content-start">
                <input type="color" class="form-control p-1 list-square-40" id="BorderColor" @input="setBorder()" value='#000000'/>
                <input type="number" class="form-control p-1 list-square-40" id="BorderWidth" min="0" value="0" list="BorderSizeOptions" @input="setBorder()"/>
                <datalist id="BorderSizeOptions">
                    <option value="2"></option>
                    <option value="4"></option>
                    <option value="6"></option>
                    <option value="8"></option>
                    <option value="10"></option>
                    <option value="12"></option>
                    <option value="14"></option>
                </datalist>
                <select class="form-control p-1 list-square-40" id="BorderStyle" @input="setBorder()" value="Normal">
                    <option value="Normal">Normal</option>
                    <option value="Dotted">Dotted</option>
                    <option value="Dashed">Dashed</option>
                </select>
            </div>
        </div>

        <!-- <div class="card card-body">
            SHADOW BOX
            <p class="text-main-color card-title">Shadow</p>
            <div class="d-flex align-items-center justify-content-start">
                
                <input type="color" class="form-control p-1 list-square-40" id="ShadowColor" @input="setShadow()" value='#000000'/>
                <input type="number" class="form-control p-1 list-square-40" id="ShadowX" min="1" value="1" @input="setShadow()"/>
                <i class="suffix">X</i>
                <input type="number" class="form-control p-1 list-square-40" id="ShadowY" min="1" value="1" @input="setShadow()"/>
                <i class="suffix">Y</i>
                <input type="number" class="form-control p-1 list-square-40" id="ShadowBlur" min="1" value="1" @input="setShadow()"/>
                <i class="suffix">Blur</i>

            </div>
        </div> -->
        
        <!-- <div class="card card-body">
            ALIGN BOX
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

        </div> -->

        </div>
    </div>
</template>

<script>
import { flip } from '@popperjs/core';
import Tooltip from 'bootstrap/js/dist/tooltip';

export default {
    name: 'ImageController',
    props: {
        imageElement: {
            type: Object,
            required: true,
        },
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
            this.imageElement.opacity(t / 100);
        },

        // setAlignment(alignment) {
        //     this.imageElement.css({
        //         "align": alignment
        //     })
        // },


        setTransform(tx, ty) {
            if (tx == undefined) 
                tx = 0;
            else {
                if (this.imageElement.remember("tx") == undefined)
                    this.imageElement.remember("tx", tx)
                else{
                    var temp_tx = tx;
                    tx = tx - this.imageElement.remember("tx");
                    this.imageElement.remember("tx", temp_tx);
                }
            }
            if (ty == undefined) 
                ty = 0;
            else {
                if (this.imageElement.remember("ty") == undefined)
                    this.imageElement.remember("ty", ty)
                else{
                    var temp_ty = ty;
                    ty = ty - this.imageElement.remember("ty");
                    this.imageElement.remember("ty", temp_ty);
                }
            }

            // this.imageElement.dmove(tx, ty);
            console.log("tx, ty", tx, ty);
            this.imageElement.center(this.imageElement.cx() + tx, this.imageElement.cy() + ty);
        },

        rotate(angle) {
            console.log("before this.imageElement.transform('rotate')", this.imageElement.transform('rotate'));
            console.log("before angle", angle);
            this.imageElement.rotate(this.imageElement.transform('rotate'));
            console.log("after 1 this.imageElement.transform('rotate')", this.imageElement.transform('rotate'));
            var rotation_angle = angle - this.imageElement.transform('rotate');
            console.log("after angle", angle);
            this.imageElement.rotate(rotation_angle);
            console.log("after 2 this.imageElement.transform('rotate')", this.imageElement.transform('rotate'));
        },

        flipx() {
            this.imageElement.flip('x');
        },

        flipy() {
            this.imageElement.flip('y');
        },

        resize(height, width) {
            if (width != undefined){
                this.imageElement.width(width);
            }
            if (height != undefined){
                this.imageElement.height(height);
            }
        },

        setBorder(){
            var color = document.getElementById("BorderColor").value;
            var width =  document.getElementById("BorderWidth").value;
            var style = document.getElementById("BorderStyle").value;
            console.log(color, width, style)
            this.imageElement.stroke({
                color:color,
                width:width,
                opacity: 1,
            })
            this.imageElement.css("border-style", style)
        },

        // setShadow(){
        //     var color = document.getElementById("ShadowColor").value;
        //     var x = document.getElementById("ShadowX").value;
        //     var y = document.getElementById("ShadowY").value;
        //     var blur = document.getElementById("ShadowBlur").value;
        //     console.log(color, x, y, blur)
        //     this.imageElement.css({
        //         "box-shadow": `${x}px ${y}px ${blur}px ${color}`
        //     })  
        // },

    }
}


</script>