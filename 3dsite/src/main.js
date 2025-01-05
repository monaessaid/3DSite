import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize ( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render(scene,camera);

const geometry = new THREE.TorusGeometry(10,3,16,100)
const material = new THREE.MeshBasicMaterial ( {color: 0x00d5ff, wireframe: true} );
const torus = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.CapsuleGeometry(2,2,5,12);
const material2 = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} ); 
const capsule = new THREE.Mesh(geometry2, material2);

scene.add(torus)
scene.add(capsule)

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.02;

    capsule.rotation.x += 0.02;
    capsule.rotation.y += 0.01;

    renderer.render(scene,camera);
}

animate()