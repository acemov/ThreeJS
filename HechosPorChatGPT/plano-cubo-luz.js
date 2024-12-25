import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 6);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Control de cámara
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Piso gris
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

// Luces
const spotLight = new THREE.SpotLight(0xffffff, 50);
spotLight.position.set(0, 5, 0);
spotLight.castShadow = true;
spotLight.angle = Math.PI / 6;
spotLight.penumbra = 0.5;
spotLight.decay = 2;
spotLight.distance = 10;
scene.add(spotLight);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

// Luz ambiental tenue
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

// CubeCamera para reflejos
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512, {
  format: THREE.RGBAFormat,
  generateMipmaps: true,
  minFilter: THREE.LinearMipmapLinearFilter,
});
const cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget);
scene.add(cubeCamera);

// Material reflejante rojo
const reflectiveMaterial = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  envMap: cubeRenderTarget.texture,
  metalness: 1,
  roughness: 0.1,
});

// Geometría del cubo
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(cubeGeometry, reflectiveMaterial);
cube.castShadow = true;
cube.position.y = 0.5; // Levantar el cubo para que no se hunda en el piso
scene.add(cube);

// Geometría del cubo 1
    const cubeGeometry1 = new THREE.BoxGeometry(1, 1, 1);
    const cube1 = new THREE.Mesh(cubeGeometry1, reflectiveMaterial);
    cube1.castShadow = true;
    cube1.position.x = 1.5; // Levantar el cubo para que no se hunda en el piso
    cube1.position.y = 1; // Levantar el cubo para que no se hunda en el piso
    scene.add(cube1);
// Habilitar sombras en el renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Animación
function animate() {
  cube.visible = false; // Oculta el cubo para evitar que se refleje a sí mismo
  cubeCamera.position.copy(cube.position);
  cubeCamera.update(renderer, scene);
  cube.visible = true; // Vuelve a mostrar el cubo

  cube.rotation.y += 0.01; // Rotación lenta para observar el reflejo

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
