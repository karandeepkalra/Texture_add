// // // // import { ContactShadows, Float, Environment, OrbitControls } from "@react-three/drei";
// // // // import { useState, useEffect } from "react";
// // // // import { Hoodie } from "./HoddieModel";
// // // // import * as THREE from "three";
// // // // export const Experience = () => {
// // // //   const [logoTexture, setLogoTexture] = useState(null);
// // // //   // Load the default IKARUS 3D logo on mount
// // // //   useEffect(() => {
// // // //     const textureLoader = new THREE.TextureLoader();
// // // //     textureLoader.load(
// // // //       "/logoPrint.jpeg", // Make sure this path is correct
// // // //       (texture) => {
// // // //         texture.flipY = false;
// // // //         texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
// // // //         texture.minFilter = THREE.LinearFilter;
// // // //         texture.magFilter = THREE.LinearFilter;
// // // //         texture.anisotropy = 16; // Improve texture quality
// // // //         texture.needsUpdate = true;
// // // //         setLogoTexture(texture);
// // // //       },
// // // //       undefined,
// // // //       (error) => console.error("Error loading logo texture:", error)
// // // //     );
// // // //   }, []);
  
// // // //   return (
// // // //     <>
// // // //       {/* Lighting setup for better quality rendering */}
// // // //       <ambientLight intensity={0.3} />
// // // //       <directionalLight
// // // //         position={[10, 10, 5]}
// // // //         intensity={0.8}
// // // //         castShadow
// // // //         shadow-mapSize={[1024, 1024]}
// // // //       />
// // // //       <directionalLight
// // // //         position={[-10, 5, -5]}
// // // //         intensity={0.4}
// // // //         color="#B1E1FF"
// // // //       />
// // // //       <OrbitControls
// // // //         minPolarAngle={Math.PI / 6}
// // // //         maxPolarAngle={Math.PI / 1.5}
// // // //         enablePan={true}
// // // //         enableZoom={true}
// // // //         enableRotate={true}
// // // //       />
// // // //       <Float rotationIntensity={0.2} floatIntensity={0.5} speed={1.5}>
// // // //         <Hoodie
// // // //           position={[0, -0.5, 0]}
// // // //           scale={1}
// // // //           decalProps={{ logoTexture }}
// // // //         />
// // // //       </Float>
// // // //       <ContactShadows
// // // //         position={[0, -1.5, 0]}
// // // //         opacity={0.4}
// // // //         blur={2}
// // // //         scale={10}
// // // //         far={2}
// // // //         resolution={1024}
// // // //       />
// // // //       <Environment preset="sunset" background blur={4} />
// // // //     </>
// // // //   );
// // // // };


// // // import { ContactShadows, Float, Environment, OrbitControls } from "@react-three/drei";
// // // import { Hoodie } from "./HoddieModel";

// // // export const Experience = ({ userTexture }) => {
// // //   return (
// // //     <>
// // //       {/* Lighting setup for better quality rendering */}
// // //       <ambientLight intensity={0.3} />
// // //       <directionalLight
// // //         position={[10, 10, 5]}
// // //         intensity={0.8}
// // //         castShadow
// // //         shadow-mapSize={[1024, 1024]}
// // //       />
// // //       <directionalLight position={[-10, 5, -5]} intensity={0.4} color="#B1E1FF" />
// // //       <OrbitControls
// // //         minPolarAngle={Math.PI / 6}
// // //         maxPolarAngle={Math.PI / 1.5}
// // //         enablePan={true}
// // //         enableZoom={true}
// // //         enableRotate={true}
// // //       />
// // //       <Float rotationIntensity={0.2} floatIntensity={0.5} speed={1.5}>
// // //         <Hoodie
// // //           position={[0, 0, 0]}
// // //           scale={1}
// // //           decalProps={{ logoTexture: userTexture }} // Pass user-uploaded texture
// // //         />
// // //       </Float>
// // //       <ContactShadows
// // //         position={[0, -1.5, 0]}
// // //         opacity={0.4}
// // //         blur={2}
// // //         scale={10}
// // //         far={2}
// // //         resolution={1024}
// // //       />
// // //       <Environment preset="sunset" background blur={4} />
// // //     </>
// // //   );
// // // };



// // import { ContactShadows, Float, Environment, OrbitControls } from "@react-three/drei";
// // import { Hoodie } from "./HoddieModel";

// // export const Experience = ({ userTexture }) => {
// //   return (
// //     <>
// //       {/* Enhanced Lighting */}
// //       <ambientLight intensity={0.5} />
// //       <directionalLight
// //         position={[5, 10, 5]}
// //         intensity={1.2}
// //         castShadow
// //         shadow-mapSize={[2048, 2048]} // Higher resolution shadows
// //         shadow-bias={-0.0001}
// //       />
// //       <directionalLight
// //         position={[-5, 5, -5]}
// //         intensity={0.6}
// //         color="#d1e8ff"
// //       />
// //       <spotLight
// //         position={[0, 15, 10]}
// //         angle={0.3}
// //         penumbra={1}
// //         intensity={0.8}
// //         castShadow
// //         shadow-mapSize={[1024, 1024]}
// //       />

// //       {/* Orbit Controls with smoother interaction */}
// //       <OrbitControls
// //         minPolarAngle={Math.PI / 6}
// //         maxPolarAngle={Math.PI / 1.5}
// //         enablePan={true}
// //         enableZoom={true}
// //         enableRotate={true}
// //         dampingFactor={0.05} // Smooth damping
// //         rotateSpeed={0.5}
// //       />

// //       {/* Floating Hoodie */}
// //       <Float rotationIntensity={0.3} floatIntensity={0.8} speed={1.2}>
// //         <Hoodie
// //           position={[0, 0, 0]}
// //           scale={1}
// //           decalProps={{ logoTexture: userTexture }}
// //         />
// //       </Float>

// //       {/* Enhanced Shadows */}
// //       <ContactShadows
// //         position={[0, -1.5, 0]}
// //         opacity={0.5}
// //         blur={2.5}
// //         scale={12}
// //         far={3}
// //         resolution={2048} // Higher quality shadows
// //         color="#333333"
// //       />

// //       {/* Environment for a richer background */}
// //       <Environment preset="studio" background blur={0.6} />
// //     </>
// //   );
// // };


// import { ContactShadows, Float, Environment, OrbitControls } from "@react-three/drei";
// import { Hoodie } from "./HoddieModel";

// export const Experience = ({ userTexture, hoodieColor }) => {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <directionalLight
//         position={[5, 10, 5]}
//         intensity={1.2}
//         castShadow
//         shadow-mapSize={[2048, 2048]}
//         shadow-bias={-0.0001}
//       />
//       <directionalLight position={[-5, 5, -5]} intensity={0.6} color="#d1e8ff" />
//       <spotLight
//         position={[0, 15, 10]}
//         angle={0.3}
//         penumbra={1}
//         intensity={0.8}
//         castShadow
//         shadow-mapSize={[1024, 1024]}
//       />
//       <OrbitControls
//         minPolarAngle={Math.PI / 6}
//         maxPolarAngle={Math.PI / 1.5}
//         enablePan={true}
//         enableZoom={true}
//         enableRotate={true}
//         dampingFactor={0.05}
//         rotateSpeed={0.5}
//       />
//       <Float rotationIntensity={0.3} floatIntensity={0.8} speed={1.2}>
//         <Hoodie
//           position={[0, 0, 0]}
//           scale={1}
//           decalProps={{ logoTexture: userTexture }}
//           hoodieColor={hoodieColor} // Pass hoodie color
//         />
//       </Float>
//       <ContactShadows
//         position={[0, -1.5, 0]}
//         opacity={0.5}
//         blur={2.5}
//         scale={12}
//         far={3}
//         resolution={2048}
//         color="#333333"
//       />
//       <Environment preset="studio" background blur={0.6} />
//     </>
//   );
// };


import { ContactShadows, Float, Environment, OrbitControls } from "@react-three/drei";
import { Hoodie } from "./HoddieModel";

export const Experience = ({ userTexture, hoodieColor, decalPosition, decalRotation, decalScale }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.6} color="#d1e8ff" />
      <spotLight
        position={[0, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <OrbitControls
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 1.5}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        dampingFactor={0.05}
        rotateSpeed={0.5}
      />
      {/* <Float rotationIntensity={0.3} floatIntensity={0.8} speed={1.2}> */}
        <Hoodie
          position={[0, 0, 0]}
          scale={1}
          decalProps={{ logoTexture: userTexture }}
          hoodieColor={hoodieColor}
          decalPosition={decalPosition}
          decalRotation={decalRotation}
          decalScale={decalScale}
        />
      {/* </Float> */}
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.5}
        blur={2.5}
        scale={12}
        far={3}
        resolution={2048}
        color="#333333"
      />
      <Environment preset="studio" background blur={0.6} />
    </>
  );
};