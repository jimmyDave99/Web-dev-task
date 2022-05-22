// import * as THREE from 'three'
// import { OrbitControls } from 'OrbitControls.js'

let scene = new THREE.Scene();
//35: adjusting the edge of the view, window.innerWidth/window.innerHeight: Size of the window, 0.1: ?,
// 3000: when you are far than 3000 no longer works
let camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 3000);
camera.position.z= 100;

let result = new THREE.WebGLRenderer();
//size
result.setSize(window.innerWidth, window.innerHeight);
// collor
result.setClearColor(0x132644)

//Add result to html file

document.body.appendChild(result.domElement);

// creation of our 3D element
// create a group to group our 3D element

let forme = new THREE.Group();

//- Creation of geometry element
let geometrie = new THREE.TorusKnotGeometry(10,3,100,16);
//- creation of the material
let materiel = new THREE.MeshNormalMaterial({
    // The parameters do not have to be given
    color: 0xff000,
    transparent: true,
    opacity: 1,
    wireframe: true,
    wireframeLinewidth: 5,
    wireframeLinecap: 'round',
    wireframeLinejoin: 'round'
});

forme.add(new THREE.Mesh(geometrie,materiel));
scene.add(forme);
//--------------------------------------

// makes the rotation dinamic

// function to move the shape
let control = new THREE.OrbitControls( camera, result.domElement);

//time to visualization
let clock = new THREE.Clock();

// Function that makes the rotation
let anim = function (){
    requestAnimationFrame(anim);
    let time = clock.getElapsedTime();

    // ohne time
    forme.rotation.x += 0.005;

    // mit time
    forme.rotation.y += time * 0.001;

    result.render(scene, camera);
};
anim();



// result.render(scene, camera);