const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200);
camera.position.set(0, 0, 100);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



// START circle
const geometry = new THREE.BufferGeometry();

let point=[];

const angle=2*Math.PI;

for(let i=0; i<=40; i++){
    point.push(new THREE.Vector3(Math.cos(angle*i),Math.sin(angle*i),0));

}
geometry.setFromPoints(point);

const material = new THREE.LineBasicMaterial({ 
    color: "rgb(149, 199, 232)", 
});

let circle = new THREE.Line(geometry, material);

//end circle 



scene.add(circle);
renderer.render(scene,camera);
