import * as THREE from 'three';

//阳光
class Sunshine{

    constructor(prop){
        this.scene = prop.scene;

        //添加环境光
        const ambient = new THREE.AmbientLight( 0x666666 );

        //平行光 -- 阳光
        const sun = new THREE.DirectionalLight( 0xdfebff, 1 );
        sun.position.set( 50, 200, 100 );
        sun.position.multiplyScalar( 1.3 );

        sun.castShadow = true;

        sun.shadow.mapSize.width = 1024;
        sun.shadow.mapSize.height = 1024;

        var d = 300;

        sun.shadow.camera.left = - d;
        sun.shadow.camera.right = d;
        sun.shadow.camera.top = d;
        sun.shadow.camera.bottom = - d;

        sun.shadow.camera.far = 1000;

        
        this.ambient = ambient;
        this.sun = sun;
        this.scene.add( ambient );
        this.scene.add( sun );
    }
}

export default Sunshine;