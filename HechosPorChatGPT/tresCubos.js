import * as THREE from "three"


// - - - - - - - - - - - - - - CREANDO ESCENA, CAMERA, Y EL MOTOR DE RENDERIZADO - - - - - - - - - - - - - -
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// - - - - - - - - - - - - - - CREANDO EL CUBO - - - - - - - - - - - - - - 

const geometry = new THREE.BoxGeometry( 1, 1, 5 );
const material = new THREE.MeshBasicMaterial( { color: "red" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const geometry1 = new THREE.BoxGeometry( 1, 1, 5 );
const material1 = new THREE.MeshBasicMaterial( { color: "blue" } );
const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );
cube1.position.x = 1;
cube1.position.z = 0.5;

const geometry2 = new THREE.BoxGeometry( 1, 1, 5 );
const material2 = new THREE.MeshBasicMaterial( { color: "green" } );
const cube2 = new THREE.Mesh( geometry2, material2 );
scene.add( cube2 );
cube2.position.x = -1;
cube2.position.z = 0.2;

let direction = 1;
let direction1 = -1;
let direction2 = 1;

const spotLight = new THREE.SpotLight(0xffffff, 50);
spotLight.position.z = 5;
spotLight.castShadow = true;
spotLight.angle = Math.PI ;
spotLight.penumbra = 0.5;
spotLight.decay = 2;
spotLight.distance = 10;
scene.add(spotLight);


camera.position.z = 5;



// - - - - - - - - - - - - - - MOSTRANDO EL CUBO - - - - - - - - - - - - - -
function animate() {
    cube.position.z += direction * 0.002;
    cube1.position.z += direction1 * 0.002;
    cube2.position.z += direction2 * 0.002;
    
    if (cube.position.z >= 0.7) {
        direction = -1; // Cambia la dirección a negativa
    } else if (cube.position.z <= 0.2) {
        direction = 1; // Cambia la dirección a positiva
    }


    if (cube1.position.z >= 0.7) {
        direction1 = -1; // Cambia la dirección a negativa
    } else if (cube1.position.z <= 0.2) {
        direction1 = 1; // Cambia la dirección a positiva
    }

    
    if (cube2.position.z >= 0.7) {
        direction2 = -1; // Cambia la dirección a negativa
    } else if (cube2.position.z <= 0.2) {
        direction2 = 1; // Cambia la dirección a positiva
    }
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );