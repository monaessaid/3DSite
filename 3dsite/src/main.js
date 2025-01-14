import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Sets up the scene 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Renders the scene and the camera 
renderer.render(scene, camera);

// Creating shapes 
const torus1 = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0x85dcff });
const torus = new THREE.Mesh(torus1, material);

// const capsule1 = new THREE.CapsuleGeometry(2, 2, 5, 12);
// const material2 = new THREE.MeshStandardMaterial({ color: 0x00ff00, wireframe: true });
// const capsule = new THREE.Mesh(capsule1, material2);

// const box1 = new THREE.BoxGeometry(10, 10, 10);
// const material3 = new THREE.MeshStandardMaterial({ color: 0xff0055, wireframe: true });
// const box = new THREE.Mesh(box1, material3);

// Adding the shapes to the scene 
scene.add(torus)
// scene.add(capsule)
// scene.add(box)

// PointLight to focus on a specific point 
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)

// Lighting across the entire scene
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

// Helper functions 
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

// Allows you to move the scene with your mouse
const controls = new OrbitControls(camera, renderer.domElement);

// Generates stars in random positions
function addStar() {
    const sphere = new THREE.SphereGeometry(0.25);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const star = new THREE.Mesh(sphere, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x,y,z);
    scene.add(star)
}

// Adds the stars throughout the scene
Array(200).fill().forEach(addStar)


function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    // capsule.rotation.x += 0.02;
    // capsule.rotation.y += 0.01;

    // box.rotation.x += 0.03;
    // box.rotation.y += 0.03;

    controls.update();

    renderer.render(scene, camera);
}

animate()