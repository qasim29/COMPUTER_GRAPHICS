const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200);
camera.position.set(0, 0, 10);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



// START Helix
const geometry = new THREE.BufferGeometry();

let point=[];

const angle=2*Math.PI/40;

let inc=0;
for(let i=0; i<=160; i++){
    point.push(new THREE.Vector3(Math.cos(angle*i),Math.sin(angle*i),0.1*angle*i));
    inc+=0.01;
}
geometry.setFromPoints(point);

const material = new THREE.LineBasicMaterial({ 
    color: "rgb(149, 199, 232)", 
});

let circle = new THREE.Line(geometry, material);

scene.add(circle);

//end circle 


function animate() {    
    circle.rotation.x += 0.01;
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}

animate()


// make window responsive to resize evernts
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;
   

});
