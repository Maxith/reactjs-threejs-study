import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';

import registerServiceWorker from './registerServiceWorker';

import FreeCamera from './camera/FreeCamera';
import Grassland from './groud/Grassland';
import Sunshine from './lights/Sunshine';
import SimpleRenderer from './renderer/SimpleRenderer';
import SimpleControl from './controls/SimpleControl';

//宽
const width = window.innerWidth;
//高
const height = window.innerHeight;
//动画对象
let app = null;

class Index extends Component {
    //构造方法
    constructor(props) {
        super(props);

        this.canvasId = 'canvasNode';

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.canvasNode = null;

        this.initCanvas();
    }

    //初始化画布
    initCanvas = function () {
        //主场景
        let scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xcce0ff );
        scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );

        //材质加载器
        const loader = new THREE.TextureLoader();
        //草地
        new Grassland({
            scene : scene,
            loader : loader
        });
        //阳光
        new Sunshine({
            scene : scene
        });

        //色相头
        let camera = new FreeCamera({
            scene : scene,
            width : width,
            height : height
        }).camera;

        //渲染器
        let renderer = new SimpleRenderer({
            width : width,
            height : height
        }).renderer;

        //控制器
        let controls = new SimpleControl({
            camera : camera,
            domElement : renderer.domElement
        }).controls;

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.controls = controls;
        this.canvasNode = renderer.domElement;
    }

    //组件加载
    render() {
        return ( 
            <div id={this.canvasId}></div>
        );
    }

    //组件装配后调用
    componentDidMount = function () {
        const root = document.getElementById(this.canvasId);
        root.appendChild(this.canvasNode);

        app = this;

        //动画开始
        animation();
    }
}

//动画效果
const animation = function(){
    if (app){
        //window api 窗口同步刷新
        //https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
        window.requestAnimationFrame(animation);

        //渲染
        app.renderer.render( app.scene, app.camera );
    }
}

ReactDOM.render(<Index/> , document.getElementById('react_container'));
registerServiceWorker();