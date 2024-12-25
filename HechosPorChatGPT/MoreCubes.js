import * as THREE from 'three';


// - - - - - - - - - - - - - - CREANDO ESCENA, CAMERA, Y EL MOTOR DE RENDERIZADO - - - - - - - - - - - - - -
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// - - - - - - - - - - - - - - CREANDO EL CUBO - - - - - - - - - - - - - - 

const geometry = new THREE.BoxGeometry( 1, 1, 5 );
const material = new THREE.MeshBasicMaterial( { color: "#A277A6" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


const geometry1 = new THREE.BoxGeometry( 1, 1, 5 );
const material1 = new THREE.MeshBasicMaterial( { color: "#A57FB2" } );
const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );
cube1.position.x = 1;
cube1.position.z = 0.5;

const geometry2 = new THREE.BoxGeometry( 1, 1, 5 );
const material2 = new THREE.MeshBasicMaterial( { color: "#9991A4" } );
const cube2 = new THREE.Mesh( geometry2, material2 );
scene.add( cube2 );
cube2.position.y = 1;
cube2.position.z = 0.2;

const geometry3 = new THREE.BoxGeometry( 1, 1, 5 );
const material3 = new THREE.MeshBasicMaterial( { color: "#9678D3" } );
const cube3 = new THREE.Mesh( geometry3, material3 );
scene.add( cube3 );
cube3.position.y = 1;
cube3.position.x = 1;
cube3.position.z = 0.3;

const geometry4 = new THREE.BoxGeometry( 1, 1, 5 );
const material4 = new THREE.MeshBasicMaterial( { color: "#9678D3" } );
const cube4 = new THREE.Mesh( geometry4, material4 );
scene.add( cube4 );
cube4.position.y = 0;
cube4.position.x = -1;
cube4.position.z = 0.4;

const geometry5 = new THREE.BoxGeometry( 1, 1, 5 );
const material5 = new THREE.MeshBasicMaterial( { color: "#9595D2" } );
const cube5 = new THREE.Mesh( geometry5, material5 );
scene.add( cube5 );
cube5.position.y = -1;
cube5.position.x = 0;
cube5.position.z = 0.2;

const geometry6 = new THREE.BoxGeometry( 1, 1, 5 );
const material6 = new THREE.MeshBasicMaterial( { color: "#7474C1" } );
const cube6 = new THREE.Mesh( geometry6, material6 );
scene.add( cube6 );
cube6.position.y = -1;
cube6.position.x = 1;
cube6.position.z = 0.3;

const geometry7 = new THREE.BoxGeometry( 1, 1, 5 );
const material7 = new THREE.MeshBasicMaterial( { color: "#8B84D7" } );
const cube7 = new THREE.Mesh( geometry7, material7 );
scene.add( cube7 );
cube7.position.y = -1;
cube7.position.x = -1;
cube7.position.z = 0.5;

const geometry8 = new THREE.BoxGeometry( 1, 1, 5 );
const material8 = new THREE.MeshBasicMaterial( { color: "#8986CA" } );
const cube8 = new THREE.Mesh( geometry8, material8 );
scene.add( cube8 );
cube8.position.y = 1;
cube8.position.x = -1;
cube8.position.z = 0.5;

const geometry9 = new THREE.BoxGeometry( 1, 1, 5 );
const material9 = new THREE.MeshBasicMaterial( { color: "#7D9BC1" } );
const cube9 = new THREE.Mesh( geometry9, material9 );
scene.add( cube9 );
cube9.position.x = -2;
cube9.position.z = 0.2;

const geometry10 = new THREE.BoxGeometry( 1, 1, 5 );
const material10 = new THREE.MeshBasicMaterial( { color: "#7A99AC" } );
const cube10 = new THREE.Mesh( geometry10, material10 );
scene.add( cube10 );
cube10.position.y = 1;
cube10.position.x = -2;
cube10.position.z = 0.5;

const geometry11 = new THREE.BoxGeometry( 1, 1, 5 );
const material11 = new THREE.MeshBasicMaterial( { color: "#8D89A5" } );
const cube11 = new THREE.Mesh( geometry11, material11 );
scene.add( cube11 );
cube11.position.x = -2;
cube11.position.y = -1;
cube11.position.z = 0.3;

const geometry12 = new THREE.BoxGeometry( 1, 1, 5 );
const material12 = new THREE.MeshBasicMaterial( { color: "#A192B2" } );
const cube12 = new THREE.Mesh( geometry12, material12 );
scene.add( cube12 );
cube12.position.x = 2;
cube12.position.z = 0.3;

const geometry13 = new THREE.BoxGeometry( 1, 1, 5 );
const material13 = new THREE.MeshBasicMaterial( { color: "#7C7FAB" } );
const cube13 = new THREE.Mesh( geometry13, material13 );
scene.add( cube13 );
cube13.position.x = 2;
cube13.position.y = -1;
cube13.position.z = 0.5;

const geometry14 = new THREE.BoxGeometry( 1, 1, 5 );
const material14 = new THREE.MeshBasicMaterial( { color: "#878CB4" } );
const cube14 = new THREE.Mesh( geometry14, material14 );
scene.add( cube14 );
cube14.position.x = 2;
cube14.position.y = 1;
cube14.position.z = 0.5;

let direction = 1;
let direction1 = -1;
let direction2 = -1;
let direction3 = 1;
let direction4 = -1;
let direction5 = 1;
let direction6 = 1;
let direction7 = -1;
let direction8 = 1;
let direction9 = 1;
let direction10 = -1;
let direction11 = 1;
let direction12 = 1;
let direction13 = -1;
let direction14 = 1;
camera.position.z = 5;

const spotLight = new THREE.SpotLight(0xffffff, 50);
spotLight.position.z = 5;
spotLight.castShadow = true;
spotLight.angle = Math.PI ;
spotLight.penumbra = 0.5;
spotLight.decay = 2;
spotLight.distance = 10;
scene.add(spotLight);

// - - - - - - - - - - - - - - MOSTRANDO EL CUBO - - - - - - - - - - - - - -
function animate() {
    cube.position.z += direction * 0.002;
    cube1.position.z += direction1 * 0.002;
    cube2.position.z += direction2 * 0.002;
    cube3.position.z += direction3 * 0.002;
    cube4.position.z += direction4 * 0.002;
    cube5.position.z += direction5 * 0.002;
    cube6.position.z += direction6 * 0.002;
    cube7.position.z += direction7 * 0.002;
    cube8.position.z += direction8 * 0.002;
    cube9.position.z += direction9 * 0.002;
    cube10.position.z += direction10 * 0.002;
    cube11.position.z += direction11 * 0.002;
    cube12.position.z += direction12 * 0.002;
    cube13.position.z += direction13 * 0.002;
    cube14.position.z += direction14 * 0.002;
    
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
    if (cube3.position.z >= 0.7) {
        direction3 = -1; // Cambia la dirección a negativa
    } else if (cube3.position.z <= 0.2) {
        direction3 = 1; // Cambia la dirección a positiva
    }
    if (cube4.position.z >= 0.7) {
        direction4 = -1; // Cambia la dirección a negativa
    } else if (cube4.position.z <= 0.2) {
        direction4 = 1; // Cambia la dirección a positiva
    }
    if (cube5.position.z >= 0.7) {
        direction5 = -1; // Cambia la dirección a negativa
    } else if (cube5.position.z <= 0.2) {
        direction5 = 1; // Cambia la dirección a positiva
    }

    if (cube6.position.z >= 0.7) {
        direction6 = -1; // Cambia la dirección a negativa
    } else if (cube6.position.z <= 0.2) {
        direction6 = 1; // Cambia la dirección a positiva
    }
    if (cube7.position.z >= 0.7) {
        direction7 = -1; // Cambia la dirección a negativa
    } else if (cube7.position.z <= 0.2) {
        direction7 = 1; // Cambia la dirección a positiva
    }
    if (cube8.position.z >= 0.7) {
        direction8 = -1; // Cambia la dirección a negativa
    } else if (cube8.position.z <= 0.2) {
        direction8 = 1; // Cambia la dirección a positiva
    }
    if (cube9.position.z >= 0.7) {
        direction9 = -1; // Cambia la dirección a negativa
    } else if (cube9.position.z <= 0.2) {
        direction9 = 1; // Cambia la dirección a positiva
    }
    if (cube10.position.z >= 0.7) {
        direction10 = -1; // Cambia la dirección a negativa
    } else if (cube10.position.z <= 0.2) {
        direction10 = 1; // Cambia la dirección a positiva
    }
    if (cube11.position.z >= 0.7) {
        direction11 = -1; // Cambia la dirección a negativa
    } else if (cube11.position.z <= 0.2) {
        direction11 = 1; // Cambia la dirección a positiva
    }
    if (cube12.position.z >= 0.7) {
        direction12 = -1; // Cambia la dirección a negativa
    } else if (cube12.position.z <= 0.2) {
        direction12 = 1; // Cambia la dirección a positiva
    }
    if (cube13.position.z >= 0.7) {
        direction13 = -1; // Cambia la dirección a negativa
    } else if (cube13.position.z <= 0.2) {
        direction13 = 1; // Cambia la dirección a positiva
    }
    if (cube14.position.z >= 0.7) {
        direction14 = -1; // Cambia la dirección a negativa
    } else if (cube14.position.z <= 0.2) {
        direction14 = 1; // Cambia la dirección a positiva
    }

	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );