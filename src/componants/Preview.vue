<style scoped>
.preview {
    min-width: 70%;
    max-height: 93vh;
}

#preview {
    max-height: 75%;
    overflow: scroll;
}

#viewport {
    max-height: 25%;
}
</style>

<template>
    <div class="preview py-4 px-2">
        <p>Preview</p>
        <div class="form-group">
            <input type="url" class="form-control" id="url" placeholder="Enter URL"/>
            <input type="button" class="form-control btn btn-primary" value="Fire" @click="initialize"/>
        </div>
        <div id="preview"></div>
        <div id="viewport" class="d-flex align-items-center justify-content-center">
            <label class="w-100">
                Zoom
                <input @change="zoom" type="range" class="form-range" min="100" max="500" step="25">
            </label>
        </div>
    </div>
</template>
<script>
import {SVG} from "@svgdotjs/svg.js";
import "@svgdotjs/svg.draggable.js";
import "@svgdotjs/svg.select.js";
import '@svgdotjs/svg.resize.js';
import axios from "axios";

export default {
    name: "Preview",
    data() {
        return {
            draw: null,
            initialDraw: null,
        }
    },

    methods: {
        zoom(e) {
            const currentZoomValue = `${e.currentTarget.value}%`;
            this.draw.width(currentZoomValue);
        },
        initialize() {
            if (!this.draw) {
                this.draw = new SVG().addTo('#preview').size("100%", "100%");
                const url = document.getElementById('url');
                if (url.value) {
                    axios.get(url.value, {
                        headers: {
                            "Content-Type": "image/svg+xml",
                        },
                        responseType: "text",
                    }).then(response => {
                        const parser = new DOMParser();
                        const svgDocument = parser.parseFromString(response.data, "image/svg+xml");
                        const svgElement = svgDocument.querySelector("svg");
                        const viewBox = svgElement.getAttribute("viewBox");
                        const defaultViewBox = "0 0 1080 1080";
                        if (viewBox) {
                            this.draw.viewbox(viewBox);
                        } else {
                            this.draw.viewbox(defaultViewBox);
                        }
                        this.draw.svg(svgElement.innerHTML);
                    }).catch(error => {
                        console.log(error);
                    }).finally(() => {
                        this.initialDraw = this.draw;
                        this.draw.find('image').each((item) => {
                            // item.draggable();
                            item.select({
                                createHandle: (group) => group.rect(10, 10).css({fill: "red"}),
                                updateHandle: (shape, p) => shape.center(p[0], p[1]),
                            }).resize();
                        })
                    });
                }
            }
        },
    },
}
</script>