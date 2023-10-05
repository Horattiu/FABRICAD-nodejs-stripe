// import React, { useRef, useEffect } from "react";
// import { useLoader, useFrame } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { Canvas, extend, useThree } from "@react-three/fiber";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import "../css/model.css";

// import { TextureLoader } from "three/src/loaders/TextureLoader";

// import { MeshBasicMaterial } from "three/src/materials/MeshBasicMaterial";

// extend({ OrbitControls });

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, "src/model/scene.gltf");
//   const modelRef = useRef();
//   const { camera, gl } = useThree();

//   // Add a rotation animation
//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.x += 0.001; // Adjust the rotation speed
//       modelRef.current.rotation.y += 0.001; // Adjust the rotation speed
//     }
//   });

//   return (
//     <>
//       <primitive object={gltf.scene} ref={modelRef} scale={9} />
//       <orbitControls
//         args={[camera, gl.domElement]}
//         enableDamping
//         dampingFactor={0.2}
//         rotateSpeed={0.5}
//         enablePan={false} // Disable panning/dragging
//       />
//     </>
//   );
// };

// export default Model;

import React, { useRef, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

// Model.jsx;
const Model = () => {
  const gltf = useLoader(GLTFLoader, "src/model/scene.gltf");
  const modelRef = useRef();
  const { camera, gl } = useThree();

  // gltf.scene.position.y = 5;

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  const isMobile = window.innerWidth <= 768;
  const scale = isMobile ? 5 : 1;

  return (
    <>
      <primitive object={gltf.scene} ref={modelRef} scale={scale} />
      <orbitControls
        args={[camera, gl.domElement]}
        enableDamping
        dampingFactor={0.2}
        rotateSpeed={0.5}
        enablePan={false} // Disable dragging
      />
    </>
  );
};

export default Model;

// const Model = (props) => {
//   const gltfLoader = new GLTFLoader(); // Create an instance of GLTFLoader
//   const modelRef = useRef();
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     gltfLoader.load(model, (gltf) => {
//       // Callback function executed when the model is loaded
//       if (modelRef.current) {
//         modelRef.current.add(gltf.scene); // Add the loaded model to the ref
//       }
//     });
//   }, [gltfLoader, model]);

//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += 0.005;
//     }
//   });

//   const isMobile = window.innerWidth <= 768;
//   const scale = isMobile ? 5 : 1;

//   return (
//     <>
//       <group ref={modelRef} scale={scale} />
//       <orbitControls
//         args={[camera, gl.domElement]}
//         enableDamping
//         dampingFactor={0.2}
//         rotateSpeed={0.5}
//         enablePan={false} // Disable dragging
//       />
//     </>
//   );
// };

// export default Model;
