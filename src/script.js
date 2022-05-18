let scene = new THREE.Scene();
//35: aguster le chant de vue, window.innerWidth/window.innerHeight: La grosseur de la fenetre, 0.1: ?,
// 3000: wenn man weit als 3000 ist, funktioniert nicht mehr
let camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 3000);
camera.position.z= 100;

let result = new THREE.WebGLRenderer();
//size geben
result.setSize(window.innerWidth, window.innerHeight);
// collor geben
result.setClearColor(0x132644)

//resultin Html datei hinzufügen

document.body.appendChild(result.domElement);

// erstellung unsere 3D Element
// - creer un group pour regrouper notre element 3D

let forme = new THREE.Group();

//- Erstellung der Geometrie Element
let geometrie = new THREE.TorusKnotGeometry(10,3,100,16);
//- erstellung der Materiel
let materiel = new THREE.MeshNormalMaterial({
    // Die parameter müssen nicht gegeben werden
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

// Form dinamique machen

// function pour deplacer la forme
// let control = new THREE.OrbitControls(camera);
// control.update();

// Function der die Rotation macht
let anim = function (){
    requestAnimationFrame(anim);

    forme.rotation.x += 0.005;
    forme.rotation.y += 0.005;
    result.render(scene, camera);
};
anim();


// result.render(scene, camera);