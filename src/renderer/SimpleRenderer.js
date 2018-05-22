import * as THREE from 'three';

//渲染器-webgl
class SimpleRenderer {
    constructor(props) {
        this.width = props.width;
        this.height = props.height;

        const renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(this.width, this.height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        renderer.shadowMap.enabled = true;

        this.renderer = renderer;
    }
}

export default SimpleRenderer;