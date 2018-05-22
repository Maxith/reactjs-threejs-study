import OrbitControls from './OrbitControls';
//控制器
class SimpleControl {
    constructor(props){
        this.camera = props.camera;
        this.domElement = props.domElement;

        const controls = new OrbitControls( this.camera, this.domElement );
        controls.maxPolarAngle = Math.PI * 0.5;
        controls.minDistance = 1000;
        controls.maxDistance = 5000;

        this.controls = controls;
    }
}

export default SimpleControl;