import * as THREE from 'three';

//草地
class Grassland {
    constructor(props){
        this.scene = props.scene;
        this.loader = props.loader;

        const groundTexture = this.loader.load( '/texture/grasslight-big.jpg' );
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set( 25, 25 );
        groundTexture.anisotropy = 16;

        const groundMaterial = new THREE.MeshLambertMaterial( { map: groundTexture } );

        const mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 20000, 20000 ), groundMaterial );
        mesh.position.y = - 250;
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;

        this.scene.add( mesh );
    }
}

export default Grassland;