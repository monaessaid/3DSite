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

const torus1 = new THREE.TorusGeometry(10,3,16,100)
const material = new THREE.MeshBasicMaterial ( {color: 0x00d5ff, wireframe: true} );
const torus = new THREE.Mesh(torus1, material);

const capsule1 = new THREE.CapsuleGeometry(2,2,5,12);
const material2 = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} ); 
const capsule = new THREE.Mesh(capsule1, material2);

const box1 = new THREE.BoxGeometry(10,10,10);
const material3 = new THREE.MeshBasicMaterial( {color:0xff0055 , wireframe: true} );
const box = new THREE.Mesh(box1, material3);

scene.add(torus)
scene.add(capsule)
scene.add(box)

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.02;

    capsule.rotation.x += 0.02;
    capsule.rotation.y += 0.01;

    box.rotation.x += 0.02;
    box.rotation.y += 0.01;

    renderer.render(scene,camera);
}

animate()