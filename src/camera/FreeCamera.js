import * as THREE from 'three';

//自由色相头
class FreeCamera {
    constructor(props) {
        this.camera = new THREE.PerspectiveCamera(30, props.width / props.height, 1, 10000);
        this.camera.position.set(1000, 50, 1500);
    }
}

export default FreeCamera;