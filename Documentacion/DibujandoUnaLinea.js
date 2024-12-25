import * as THREE from 'three';

// - - - - - - - - - - - - - - CREANDO ESCENA, CAMERA, Y EL MOTOR DE RENDERIZADO - - - - - - - - - - - - - -
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// - - - - - - - - - - - - - - Crea el material - - - - - - - - - - - - - -
const material = new THREE.LineBasicMaterial({color:"red"})

// - - - - - - - - - - - - - - Ponemos los puntos por donde pasara la linea - - - - - - - - - - - - - -
const points = [];

points.push(new THREE.Vector3(-10,0,0))
points.push(new THREE.Vector3(0,10,0))
points.push(new THREE.Vector3(10,0,0))
points.push(new THREE.Vector3(15,20,0))

const geometry = new THREE.BufferGeometry().setFromPoints(points)

// - - - - - - - - - - - - - - Unimos el material con la lineas - - - - - - - - - - - - - -
const line = new THREE.Line(geometry, material)
// - - - - - - - - - - - - - - añadimos la linea a la escena - - - - - - - - - - - - - -
scene.add(line)
//  - - - - - - - - - - - - - - renderizamos la scnea y la camara - - - - - - - - - - - - - -
renderer.render( scene, camera)