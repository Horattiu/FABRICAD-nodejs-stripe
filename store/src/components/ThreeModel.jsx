// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import "../css/modelBox.css";

// const ThreeModel = ({ modelPath, scale, texturePath }) => {
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );

//   const renderer = new THREE.WebGLRenderer({ antialias: true });

//   const canvasRef = useRef();
//   let model;
//   let controls; // Declare controls here

//   useEffect(() => {
//     const loader = new GLTFLoader();

//     // Create Ambient Light
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Color and intensity
//     scene.add(ambientLight);

//     // Create Directional Light (Optional)
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Color and intensity
//     directionalLight.position.set(1, 1, 1); // Set light direction
//     scene.add(directionalLight);

//     // Create OrbitControls
//     controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;

//     // Disable right mouse button dragging
//     controls.mouseButtons = {
//       LEFT: THREE.MOUSE.ROTATE,
//       MIDDLE: THREE.MOUSE.DOLLY,
//       RIGHT: null, // Disable right-click dragging
//     };

//     loader.load(modelPath, (gltf) => {
//       if (!model) {
//         model = gltf.scene;
//         model.scale.set(scale, scale, scale);

//         const textureLoader = new THREE.TextureLoader();
//         textureLoader.load(texturePath, (texture) => {
//           const material = new THREE.MeshStandardMaterial({
//             map: texture,
//             color: 0x888888, // Grey color
//           });

//           model.traverse((child) => {
//             if (child.isMesh) {
//               child.geometry.dispose();
//               child.material = material;
//             }
//           });
//         });

//         scene.add(model);

//         const boundingBox = new THREE.Box3().setFromObject(model);
//         const center = new THREE.Vector3();
//         boundingBox.getCenter(center);

//         const boundingSphere = new THREE.Sphere();
//         boundingBox.getBoundingSphere(boundingSphere);
//         const cameraDistance = boundingSphere.radius * 2;

//         const cameraPosition = center.clone();
//         cameraPosition.add(new THREE.Vector3(0, 0, cameraDistance));
//         camera.position.copy(cameraPosition);

//         controls.target.copy(center);
//       }
//     });

//     scene.background = new THREE.Color(0xbcd3d4); // Sets the background color to red

//     const animate = () => {
//       requestAnimationFrame(animate);

//       if (model) {
//         model.rotation.y += 0.002;
//       }

//       renderer.render(scene, camera);
//     };

//     animate();

//     canvasRef.current.appendChild(renderer.domElement);

//     return () => {
//       renderer.dispose();
//       controls.dispose();
//     };
//   }, [modelPath, scale, texturePath]);

//   return <div className="model-box" ref={canvasRef} />;
// };

// // Memoize the ThreeModel component
// export default React.memo(ThreeModel);

// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import "../css/modelBox.css";

// const ThreeModel = ({ modelPath, scale, texturePath }) => {
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );

//   const renderer = new THREE.WebGLRenderer({ antialias: true });

//   const canvasRef = useRef();
//   let model;
//   let controls; // Declare controls here

//   useEffect(() => {
//     const loader = new GLTFLoader();

//     camera.fov = 90;
//     camera.position.z = 2;
//     camera.updateProjectionMatrix();

//     // Create Ambient Light
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Color and intensity
//     scene.add(ambientLight);

//     // Create Directional Light (Optional)
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Color and intensity
//     directionalLight.position.set(1, 1, 1); // Set light direction
//     scene.add(directionalLight);

//     // Create OrbitControls
//     controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;

//     // Disable right mouse button dragging
//     controls.mouseButtons = {
//       LEFT: THREE.MOUSE.ROTATE,
//       MIDDLE: THREE.MOUSE.DOLLY,
//       RIGHT: null, // Disable right-click dragging
//     };

//     loader.load(modelPath, (gltf) => {
//       if (!model) {
//         model = gltf.scene;
//         model.scale.set(scale, scale, scale);

//         const textureLoader = new THREE.TextureLoader();
//         textureLoader.load(texturePath, (texture) => {
//           const material = new THREE.MeshStandardMaterial({
//             map: texture,
//             color: 0x888888, // Grey color
//           });

//           model.traverse((child) => {
//             if (child.isMesh) {
//               child.geometry.dispose();
//               child.material = material;
//             }
//           });
//         });

//         scene.add(model);

//         const boundingBox = new THREE.Box3().setFromObject(model);
//         const center = new THREE.Vector3();
//         boundingBox.getCenter(center);

//         const boundingSphere = new THREE.Sphere();
//         boundingBox.getBoundingSphere(boundingSphere);
//         const cameraDistance = boundingSphere.radius * 2;

//         const cameraPosition = center.clone();
//         cameraPosition.add(new THREE.Vector3(0, 0, cameraDistance));
//         camera.position.copy(cameraPosition);

//         controls.target.copy(center);
//       }
//     });

//     scene.background = new THREE.Color(0xbeddde); // Sets the background color to red

//     const animate = () => {
//       requestAnimationFrame(animate);

//       if (model) {
//         model.rotation.y += 0.002;
//       }

//       renderer.render(scene, camera);
//     };

//     animate();

//     canvasRef.current.appendChild(renderer.domElement);

//     return () => {
//       renderer.dispose();
//       controls.dispose();
//     };
//   }, [modelPath, scale, texturePath]);

//   return <div className="model-box" ref={canvasRef} />;
// };

// // Memoize the ThreeModel component
// export default React.memo(ThreeModel);

// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import "../css/modelBox.css"; // Asigură-te că calea către fișierul CSS este corectă

// const ThreeModel = ({ modelPath, scale, texturePath }) => {
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Lățimea și înălțimea camerei nu mai sunt specificate aici

//   const renderer = new THREE.WebGLRenderer({ antialias: true });

//   const canvasRef = useRef();
//   let model;
//   let controls;

//   useEffect(() => {
//     const loader = new GLTFLoader();

//     camera.fov = 90;
//     camera.position.z = 2;
//     camera.updateProjectionMatrix();

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
//     controls.mouseButtons = {
//       LEFT: THREE.MOUSE.ROTATE,
//       MIDDLE: THREE.MOUSE.DOLLY,
//       RIGHT: null,
//     };

//     loader.load(modelPath, (gltf) => {
//       if (!model) {
//         model = gltf.scene;
//         model.scale.set(scale, scale, scale);

//         const textureLoader = new THREE.TextureLoader();
//         textureLoader.load(texturePath, (texture) => {
//           const material = new THREE.MeshStandardMaterial({
//             map: texture,
//             color: 0x888888,
//             transparent: true, // Permite transparența
//             opacity: 2,
//           });

//           model.traverse((child) => {
//             if (child.isMesh) {
//               child.geometry.dispose();
//               child.material = material;
//             }
//           });
//         });

//         scene.add(model);

//         const animate = () => {
//           requestAnimationFrame(animate);

//           if (model) {
//             model.rotation.y += 0.002;
//           }

//           renderer.render(scene, camera);
//         };

//         animate();
//       }
//     });

//     // Configurarea rendererului pentru a se potrivi dimensiunilor containerului CSS
//     const containerWidth = parseFloat(
//       getComputedStyle(canvasRef.current).width
//     );
//     const containerHeight = parseFloat(
//       getComputedStyle(canvasRef.current).height
//     );
//     renderer.setSize(containerWidth, containerHeight); // Stabilește dimensiunile rendererului folosind CSS

//     // Adaugă renderer-ul DOM la container
//     canvasRef.current.appendChild(renderer.domElement);

//     return () => {
//       renderer.dispose();
//       controls.dispose();
//     };
//   }, [modelPath, scale, texturePath]);

//   return <div className="model-container" ref={canvasRef} />;
// };

// export default React.memo(ThreeModel);

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "../css/modelBox.css";

const ThreeModel = ({ modelPath, scale, texturePath }) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Setează alpha la true pentru a permite transparența

  const canvasRef = useRef();
  let model;
  let controls;

  useEffect(() => {
    const loader = new GLTFLoader();

    camera.fov = 90;
    camera.position.z = 180;
    camera.updateProjectionMatrix();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: null,
    };

    loader.load(modelPath, (gltf) => {
      if (!model) {
        model = gltf.scene;
        model.scale.set(scale, scale, scale);

        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(texturePath, (texture) => {
          const material = new THREE.MeshStandardMaterial({
            map: texture,
            color: 0x888888,
            transparent: true, // Permite transparența
            opacity: 0.8, // Setează nivelul de opacitate (0-1)
          });

          model.traverse((child) => {
            if (child.isMesh) {
              child.geometry.dispose();
              child.material = material;
            }
          });
        });

        scene.add(model);

        const animate = () => {
          requestAnimationFrame(animate);

          if (model) {
            model.rotation.y += 0.002;
          }

          renderer.render(scene, camera);
        };

        animate();
      }
    });

    // Configurarea rendererului pentru a se potrivi dimensiunilor containerului CSS
    const containerWidth = parseFloat(
      getComputedStyle(canvasRef.current).width
    );
    const containerHeight = parseFloat(
      getComputedStyle(canvasRef.current).height
    );
    renderer.setSize(containerWidth, containerHeight);

    // Adaugă renderer-ul DOM la container
    canvasRef.current.appendChild(renderer.domElement);

    return () => {
      renderer.dispose();
      controls.dispose();
    };
  }, [modelPath, scale, texturePath]);

  return <div className="model-container" ref={canvasRef} />;
};

export default React.memo(ThreeModel);
