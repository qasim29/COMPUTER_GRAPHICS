
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200.5);
camera.position.set(0, 0, 100);
// by default 
// camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Adding Backgroud Image

// Create a texture loader so we can load our image file
var loader = new THREE.TextureLoader();

// Load an image file into a custom material
var imgMaterial = new THREE.MeshLambertMaterial({
    map: loader.load("https://pbs.twimg.com/media/EQTtMy7UYAMF6qY?format=jpg&name=large")
});
// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
// current aspect ratio 160/100 = 1.6
// my screen aspect ratio 16/9 = 1.777
var imgGeometry = new THREE.PlaneGeometry(160,10*10);

// combine our image geometry and material into a mesh
var mesh = new THREE.Mesh(imgGeometry, imgMaterial);

// set the position of the image mesh in the x,y,z dimensions
mesh.position.set(0,0,-0.5);

// add the image to the scene
scene.add(mesh);

let lightIntensity = 1;

// Add a point light with #fff color, .7 intensity, and 0 distance
var light = new THREE.PointLight( 0xffffff, lightIntensity , 0 );

// Specify the light's position
light.position.set(100, 100, 100 );

// Add the light to the scene
scene.add(light);



// BARISH 

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial({ 
    color: "rgb(149, 199, 232)", 
});


function animate() {
    requestAnimationFrame(animate);

    // points[0]= (new THREE.Vector3(- 10+val, 0, 0));
    // val+=1  ;

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let points1 = [];

    points1.push(new THREE.Vector3(0, 2, 0));
    points1.push(new THREE.Vector3(-0.5, 1, 0));

    let geometry1 = new THREE.BufferGeometry()
    
    geometry1.setFromPoints(points1);
    


    var raindrop=[];

    for(let i=0; i<=10;i++){
        raindrop.push(new THREE.Line(geometry1, material));
        
        scene.add(raindrop[i]);
        
        let posi= getRndInteger(-50,50);
        let posi1=getRndInteger(-80,80);
        
        raindrop[i].position.set(posi1,posi,0);

    }

    renderer.render(scene, camera);   

    for(let i=0; i<=10;i++){

        scene.remove(raindrop[i])
    }

}

animate();


window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;
   

})


    // let line1 = new THREE.Line(geometry1, material);
    // let line2 = new THREE.Line(geometry1, material);
    // let line3 = new THREE.Line(geometry1, material);
    // let line4 = new THREE.Line(geometry1, material);
    // // let line1 = new THREE.Line(geometry1, material);
    // // let line2 = new THREE.Line(geometry1, material);
    // // let line3 = new THREE.Line(geometry1, material);
    // // let line4 = new THREE.Line(geometry1, material);
    
    // scene.add(line1);
    // scene.add(line2);
    // scene.add(line3);
    // scene.add(line4);

    // line1.position.set(val+50,val,0);
    // line2.position.set(val-50,val-10,0);
    // line3.position.set(val+1,val+30,0);
    // line4.position.set(val-9,val-15,0);


    // renderer.render(scene, camera);

    // scene.remove(line1);
    // scene.remove(line2);
    // scene.remove(line3);
    // scene.remove(line4);

    // line1.position.x+=1;
    // line2.position.x+=2;
    // line3.position.x+=3;
    // line4.position.x+=4;







// trash code

// const url = "file:C:/Users/qasim/OneDrive/Pictures/rain.png";
// const image = new Image();
// image.src = url;

// const corsImage = new Image();
// corsImage.crossOrigin = "Anonymous";
// corsImage.src = url;

