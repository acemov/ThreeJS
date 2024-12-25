// Configuración básica de la escena
import * as THREE from 'three'; 
// Configuración básica de la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Habilitar sombras
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Sombras suaves
document.body.appendChild(renderer.domElement);

// Crear un plano (suelo) que reciba sombras
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true; // El plano recibe sombras
scene.add(plane);

// Crear un cubo con material estándar para sombras realistas
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({
    color: 0x0077ff,
    metalness: 0.5,
    roughness: 0.5,
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.castShadow = true; // El cubo proyecta sombras
cube.position.y = 0.5; // Elevar el cubo sobre el plano
scene.add(cube);

// Crear las aristas del cubo
const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry);
const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
edges.position.y = 0.5; // Sincronizar posición con el cubo
scene.add(edges);

// Añadir luces
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Luz ambiental suave (baja intensidad)
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 20); // Luz más intensa
spotLight.position.set(5, 5, 0); // Luz desde el lado derecho
spotLight.castShadow = true; // La luz proyecta sombras
spotLight.shadow.mapSize.width = 2048; // Aumentar resolución de sombras
spotLight.shadow.mapSize.height = 2048;
spotLight.shadow.camera.near = 0.5;
spotLight.shadow.camera.far = 15;
scene.add(spotLight);

// Añadir un helper para visualizar la luz (opcional)
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

// Posicionar la cámara
camera.position.set(3, 3, 5);
camera.lookAt(0, 0, 0);

// Animación
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01; // Rotar el cubo
    edges.rotation.y += 0.01; // Rotar las aristas
    renderer.render(scene, camera);
}
animate();
