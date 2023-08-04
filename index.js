const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

// renderer.setSize(document.getElementById("canvas").clientWidth, document.getElementById("canvas").clientHeight);
document.getElementById("canvas").appendChild(renderer.domElement)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 1000000);
camera.position.set(5, 3, 0)
// const lookAtPoint = new THREE.Vector3(5, 8, 0);
// camera.lookAt(lookAtPoint);

const orbit = new THREE.OrbitControls(camera, renderer.domElement)
// orbit.enableZoom = false;
// orbit.update()
orbit.enabled = false;








document.addEventListener("mousemove", function (e) {
    document.getElementById("cursor").style.left = e.clientX + "px";
    document.getElementById("cursor").style.top = e.clientY + "px";
});

clickSound = new Audio("buttonpress-45980.mp3");
let natureSound = new Audio(
    "forest-with-small-river-birds-and-nature-field-recording-6735.mp3"
);

natureSound.loop = true;
natureSound.volume = 1;
document.getElementById("voloff").style.display = "none";
document.getElementById("infoClose").style.display = "none";
document.getElementById("backBtn").style.display = "none";
document.getElementById("body").style.overflowY = "hidden";
document.getElementById("leaves").style.display='none'
document.getElementById("scroll").style.display='none'
document.getElementById("canvas").style.display='none'
document.getElementById("paw").style.display='none'
document.getElementById("no").style.display='none'

// document.getElementById("page2").style.opacity='0'
// natureSound.autoplay=true
// natureSound.play();

let el = document.getElementById("headh1");

const height = el.clientHeight;
const width = el.clientWidth;

el.addEventListener("mousemove", handleMove);

function handleMove(e) {
    const xVal = e.layerX;
    const yVal = e.layerY;
    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);
    const string =
        "perspective(500px) scale(1.1) rotateX(" +
        xRotation +
        "deg) rotateY(" +
        yRotation +
        "deg)";
    el.style.transform = string;
}

el.addEventListener("mouseout", function () {
    el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
});

document.getElementById("yesBtn").addEventListener("click", function () {
    document.getElementById("askCont").style.display = "none";
    document.getElementById("paw").style.display='grid'

    natureSound.play()
});
document.getElementById("noBtn").addEventListener("click", function () {
    document.getElementById("askCont").style.display = "none";
    document.getElementById("paw").style.display='grid'

});


document.getElementById("volon").addEventListener("click", function () {
    document.getElementById("volon").style.display = "none";
    document.getElementById("voloff").style.display = "block";
    natureSound.pause();
    clickSound.muted = true;
});
document.getElementById("voloff").addEventListener("click", function () {
    document.getElementById("voloff").style.display = "none";
    document.getElementById("volon").style.display = "block";
    natureSound.play();
    clickSound.muted = false;
});

document.querySelectorAll(".hoverEffect").forEach((e) => {
    e.addEventListener("click", function () {
        clickSound.play();
    });
});
document.querySelectorAll(".hoverEffect").forEach((e) => {
    e.addEventListener("mouseover", function () {
        document.getElementById("cursor").innerHTML = "<i class='fa-solid fa-hand-pointer'></i>";
        document.getElementById("cursor").style.fontSize = "50px";
        document.getElementById("cursor").style.backgroundColor = "transparent";
        document.getElementById("cursor").style.webkitTextStrokeWidth = "1px";
        document.getElementById("cursor").style.webkitTextStrokeColor = "black";
        document.getElementById("cursor").style.boxShadow = "none";
    });
    
});
document.querySelectorAll(".hoverEffect").forEach((e) => {
    e.addEventListener("mouseleave", function () {
        document.getElementById("cursor").innerHTML = "";
        document.getElementById("cursor").style.fontSize = "0px";
        document.getElementById("cursor").style.backgroundColor = "rgb(106, 177, 106)";
        document.getElementById("cursor").style.webkitTextStrokeWidth = "0px";
        document.getElementById("cursor").style.webkitTextStrokeColor = "transparent";
        document.getElementById("cursor").style.boxShadow ="0px 0px 20px 2px rgb(125, 255, 74)";
    });
});

document.querySelectorAll(".knowMore").forEach((e) => {
    e.addEventListener("mouseover", function () {
        document.getElementById("cursor").style.fontSize = "50px";
        document.getElementById("cursor").innerText = "Info";
        document.getElementById("cursor").style.mixBlendMode = "difference";
        document.getElementById("cursor").style.backgroundColor = "white";
        // document.getElementById("cursor").style.webkitTextStrokeColor = "black";
        document.getElementById("cursor").style.boxShadow = "none";
        document.getElementById("cursor").style.width = "100px";
        document.getElementById("cursor").style.height = "100px";
    });
});

document.querySelectorAll(".knowMore").forEach((e) => {
    e.addEventListener("mouseleave", function () {
        document.getElementById("cursor").style.fontSize = "0px";
        document.getElementById("cursor").innerText = "";
        document.getElementById("cursor").style.mixBlendMode = "normal";
        // document.getElementById("cursor").style.webkitTextStrokeWidth = "0px";
        document.getElementById("cursor").style.backgroundColor = "rgb(106, 177, 106)";
        document.getElementById("cursor").style.boxShadow ="0px 0px 20px 2px rgb(125, 255, 74)";
        document.getElementById("cursor").style.width = "20px";
        document.getElementById("cursor").style.height = "20px";
        });
});
document.getElementById("info").addEventListener("click", function () {
    document.getElementById("monkey").style.top = "0rem";
    document.getElementById("infoClose").style.display = "block";
    document.getElementById("info").style.display = "none";
});
document.getElementById("infoClose").addEventListener("click", function () {
    document.getElementById("monkey").style.top = "-35rem";
    document.getElementById("infoClose").style.display = "none";
    document.getElementById("info").style.display = "block";
});

// let bgTop = window
//     .getComputedStyle(document.getElementById("bg"))
//     .getPropertyValue("top");
// let headTop = window
//     .getComputedStyle(document.getElementById("head"))
//     .getPropertyValue("top");
// let leaf1Top = window
//     .getComputedStyle(document.getElementById("leaf1"))
//     .getPropertyValue("top");
// let leaf2Top = window
//     .getComputedStyle(document.getElementById("leaf2"))
//     .getPropertyValue("bottom");
// let leaf2_2Top = window
//     .getComputedStyle(document.getElementById("leaf2_2"))
//     .getPropertyValue("bottom");
// let leaf3Top = window
//     .getComputedStyle(document.getElementById("leaf3"))
//     .getPropertyValue("bottom");
// let leaf3_2Top = window
//     .getComputedStyle(document.getElementById("leaf3_2"))
//     .getPropertyValue("bottom");
// let leaf3_3Top = window
//     .getComputedStyle(document.getElementById("leaf3_3"))
//     .getPropertyValue("bottom");
// let leaf4Top = window
//     .getComputedStyle(document.getElementById("leaf4"))
//     .getPropertyValue("bottom");
// let leaf4_2Top = window
//     .getComputedStyle(document.getElementById("leaf4_2"))
//     .getPropertyValue("bottom");
// let leaf4_3Top = window
//     .getComputedStyle(document.getElementById("leaf4_3"))
//     .getPropertyValue("bottom");
// let leaf4_4Top = window
//     .getComputedStyle(document.getElementById("leaf4_4"))
//     .getPropertyValue("bottom");
// let leaf4_5Top = window
//     .getComputedStyle(document.getElementById("leaf4_5"))
//     .getPropertyValue("top");
// let branchTop = window
//     .getComputedStyle(document.getElementById("branch"))
//     .getPropertyValue("top");
// let branch_2Top = window
//     .getComputedStyle(document.getElementById("branch_2"))
//     .getPropertyValue("top");


document.getElementById("pawBtn").addEventListener("click", function () {
    
    document.getElementById("page2").style.transitionDuration = '3s';
    document.getElementById("page1").style.top='-100vh'
     document.getElementById("page2").style.top = "0vh";
    document.getElementById("backBtn").style.display = "block";
    document.getElementById("pawBtn").style.display='none'
    document.getElementById("scroll").style.display='grid'
    document.getElementById("canvas").style.display='block'
    document.getElementById("no").style.display='block'

    
    // document.getElementById("pawBtn").style.animation='paw 1 linear 2.5s'
    

    
    setTimeout(() => {
        document.getElementById("leaves").style.display='flex'
        document.getElementById("body").style.overflowY = "scroll";
        rhino.visible=true
        // document.getElementById("page1").style.display = "none";
        // document.getElementById("empty").style.display = "none";
        // document.getElementById("page2").style.position = "relative";
    }, 3000);
});

document.getElementById("backBtn").addEventListener("click", function () {
    document.getElementById("body").style.overflowY = "hidden";
    // document.getElementById("page1").style.display = "block";
    // document.getElementById("empty").style.display = "block";
    document.getElementById("page1").style.top = '0vh';
    // document.getElementById("bg").style.transitionDuration = '3s';
    document.getElementById("page2").style.transitionDuration = '1s';
    // document.getElementById("head").style.top = headTop;
    // document.getElementById("leaf1").style.top = leaf1Top;
    // document.getElementById("leaf2").style.bottom = leaf2Top;
    // document.getElementById("leaf2_2").style.bottom = leaf2_2Top;
    // document.getElementById("leaf3").style.bottom = leaf3Top;
    // document.getElementById("leaf3_2").style.bottom = leaf3_2Top;
    // document.getElementById("leaf3_3").style.bottom = leaf3_3Top;
    // document.getElementById("leaf4").style.bottom = leaf4Top;
    // document.getElementById("leaf4_2").style.bottom = leaf4_2Top;
    // document.getElementById("leaf4_3").style.bottom = leaf4_3Top;
    // document.getElementById("leaf4_4").style.bottom = leaf4_4Top;
    // document.getElementById("leaf4_5").style.top = leaf4_5Top;
    // document.getElementById("branch").style.top = branchTop;
    // document.getElementById("branch_2").style.top = branch_2Top;
    // document.getElementById("empty").style.top = emptyTop;
    // document.getElementById("empty").style.transitionDuration = "3s";
    document.getElementById("page2").style.top = '100vh';
    document.getElementById("backBtn").style.display = "none";
    document.getElementById("pawBtn").style.display='block'
    document.getElementById("leaves").style.display='none'
    document.getElementById("scroll").style.display='none'
    document.getElementById("canvas").style.display='none'
    document.getElementById("no").style.display='none'


    rhino.visible=false


    setTimeout(() => {
        document.getElementById("page2").style.position = "fixed";

    }, 3000);
});


// window.addEventListener("scroll", function () {
//     const currentScrollY = window.scrollY;
    
//     if (currentScrollY > prevScrollY) {
//         console.log("Scrolling Downwards");
//     } else if (currentScrollY < prevScrollY) {
//         console.log("Scrolling Upwards");
//     } else {
//         console.log("Not scrolling");
//     }
    
//     prevScrollY = currentScrollY;
// });







let prevScrollY = window.scrollY;
document.getElementById("sign1").classList.add('active')

let multi = parseInt(window.getComputedStyle(document.getElementById("bar")).getPropertyValue("width"));

// console.log('multi is ',parseInt())

window.addEventListener("scroll", function (e) {
    scrollVal = window.scrollY;
    // console.log('yy',scrollVal)
    const contentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    
      const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
      const maxScrollValue = contentHeight - viewportHeight;

    // document.getElementById("val").innerText=scrollVal + "  " + maxScrollValue

    perc=(scrollVal/maxScrollValue)*100

    document.getElementById("barVal").style.width=`${perc*(multi/100)}px`
    console.log(perc)


    if (scrollVal > prevScrollY) {
        console.log("Scrolling Downwards");


        if(19<perc && perc<=22){
            document.getElementById("sign1").classList.remove('active')
            document.getElementById("sign2").classList.add('active')
            document.getElementById("backBtn").style.display = "none";
            document.getElementById("page2").style.top='-100vh';
            document.getElementById("page3").style.top='0vh';
            document.getElementById("page2").style.transitionDuration='2s';
            document.getElementById("page3").style.transitionDuration='3s';
            rhino.visible=false
            setTimeout(()=>{
                rhino.visible=false

                elephant.visible=true
                tiger.visible=false
                sloth.visible=false
                polar_bear.visible=false
                penguin.visible=false
                pointLight.power=20
                pointLight2.power=20
            },3000)

    
        }
        else if(39<perc && perc<=42){
            document.getElementById("sign2").classList.remove('active')
            document.getElementById("sign3").classList.add('active')

            // document.getElementById("backBtn").style.display = "none";
            // document.getElementById("page2").style.top='-100vh';
            document.getElementById("page3").style.top='-100vh';
            document.getElementById("page4").style.top='0vh';
            document.getElementById("page3").style.transitionDuration='2s';
            document.getElementById("page4").style.transitionDuration='3s';
            elephant.visible=false
            pointLight.power=20
                pointLight2.power=20
            setTimeout(()=>{
                elephant.visible=false

                rhino.visible=false
                tiger.visible=true
                sloth.visible=false
                polar_bear.visible=false
                penguin.visible=false
                pointLight.power=20
                pointLight2.power=20
            },3000)
        }
        else if(58<perc && perc<=62){
            document.getElementById("sign3").classList.remove('active')
            document.getElementById("sign4").classList.add('active')

            // document.getElementById("backBtn").style.display = "none";
            // document.getElementById("page2").style.top='-100vh';
            document.getElementById("page4").style.top='-100vh';
            document.getElementById("page5").style.top='0vh';
            document.getElementById("page4").style.transitionDuration='2s';
            document.getElementById("page5").style.transitionDuration='3s';
            tiger.visible=false
            setTimeout(()=>{
                tiger.visible=false

                rhino.visible=false
                elephant.visible=false
                sloth.visible=true
                pointLight.power=100
                pointLight2.power=100
                polar_bear.visible=false
            penguin.visible=false
        },3000)
        }
        else if(78<perc && perc<=82){
            document.getElementById("sign4").classList.remove('active')
            document.getElementById("sign5").classList.add('active')

            // document.getElementById("backBtn").style.display = "none";
            // document.getElementById("page2").style.top='-100vh';
            document.getElementById("page5").style.top='-100vh';
            document.getElementById("page6").style.top='0vh';
            document.getElementById("page5").style.transitionDuration='2s';
            document.getElementById("page6").style.transitionDuration='3s';
            sloth.visible=false
            pointLight.power=20
                pointLight2.power=20
                setTimeout(()=>{
                    sloth.visible=false
                    
                    pointLight.power=20
                        pointLight2.power=20
                rhino.visible=false
                elephant.visible=false
                tiger.visible=false
                polar_bear.visible=true
                penguin.visible=false
            },3000)
        }
        else if(97<perc && perc<=100){
            document.getElementById("sign5").classList.remove('active')
            document.getElementById("sign6").classList.add('active')

            // document.getElementById("backBtn").style.display = "none";
            // document.getElementById("page2").style.top='-100vh';
            document.getElementById("page6").style.top='-100vh';
            document.getElementById("page7").style.top='0vh';
            document.getElementById("page6").style.transitionDuration='2s';
            document.getElementById("page7").style.transitionDuration='3s';
            polar_bear.visible=false
            setTimeout(()=>{
                polar_bear.visible=false

                rhino.visible=false
                elephant.visible=false
                tiger.visible=false
                sloth.visible=false
                penguin.visible=true
                pointLight.power=20
                pointLight2.power=20
            },3000)
        }
        
    } 
    else if (scrollVal < prevScrollY) {
        console.log("Scrolling Upwards");

        if(0<perc && perc<5){
            document.getElementById("sign2").classList.remove('active')
            document.getElementById("sign1").classList.add('active')

            document.getElementById("backBtn").style.display = "block";
            document.getElementById("page2").style.top='0vh';
            document.getElementById("page3").style.top='100vh';
            document.getElementById("page2").style.transitionDuration='3s';
            document.getElementById("page3").style.transitionDuration='2s';
            
            elephant.visible=false
            setTimeout(()=>{
                elephant.visible=false
                
                rhino.visible=true
                tiger.visible=false
                sloth.visible=false
                polar_bear.visible=false
                penguin.visible=false
                pointLight.power=20
                pointLight2.power=20
            },3000)
            }
       else if(19<perc && perc<22){
        document.getElementById("sign3").classList.remove('active')
            document.getElementById("sign2").classList.add('active')

            // document.getElementById("backBtn").style.display = "block";
            document.getElementById("page3").style.top='0vh';
            document.getElementById("page4").style.top='100vh';
            document.getElementById("page3").style.transitionDuration='3s';
            document.getElementById("page4").style.transitionDuration='2s';
            tiger.visible=false
            setTimeout(()=>{
                tiger.visible=false

                rhino.visible=false
                elephant.visible=true
                sloth.visible=false
                polar_bear.visible=false
                penguin.visible=false
                pointLight.power=20
                pointLight2.power=20
            },3000)
        }
       else if(38<perc && perc<42){
        document.getElementById("sign4").classList.remove('active')
            document.getElementById("sign3").classList.add('active')

            // document.getElementById("backBtn").style.display = "block";
            document.getElementById("page4").style.top='0vh';
            document.getElementById("page5").style.top='100vh';
            document.getElementById("page4").style.transitionDuration='3s';
            document.getElementById("page5").style.transitionDuration='2s';
            
            sloth.visible=false
            pointLight.power=20
                pointLight2.power=20
            setTimeout(()=>{
                sloth.visible=false

                
                rhino.visible=false
                elephant.visible=false
                tiger.visible=true
                polar_bear.visible=false
                penguin.visible=false
                pointLight.power=20
                pointLight2.power=20
            },3000)
        }
       else if(58<perc && perc<62){
        document.getElementById("sign5").classList.remove('active')
            document.getElementById("sign4").classList.add('active')

            // document.getElementById("backBtn").style.display = "block";
            document.getElementById("page5").style.top='0vh';
            document.getElementById("page6").style.top='100vh';
            document.getElementById("page5").style.transitionDuration='3s';
            document.getElementById("page6").style.transitionDuration='2s';
            polar_bear.visible=false
            setTimeout(()=>{
                polar_bear.visible=false

                rhino.visible=false
                elephant.visible=false
                tiger.visible=false
                sloth.visible=true
                pointLight.power=100
                pointLight2.power=100

                penguin.visible=false
            },3000)
        }
       else if(78<perc && perc<82){
        document.getElementById("sign6").classList.remove('active')
            document.getElementById("sign5").classList.add('active')

            // document.getElementById("backBtn").style.display = "block";
            document.getElementById("page6").style.top='0vh';
            document.getElementById("page7").style.top='100vh';
            document.getElementById("page6").style.transitionDuration='3s';
            document.getElementById("page7").style.transitionDuration='2s';
            penguin.visible=false
            pointLight.power=20
                pointLight2.power=20
            setTimeout(()=>{
                penguin.visible=false

                rhino.visible=false
                elephant.visible=false
                tiger.visible=false
                sloth.visible=false
                polar_bear.visible=true
                pointLight.power=20
                pointLight2.power=20
            },3000)
        }
    } 
    
    prevScrollY = scrollVal;
    
    
   
});



// document.getElementById("page3").addEventListener("scroll", function (e) {
//     scrollVal = document.getElementById("page3").scrollTop;
    
//     const maxScrollValue =
//     document.getElementById("page3").scrollHeight -
//     document.getElementById("page3").clientHeight;
//     // document.getElementById("val").innerText = maxScrollValue;
//     if(((scrollVal/maxScrollValue)*100)<=4){
        
//         document.getElementById("backBtn").style.display = "none";
//         document.getElementById("page2").style.top = '-100vh';
//         document.getElementById("page3").style.top = '0vh';
//     // document.getElementById("backBtn").style.display = "none";

//     setTimeout(() => {
//         document.getElementById("page2").style.position = "fixed";
//         document.getElementById("page3").style.position = "relative";
//     }, 3000);


//     }
// });

// if(document.getElementById("page2").style.position=='relative'){

// }

// window.addEventListener("scroll",function(){
//     document.getElementById("val").innerText=window.scrollY +' ' + window.innerHeight
//     // e.scroll
//     document.getElementById("prog").value=(window.scrollY/window.innerHeight)*100

//     if((window.scrollY/window.innerHeight)*100>98){
//         document.getElementById('empty').style.display='none'
//         window.scrollY=0
//         document.getElementById("prog").value=0

//     }

// })



const ambientLight = new THREE.AmbientLight(0x333333)
scene.add(ambientLight)

const pointLight = new THREE.PointLight('white')
pointLight.power=20
scene.add(pointLight)
pointLight.position.set(6, 5, 0)
// const pointLightHelper = new THREE.PointLightHelper(pointLight)
// scene.add(pointLightHelper)

const pointLight2 = new THREE.PointLight('white')
pointLight2.power=20
scene.add(pointLight2)
pointLight2.position.set(-6, 5, 0)
// const pointLightHelper2 = new THREE.PointLightHelper(pointLight2)
// scene.add(pointLightHelper2)

// const spotLight = new THREE.SpotLight('white')
// scene.add(spotLight)
// spotLight.position.set(0, 70, 0)
// const spotLightHelper = new THREE.SpotLightHelper(spotLight)
// scene.add(spotLightHelper)

// const axisHelper = new THREE.AxesHelper(5000)
// scene.add(axisHelper)

// const spotLight2 = new THREE.SpotLight('white')
// scene.add(spotLight2)
// spotLight2.position.set(-20, 20, 0)
// const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2)
// scene.add(spotLightHelper2)

const loadingManager = new THREE.LoadingManager()

const loader = new THREE.GLTFLoader(loadingManager);

let rhino
loader.load('./rhino.glb', function (gltf) {
    const model = gltf.scene
    rhino=model
    sub4 = gltf.scene
    // models[1]=model
    scene.add(model);
    model.scale.set(1.5, 1.5, 1.5);
    model.position.set(0, 1, 0)

});


let elephant
loader.load('./elephant.glb', function (gltf) {
    const model = gltf.scene
    elephant=model
    sub4 = gltf.scene
    // models[1]=model
    scene.add(model);
    model.scale.set(9, 9, 9);
    model.position.set(0, 1, 0)

});

let tiger
loader.load('./tiger.glb', function (gltf) {
    const model = gltf.scene
    tiger=model
    sub4 = gltf.scene
    // models[1]=model
    scene.add(model);
    model.scale.set(.02, .02, .02);
    model.position.set(0, 1, 0)

});

let sloth
loader.load('./sloth.glb', function (gltf) {
    const model = gltf.scene
    sloth=model
    // sub4 = gltf.scene
    // models[1]=model
    scene.add(model);
    model.scale.set(.8, .8, .8);
    model.position.set(0, 0, 0)

});
let polar_bear
loader.load('./polar_bear.glb', function (gltf) {
    const model = gltf.scene
    polar_bear=model
    // sub4 = gltf.scene
    // models[1]=model
    scene.add(model);
    model.scale.set(30, 30, 30);
    model.position.set(0, 1, 0)

});

let penguin
loader.load('./penguin.glb', function (gltf) {
    const model = gltf.scene
    penguin=model
    // sub4 = gltf.scene
    // models[1]=model
    scene.add(model);
    model.scale.set(5, 5, 5);
    model.position.set(0, 1, 0)

});


loadingManager.onProgress = function (url, loaded, total) {
    x = Math.ceil((loaded / total) * 100)

    document.getElementById('loadingCont').style.display = 'grid'
    document.getElementById('loading').innerText = `${x}%`
    // document.getElementById("html").style.overflowY = "hidden"
}

loadingManager.onLoad = function () {
    setTimeout(() => {
        document.getElementById('loadingCont').style.display = 'none'
        camera.lookAt(0,1,0)
        rhino.visible=false
elephant.visible=false
tiger.visible=false
sloth.visible=false
polar_bear.visible=false
penguin.visible=false
        // document.getElementById("html").style.overflowY = "scroll"

    }, 1000)
}




function animate() {

    if(rhino){
        rhino.rotation.y+=.01
    }
    if(elephant){
        elephant.rotation.y+=.01
    }
    if(tiger){
        tiger.rotation.y+=.01
    }
    if(sloth){
        sloth.rotation.y+=.01
    }
    if(polar_bear){
        polar_bear.rotation.y+=.01
    }
    if(penguin){
        penguin.rotation.y+=.01
    }

    // const delta = time.update().getDelta();
    // entityManager.update(delta);
    requestAnimationFrame(animate);


    renderer.render(scene, camera);
}
setTimeout(() => {
    animate()
}, 1000)

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setSize(document.getElementById("canvas").clientWidth, document.getElementById("canvas").clientHeight);

});
