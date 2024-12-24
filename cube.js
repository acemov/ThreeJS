import * as THREE from 'three';

// - - - - - - - - - - - - - - CREANDO ESCENA, CAMERA, Y EL MOTOR DE RENDERIZADO - - - - - - - - - - - - - -
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// - - - - - - - - - - - - - - CREANDO EL CUBO - - - - - - - - - - - - - - 

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: "red" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const edgesGeometry = new THREE.EdgesGeometry(geometry); // Genera las aristas
const edgesMaterial = new THREE.LineBasicMaterial({ color: "lime" }); // Color de las aristas
const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial); // Combina geometría y material
scene.add(edges);

camera.position.z = 5;


// - - - - - - - - - - - - - - MOSTRANDO EL CUBO - - - - - - - - - - - - - -
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    edges.rotation.x += 0.01; // Rotar también las aristas
    edges.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );