const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200.5);
camera.position.set(0, 0, 200);
// by default 
// camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// PARAMETRIC LINE CODE

// Considering This Parametric Equation For Line
// x = 7 * t - 6 
// y = -3 * t + 4
// z = 2 * t + 9


let pts = [];
for (let ptNO = 1; ptNO <= 10; ptNO++) {
    pts.push(new THREE.Vector3(7*ptNO-6, -3 * ptNO + 4, 2 * ptNO + 9));
}

//BufferGemoetry for creating our own gemoetry 
const geometry=new THREE.BufferGeometry();

geometry.setFromPoints(pts);

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial({ 
    color: "rgb(149, 199, 232)", 
});

const Parametric_Line = new THREE.Line(geometry,material);

scene.add(Parametric_Line);
renderer.render(scene,camera);
