import * as THREE from 'three';
import {OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./style.css";

// create scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

var directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight1.position.set(1, 0, 0);
scene.add(directionalLight1);

var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight2.position.set(-1, 0, 0);
scene.add(directionalLight2);

var directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight3.position.set(0, 1, 0);
scene.add(directionalLight3);

var directionalLight4 = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight4.position.set(0, -1, 0);
scene.add(directionalLight4);

var directionalLight5 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight5.position.set(0, 0, 1);
scene.add(directionalLight5);

var directionalLight6 = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight6.position.set(0, 0, -1);
scene.add(directionalLight6);

// add the cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x9300ff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
	requestAnimationFrame( animate );
    controls.update();

    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();