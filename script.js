import * as THREE from './three.js/build/three.module.js'
import * as CONTROL from './three.js/examples/jsm/controls/OrbitControls.js'
import * as LOAD from "./three.js/examples/jsm/loaders/GLTFLoader.js"
//import { SmoothShading } from 'd:/vc week 5 - computer graphics/three.js/build/three.module.js'

let scene, camera, renderer, controls, loader
const meshes = []
const helpers =[]



let init = () => {
   
    scene = new THREE.Scene()
    //scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,5000);
    //camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 6;
    camera.position.y = 0;
    camera.position.z = 9;


    renderer = new THREE.WebGLRenderer({
        antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setClearColor(0x303030)

    document.body.appendChild(renderer.domElement)

   
    controls = new CONTROL.OrbitControls(camera, renderer.domElement)
    controls.maxDistance = 11
    controls.maxPolarAngle = Math.PI/2.05

    let light, helper

    light = new THREE.DirectionalLight(0xffffff, 0.5)
    light.position.set (0,4,0)
    light.castShadow = true;
    light.penumbra = 1
    scene.add(light)
    // meshes.push(light)

    light = new THREE.PointLight(0xff1100, 1)
    light.position.set(5,2,5)
    light.castShadow = true;
    light.penumbra = 1
    scene.add(light)
    meshes.push(light)

    let geometry

    // geometry =  new THREE.SphereGeometry(2,32,32)
    // material = new THREE.MeshPhongMaterial({
    //     color: 0xff1100
    // })
    // mesh = new THREE.Mesh(geometry, material)
    // mesh.position.set(5,2,5)
    

    helper = new THREE.PointLightHelper(light)
    //scene.add(helper)
    //helpers.push(helper)

    light = new THREE.PointLight(0x1eff00, 1)
    light.position.set(-4,2,5)
    light.castShadow = true;
    light.penumbra = 1
    scene.add(light)
    meshes.push(light)

    helper = new THREE.PointLightHelper(light)
    //scene.add(helper)
    //helpers.push(helper)

    light = new THREE.PointLight(0x000dff, 1)
    light.position.set(-4,2,-5)
    light.castShadow = true;
    light.penumbra = 1
    scene.add(light)
    meshes.push(light)


    helper = new THREE.PointLightHelper(light)
    //scene.add(helper)
    //helpers.push(helper)

    light = new THREE.PointLight(0xffffff, 1)
    light.position.set(5,2,-5)
    light.castShadow = true;
    light.penumbra = 1
    scene.add(light)
    meshes.push(light)

    helper = new THREE.PointLightHelper(light)
    //scene.add(helper)
    //helpers.push(helper)

    let light2
    light2 = new THREE.PointLight(0xffea8c, 0.5)
    light2.position.set(-8.5,0.5,-0.9)
    light2.castShadow = true;
    light2.penumbra = 1
    scene.add(light2)


    // helper = new THREE.PointLightHelper(light2)
    // scene.add(helper)
    // helpers.push(helper)

    // let light3
    // light3 = new THREE.PointLight(0xffea8c, 2)
    // light3.position.set(0.5,0,0)
    // light3.castShadow = true;
    // light3.penumbra = 1
    // scene.add(light3)


    // helper = new THREE.PointLightHelper(light3)
    // scene.add(helper)
    // helpers.push(helper)

    let createText = (text, height, size) =>{
        let fontLoader = new THREE.FontLoader()
        fontLoader.load('./three.js/examples/fonts/helvetiker_bold.typeface.json', (font)=> {
            let geometry = new THREE.TextGeometry(text,{
                font: font,
                height:height,
                size:size,
                //color: 'orange'
            })
            
            geometry.center()

            let material = new THREE.MeshPhongMaterial({
                color:'red',
                specular: 0x050505,
                shininess: 100
            })
    
            let meshtext = new THREE.Mesh(geometry, material)
    
            meshtext.position.x = 0.5
            meshtext.position.y = 2.25 
            meshtext.position.z = 0
    
            //mesh.rotation.y = 110
    
            meshtext.castShadow = true
            meshtext.receiveShadow = true
    
            scene.add(meshtext)
            meshes.push(meshtext)
        })
    }

    let createText2 = (text, height, size) =>{
        let fontLoader = new THREE.FontLoader()
        fontLoader.load('./three.js/examples/fonts/helvetiker_bold.typeface.json', (font)=> {
            let geometry = new THREE.TextGeometry(text,{
                font: font,
                height:height,
                size:size,
                //color: 'orange'
            })
            
            geometry.center()

            let material = new THREE.MeshPhongMaterial({
                color:'green',
                specular: 0x050505,
                shininess: 100
            })
    
            let meshtext = new THREE.Mesh(geometry, material)
    
            meshtext.position.x = 0.5
            meshtext.position.y = 2 
            meshtext.position.z = 0
    
            //mesh.rotation.y = 110
    
            meshtext.castShadow = true
            meshtext.receiveShadow = true
    
            scene.add(meshtext)
            meshes.push(meshtext)
        })
    }

    let createText3 = (text, height, size) =>{
        let fontLoader = new THREE.FontLoader()
        fontLoader.load('./three.js/examples/fonts/helvetiker_bold.typeface.json', (font)=> {
            let geometry = new THREE.TextGeometry(text,{
                font: font,
                height:height,
                size:size,
                //color: 'orange'
            })
            
            geometry.center()

            let material = new THREE.MeshPhongMaterial({
                color:'cyan',
                specular: 0x050505,
                shininess: 100
            })
    
            let meshtext = new THREE.Mesh(geometry, material)
    
            meshtext.position.x = 0.5
            meshtext.position.y = 1.75 
            meshtext.position.z = 0
    
            //mesh.rotation.y = 110
    
            meshtext.castShadow = true
            meshtext.receiveShadow = true
    
            scene.add(meshtext)
            meshes.push(meshtext)
        })
    }

    
    createText("Fachri Adam", 0.2, 0.2)
    createText2("Muhammad Zhafran Tosa", 0.2, 0.2)
    createText3("Ridho Kurniawan Harefa", 0.2, 0.2)

    let loader4 = new LOAD.GLTFLoader()
    let mesh4, material4
    loader4.load('./model/scene.gltf', function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { node.castShadow = true;}
    
        } );
        gltf.scene.scale.set(2,2,2)
        material4 = new THREE.MeshPhongMaterial()
        mesh4 = new THREE.Mesh(gltf.scene, material4)
        gltf.scene.position.x = 0.5
        gltf.scene.position.y = -2.925
        gltf.scene.castShadow = true
        scene.add(gltf.scene);
    })

    loader = new LOAD.GLTFLoader()
    let mesh, material
    loader.load('./lamp/scene.gltf', function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { node.castShadow = true;}
    
        } );
        gltf.scene.scale.set(2,2,2)
        material = new THREE.MeshPhongMaterial()
        mesh = new THREE.Mesh(gltf.scene, material)
        gltf.scene.position.set(-4,-3,5)
        gltf.scene.castShadow = true
        scene.add(gltf.scene);
    })

    let loader5 = new LOAD.GLTFLoader()
    let mesh5, material5
    loader5.load('./lamp/scene.gltf', function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { node.castShadow = true;}
    
        } );
        gltf.scene.scale.set(2,2,2)
        material5 = new THREE.MeshPhongMaterial()
        mesh5 = new THREE.Mesh(gltf.scene, material5)
        gltf.scene.position.set(-4,-3,-5)
        gltf.scene.castShadow = true
        scene.add(gltf.scene);
    })

    let loader6 = new LOAD.GLTFLoader()
    let mesh6, material6
    loader6.load('./lamp/scene.gltf', function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { node.castShadow = true;}
    
        } );
        gltf.scene.scale.set(2,2,2)
        material6 = new THREE.MeshPhongMaterial()
        mesh6 = new THREE.Mesh(gltf.scene, material6)
        gltf.scene.position.set(5,-3,-5)
        gltf.scene.castShadow = true
        scene.add(gltf.scene);
    })

    let loader7 = new LOAD.GLTFLoader()
    let mesh7, material7
    loader7.load('./lamp/scene.gltf', function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { node.castShadow = true;}
    
        } );
        gltf.scene.scale.set(2,2,2)
        material7 = new THREE.MeshPhongMaterial()
        mesh7 = new THREE.Mesh(gltf.scene, material7)
        gltf.scene.position.set(5,-3,5)
        gltf.scene.castShadow = true
        scene.add(gltf.scene);
    })

    
    let loader2 
    loader2 = new LOAD.GLTFLoader()
    let mesh2, material2
    loader2.load('./bench/scene.gltf', function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { node.castShadow = true;}
    
        } );
        gltf.scene.scale.set(2.2,2.2,2.2)
        material2 = new THREE.MeshPhongMaterial()
        mesh2 = new THREE.Mesh(gltf.scene, material2)
        gltf.scene.position.x = -8.5
        gltf.scene.position.y = -3
        gltf.scene.castShadow = true
        scene.add(gltf.scene);

    })

    let loader3 
    loader3 = new LOAD.GLTFLoader()
    let mesh3, material3
    loader3.load('./ebox/scene.gltf', function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { node.castShadow = true;}
    
        } );
        gltf.scene.scale.set(0.1,0.1,0.1)
        material3 = new THREE.MeshPhongMaterial()
        mesh3 = new THREE.Mesh(gltf.scene, material3)
        gltf.scene.position.x = -6
        gltf.scene.position.y = -3
        gltf.scene.position.z = -9
        gltf.scene.castShadow = true
        scene.add(gltf.scene);

    })
    



    generateMeshes()
    //generateLight()
    generateplane()
    //generatestreetlights()
    
    
}

function generateMeshes() {
    let geometry, material, mesh
    
    //membuat box
    // geometry = new THREE.BoxGeometry(2, 2, 2)
    // let loader = new THREE.TextureLoader()
    // let texture = loader.load('./textures/crate.png')
    // let texture_normal = loader.load('./textures/crate_normal.png')
    // material = new THREE.MeshPhongMaterial({
    //     color: 0xffff00,
    //     //map: texture,
    //     normalMap: texture_normal
    // })
    // mesh = new THREE.Mesh(geometry, material)
    // mesh.position.x = 0
    // mesh.castShadow = true
    // scene.add(mesh)
    // meshes.push(mesh)

    let loader = new THREE.TextureLoader()
    let texture = loader.load('concrete.jpg')
    let texture2 = loader.load('metal.png')
    let texture3 = loader.load('./textures/crate.png')
    let texture_normal = loader.load('./textures/crate_normal.png')
   
    geometry= new THREE.BoxGeometry(0.5, 10, 20)
    material= new THREE.MeshStandardMaterial({
        color: 'gray',
        map: texture3,
        //normalMap: texture_normal,
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = -10
    mesh.position.y = 2
    mesh.receiveShadow = true
    scene.add(mesh)

    geometry= new THREE.BoxGeometry(20, 10, 0.5)
    material= new THREE.MeshStandardMaterial({
        color: 'gray',
        map: texture3,
        //normalMap: texture_normal,
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.z = -10
    mesh.position.y = 2
    mesh.receiveShadow = true
    scene.add(mesh)

    geometry= new THREE.BoxGeometry(0.5, 10, 20)
    material= new THREE.MeshStandardMaterial({
        color: 'gray',
        map: texture3,
        //normalMap: texture_normal,
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = 10
    mesh.position.z = 0
    mesh.position.y = 2
    mesh.receiveShadow = true
    scene.add(mesh)

    geometry= new THREE.BoxGeometry(20, 10, 0.5)
    material= new THREE.MeshPhongMaterial({
        color: 0x737373,
        map: texture2,
        normalMap: texture_normal,
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.z = 10
    mesh.position.y = 2
    mesh.receiveShadow = true
    scene.add(mesh)

    geometry= new THREE.SphereGeometry(0.2, 32, 32)
    material= new THREE.MeshBasicMaterial({
        color: 0xff1100,
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(5,2,5)
    mesh.receiveShadow = true
    scene.add(mesh)

    geometry= new THREE.SphereGeometry(0.2, 32, 32)
    material= new THREE.MeshBasicMaterial({
        color: 0xffffff,
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(5,2,-5)
    mesh.receiveShadow = true
    scene.add(mesh)

    geometry= new THREE.SphereGeometry(0.2, 32, 32)
    material= new THREE.MeshBasicMaterial({
        color: 0x1eff00,
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-4,2,5)
    mesh.receiveShadow = true
    scene.add(mesh)

    geometry= new THREE.SphereGeometry(0.2, 32, 32)
    material= new THREE.MeshBasicMaterial({
        color: 0x000dff,
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-4,2,-5)
    mesh.receiveShadow = true
    scene.add(mesh)
}

function generatestreetlights(){
    let geometry, material, mesh

    geometry = new THREE.BoxGeometry(0.5,10,0.5)
    material = new THREE.MeshPhongMaterial({
        color: 0x595959,
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = -5
    mesh.position.y = 2
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh) 

    geometry = new THREE.CylinderGeometry(0.5,1,1.5,32)
    material = new THREE.MeshPhongMaterial({
        color: 0x595959,
        //side: THREE.BackSide,
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = 0
    mesh.position.y = 6.5
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh) 

    geometry = new THREE.BoxGeometry(5.5,0.5,0.5)
    material = new THREE.MeshPhongMaterial({
        color: 0x595959,
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = -2.5
    mesh.position.y = 7
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh) 

    geometry = new THREE.SphereGeometry(0.4,32,32)
    material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        //side: THREE.BackSide,
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.y = 5.8
    mesh.position.x = 0
    mesh.position.z = 0
    scene.add(mesh)

    


}

function generateplane(){
    let bentuk, material, mesh

    let loader = new THREE.TextureLoader()
    let texture = loader.load('concrete.jpg')
    bentuk = new THREE.PlaneGeometry(20, 20)
    material = new THREE.MeshStandardMaterial({
        color: 0xb5b5b5,
        side: THREE.DoubleSide,
        map: texture,
    })
    mesh = new THREE.Mesh(bentuk, material)
    mesh.rotation.x = -Math.PI/2
    mesh.position.y = -2.91
    mesh.receiveShadow = true
    scene.add(mesh)

}






function animate() {
    renderer.render(scene, camera)

    meshes.forEach(meshtext => {
        meshtext.rotation.y += 0.005
        //meshtext.rotation.z += 0.005
        
    })

    helpers.forEach(helper =>{
        helper.update()
    })

    // if(Math.random() > 0.93 || light.power > 0.2){
    //     light.power = 50 + Math.random() * 500
    // }
    
    

    requestAnimationFrame(animate)   
}



init()
requestAnimationFrame(animate)