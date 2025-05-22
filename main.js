// importando biblioteca e OrbitControls
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// cena
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.set(5, 5, 10);
camera.lookAt(0, 0, 0);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// plano de fundo com PlaneGeometry
const planeGeometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 'gray', side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 2;
scene.add(plane); // adiciona o plano

// objetos e transformacoes

// cubo
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshBasicMaterial({ color: 'purple' })
);
cube.position.set(5, 5, 5); // seta a posicao do cubo para x = 5, y = 5 e z = 5 no plano
cube.rotation.x = Math.PI / 4; // rotaciona o cubo 45 graus no eixo x
cube.scale.set(2, 2, 2); // aumenta o tamanho do objeto em 2x
scene.add(cube); // adiciona o cubo a cena

// esfera
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshBasicMaterial({ color: 'blue' })
);
sphere.position.set(10, 3, 12); // seta a posicao da esfera para x = 10, y = 3 e z = 12 np plano
sphere.rotation.y = Math.PI / 2; // rotaciona a esfera 90 graus no eixo y
sphere.scale.set(0.5, 0.5, 0.5); // reduz o tamanho do objeto pela metade
scene.add(sphere); // adiciona a esfera a cena

// cone
const cone = new THREE.Mesh(
    new THREE.ConeGeometry(2, 4, 32),
    new THREE.MeshBasicMaterial({ color: 'red' })
);
cone.position.set(0, 3, -10); // seta a posicao do cone para x = 0, y = 3 e z = - 10 no plano
cone.rotation.z = Math.PI / 1; // rotaciona o cone 180 graus no eixo z
cone.scale.set(1, 2, 1); ;// aumenta o tamanho do cone verticalmente (eixo y)
scene.add(cone); // adiciona o cone a cena

// controle de orbita
const controls = new OrbitControls(camera, renderer.domElement);

// funcao principal de animacao
function animate() {
    requestAnimationFrame(animate); // chama a funcao animate a cada frame
    controls.update(); // atualiza o controle de orbita
    renderer.render(scene, camera);
}

animate();