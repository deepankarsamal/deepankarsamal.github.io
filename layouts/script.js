// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
 const scene = new THREE.Scene()
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
 const renderer = new THREE.WebGLRenderer({ antialias: true})
 
 renderer.setSize( window.innerWidth, window.innerHeight )
 // sets renderer background color
 renderer.setClearColor("#222222")
 document.body.appendChild( renderer.domElement )
 camera.position.z = 5
 
 // resize canvas on resize window
 window.addEventListener( 'resize', () => {
   let width = window.innerWidth
   let height = window.innerHeight
   renderer.setSize( width, height )
   camera.aspect = width / height
   camera.updateProjectionMatrix()
 })
 // basic cube
 var geometry = new THREE.SphereGeometry( 1, 20, 20);
 var material = new THREE.MeshStandardMaterial( { color: 0xff0051, flatShading: true, metalness: 0.5, roughness: 0.5 })
 var cube = new THREE.Mesh ( geometry, material )
 scene.add( cube )
 
 // wireframe cube
 var geometry = new THREE.SphereGeometry( 3, 35, 35)
 var material = new THREE.MeshStandardMaterial( {
   color: "#dadada", wireframe: true, transparent: true
 })
 var wireframeCube = new THREE.Mesh ( geometry, material )
 scene.add( wireframeCube )
 //create a cylinder
 // ambient light
 var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
 scene.add( ambientLight )
 
 // point light
 var pointLight = new THREE.PointLight( 0xffffff, 1 );
 pointLight.position.set( 25, 50, 25 );
 scene.add( pointLight );
 
 
 function animate() {
   requestAnimationFrame( animate )
   cube.rotation.x += 0.04;
   cube.rotation.y += 0.04;
   cube.rotation.z += 0.04;
   cube.position.z = Math.sin(cube.rotation.z) * 2;
   wireframeCube.rotation.x -= 0.01;
   wireframeCube.rotation.y -= 0.01;
   renderer.render( scene, camera )
 }
 animate()