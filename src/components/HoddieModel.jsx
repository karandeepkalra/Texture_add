// // // // import { useRef, useEffect, useState } from "react";
// // // // import { useGLTF, Decal } from "@react-three/drei";
// // // // import * as THREE from "three";
// // // // import { useControls, folder } from "leva";
// // // // export function Hoodie({ position, scale = 1, decalProps = {} }) {
// // // //   const { nodes, materials, scene } = useGLTF("/tggrgbb.glb");
// // // //   const [defaultLogoTexture, setDefaultLogoTexture] = useState(null);
// // // //   const [customLogo, setCustomLogo] = useState(null);
// // // //   const [selectedMesh, setSelectedMesh] = useState(null);
// // // //   const modelRef = useRef();
// // // //   const decalRef = useRef();
// // // //   // Get all available mesh names for control panel
// // // //   const [meshNames, setMeshNames] = useState([]);
// // // //   // Load default logo texture
// // // //   useEffect(() => {
// // // //     const textureLoader = new THREE.TextureLoader();
// // // //     textureLoader.load(
// // // //       "/logoPrint.jpeg", // Default IKARUS 3D logo path
// // // //       (texture) => {
// // // //         // Apply correct texture settings for crisp logo rendering
// // // //         texture.flipY = false;
// // // //         texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
// // // //         texture.minFilter = THREE.LinearFilter;
// // // //         texture.magFilter = THREE.LinearFilter;
// // // //         texture.anisotropy = 16; // Improve texture quality
// // // //         texture.needsUpdate = true;
// // // //         setDefaultLogoTexture(texture);
// // // //         console.log("Default logo texture loaded successfully", texture.image.width, texture.image.height);
// // // //       },
// // // //       undefined,
// // // //       (error) => {
// // // //         console.error("Failed to load default logo texture:", error);
// // // //       }
// // // //     );
// // // //   }, []);
// // // //   // Handle custom logo from props
// // // //   useEffect(() => {
// // // //     if (decalProps.logoTexture) {
// // // //       const texture = decalProps.logoTexture;
// // // //       texture.flipY = false;
// // // //       texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
// // // //       texture.minFilter = THREE.LinearFilter;
// // // //       texture.magFilter = THREE.LinearFilter;
// // // //       texture.anisotropy = 16; // Improve texture quality
// // // //       texture.needsUpdate = true;
// // // //       setCustomLogo(texture);
// // // //       console.log("Custom logo texture applied");
// // // //     }
// // // //   }, [decalProps.logoTexture]);
// // // //   // Select mesh and center model
// // // //   useEffect(() => {
// // // //     if (!scene) return;
// // // //     const names = [];
// // // //     scene.traverse((child) => {
// // // //       if (child.isMesh) {
// // // //         names.push(child.name);
// // // //         if (child.name === "Main003") {
// // // //           setSelectedMesh(child);
// // // //           console.log("Found Main003 mesh for decal", child);
// // // //         }
// // // //       }
// // // //     });
// // // //     setMeshNames(names);
// // // //     console.log("Available meshes:", names);
// // // //     const box = new THREE.Box3().setFromObject(scene);
// // // //     const center = box.getCenter(new THREE.Vector3());
// // // //     scene.position.set(-center.x, -center.y, -center.z);
// // // //     console.log("Centered model at:", center);
// // // //   }, [scene]);
// // // //   // Prepare the logo texture to use
// // // //   const logoTexture = customLogo || defaultLogoTexture;
// // // //   // Controls for the decal (using reference values from first image)
// // // //   const {
// // // //     meshName,
// // // //     posX, posY, posZ,
// // // //     rotX, rotY, rotZ,
// // // //     scaleX, scaleY,
// // // //     debug,
// // // //     roughness,
// // // //     metalness,
// // // //     opacity,
// // // //     textureScale,
// // // //     enableDecal
// // // //   } = useControls({
// // // //     "Hoodie Options": folder({
// // // //       meshName: {
// // // //         options: meshNames.length > 0 ? meshNames : ["Main003"],
// // // //         value: "Main003",
// // // //         onChange: (value) => {
// // // //           scene?.traverse((child) => {
// // // //             if (child.isMesh && child.name === value) {
// // // //               setSelectedMesh(child);
// // // //               console.log("Selected new mesh for decal:", value);
// // // //             }
// // // //           });
// // // //         }
// // // //       },
// // // //       roughness: { value: 0.7, min: 0, max: 1, step: 0.01 },
// // // //       metalness: { value: 0.1, min: 0, max: 1, step: 0.01 },
// // // //       opacity: { value: 1, min: 0, max: 1, step: 0.01 },
// // // //       textureScale: { value: 1.0, min: 0.1, max: 2, step: 0.1 },
// // // //       enableDecal: { value: true, label: "Show Logo" }
// // // //     }),
// // // //     "Logo Position": folder({
// // // //       posX: { value: 0.00, min: -2, max: 2, step: 0.01 }, // Matching first image
// // // //       posY: { value: 0.00, min: -2, max: 2, step: 0.01 }, // Matching first image
// // // //       posZ: { value: 0.10, min: -1, max: 1, step: 0.01 }, // From reference
// // // //       rotX: { value: 0.04, min: 0, max: Math.PI * 2, step: 0.01 }, // From reference
// // // //       rotY: { value: 0.01, min: 0, max: Math.PI * 2, step: 0.01 }, // From reference
// // // //       rotZ: { value: 0.00, min: 0, max: Math.PI * 2, step: 0.01 }, // From reference
// // // //       scaleX: { value: 0.10, min: 0.1, max: 2, step: 0.01 }, // From reference
// // // //       scaleY: { value: 0.17, min: 0.1, max: 2, step: 0.01 }, // From reference
// // // //       debug: { value: false }, // Set to false by default for production
// // // //     }),
// // // //   });
// // // //   // Handle model scaling
// // // //   useEffect(() => {
// // // //     if (modelRef.current) {
// // // //       modelRef.current.scale.set(scale, scale, scale);
// // // //     }
// // // //   }, [scale]);
// // // //   // Debug decal positioning
// // // //   useEffect(() => {
// // // //     if (decalRef.current && debug) {
// // // //       console.log("Decal position:", [posX, posY, posZ]);
// // // //       console.log("Decal rotation:", [rotX, rotY, rotZ]);
// // // //       console.log("Decal scale:", [scaleX, scaleY, 1]);
// // // //     }
// // // //   }, [posX, posY, posZ, rotX, rotY, rotZ, scaleX, scaleY, debug]);
// // // //   if (!nodes || !materials) {
// // // //     console.error("GLTF model failed to load properly");
// // // //     return (
// // // //       <mesh>
// // // //         <boxGeometry args={[1, 1, 1]} />
// // // //         <meshBasicMaterial color="red" />
// // // //       </mesh>
// // // //     );
// // // //   }
// // // //   return (
// // // //     <group ref={modelRef} position={position} dispose={null}>
// // // //       {/* Render all the meshes from the model */}
// // // //       {Object.entries(nodes).map(([name, node]) => {
// // // //         if (node.isMesh) {
// // // //           return (
// // // //             <mesh
// // // //               key={name}
// // // //               name={name}
// // // //               castShadow
// // // //               receiveShadow
// // // //               geometry={node.geometry}
// // // //               material={materials[node.material?.name] || materials.Configurator_01}
// // // //             />
// // // //           );
// // // //         }
// // // //         return null;
// // // //       })}
// // // //       {/* Apply decal to the selected mesh */}
// // // //       {selectedMesh && enableDecal && logoTexture && (
// // // //         <mesh geometry={selectedMesh.geometry}>
// // // //           <Decal
// // // //             ref={decalRef}
// // // //             debug={debug}
// // // //             position={[posX, posY, posZ]}
// // // //             rotation={[rotX, rotY, rotZ]}
// // // //             scale={[scaleX, scaleY, 1]}
// // // //             map={logoTexture}
// // // //             polygonOffset
// // // //             polygonOffsetFactor={-10} // Avoid z-fighting
// // // //             transparent
// // // //           >
// // // //             <meshStandardMaterial
// // // //               map={logoTexture}
// // // //               transparent
// // // //               opacity={opacity}
// // // //               depthTest={true}
// // // //               depthWrite={false}
// // // //               polygonOffset
// // // //               polygonOffsetFactor={-10}
// // // //               roughness={roughness}
// // // //               metalness={metalness}
// // // //               side={THREE.FrontSide}
// // // //               toneMapped={false} // Preserve logo colors
// // // //               emissive="#FFFFFF" // Slight glow to make logo pop
// // // //               emissiveIntensity={0.1} // Subtle emission
// // // //             />
// // // //           </Decal>
// // // //         </mesh>
// // // //       )}
// // // //       {/* Debug helpers */}
// // // //       {debug && (
// // // //         <>
// // // //           <mesh position={[posX, posY, posZ]} scale={0.05}>
// // // //             <sphereGeometry args={[1, 16, 16]} />
// // // //             <meshBasicMaterial color="red" wireframe={false} />
// // // //           </mesh>
// // // //           <axesHelper args={[1]} position={[0, 0, 0]} />
// // // //         </>
// // // //       )}
// // // //     </group>
// // // //   );
// // // // }





// // // import { useRef, useEffect, useState } from "react";
// // // import { useGLTF, Decal } from "@react-three/drei";
// // // import * as THREE from "three";
// // // import { useControls, folder } from "leva";

// // // export function Hoodie({ position, scale = 1, decalProps = {} }) {
// // //   const { nodes, materials, scene } = useGLTF("/tggrgbb.glb");
// // //   const [selectedMesh, setSelectedMesh] = useState(null);
// // //   const modelRef = useRef();
// // //   const decalRef = useRef();

// // //   // Get all available mesh names for control panel
// // //   const [meshNames, setMeshNames] = useState([]);

// // //   // Select mesh and center model
// // //   useEffect(() => {
// // //     if (!scene) return;
// // //     const names = [];
// // //     scene.traverse((child) => {
// // //       if (child.isMesh) {
// // //         names.push(child.name);
// // //         if (child.name === "Main003") {
// // //           setSelectedMesh(child);
// // //           console.log("Found Main003 mesh for decal", child);
// // //         }
// // //       }
// // //     });
// // //     setMeshNames(names);
// // //     console.log("Available meshes:", names);
// // //     const box = new THREE.Box3().setFromObject(scene);
// // //     const center = box.getCenter(new THREE.Vector3());
// // //     scene.position.set(-center.x, -center.y, -center.z);
// // //     console.log("Centered model at:", center);
// // //   }, [scene]);

// // //   // Use the texture provided via props (user-uploaded)
// // //   const logoTexture = decalProps.logoTexture;

// // //   // Controls for the decal
// // //   const {
// // //     meshName,
// // //     posX, posY, posZ,
// // //     rotX, rotY, rotZ,
// // //     scaleX, scaleY,
// // //     debug,
// // //     roughness,
// // //     metalness,
// // //     opacity,
// // //     textureScale,
// // //     enableDecal
// // //   } = useControls({
// // //     "Hoodie Options": folder({
// // //       meshName: {
// // //         options: meshNames.length > 0 ? meshNames : ["Main003"],
// // //         value: "Main003",
// // //         onChange: (value) => {
// // //           scene?.traverse((child) => {
// // //             if (child.isMesh && child.name === value) {
// // //               setSelectedMesh(child);
// // //               console.log("Selected new mesh for decal:", value);
// // //             }
// // //           });
// // //         }
// // //       },
// // //       roughness: { value: 0.7, min: 0, max: 1, step: 0.01 },
// // //       metalness: { value: 0.1, min: 0, max: 1, step: 0.01 },
// // //       opacity: { value: 1, min: 0, max: 1, step: 0.01 },
// // //       textureScale: { value: 1.0, min: 0.1, max: 2, step: 0.1 },
// // //       enableDecal: { value: true, label: "Show Logo" }
// // //     }),
// // //     "Logo Position": folder({
// // //       posX: { value: 0.00, min: -2, max: 2, step: 0.01 },
// // //       posY: { value: 0.00, min: -2, max: 2, step: 0.01 },
// // //       posZ: { value: 0.10, min: -1, max: 1, step: 0.01 },
// // //       rotX: { value: 0.04, min: 0, max: Math.PI * 2, step: 0.01 },
// // //       rotY: { value: 0.01, min: 0, max: Math.PI * 2, step: 0.01 },
// // //       rotZ: { value: 0.00, min: 0, max: Math.PI * 2, step: 0.01 },
// // //       scaleX: { value: 0.10, min: 0.1, max: 2, step: 0.01 },
// // //       scaleY: { value: 0.17, min: 0.1, max: 2, step: 0.01 },
// // //       debug: { value: false },
// // //     }),
// // //   });

// // //   // Handle model scaling
// // //   useEffect(() => {
// // //     if (modelRef.current) {
// // //       modelRef.current.scale.set(scale, scale, scale);
// // //     }
// // //   }, [scale]);

// // //   // Debug decal positioning
// // //   useEffect(() => {
// // //     if (decalRef.current && debug) {
// // //       console.log("Decal position:", [posX, posY, posZ]);
// // //       console.log("Decal rotation:", [rotX, rotY, rotZ]);
// // //       console.log("Decal scale:", [scaleX, scaleY, 1]);
// // //     }
// // //   }, [posX, posY, posZ, rotX, rotY, rotZ, scaleX, scaleY, debug]);

// // //   if (!nodes || !materials) {
// // //     console.error("GLTF model failed to load properly");
// // //     return (
// // //       <mesh>
// // //         <boxGeometry args={[1, 1, 1]} />
// // //         <meshBasicMaterial color="red" />
// // //       </mesh>
// // //     );
// // //   }

// // //   return (
// // //     <group ref={modelRef} position={position} dispose={null}>
// // //       {/* Render all the meshes from the model */}
// // //       {Object.entries(nodes).map(([name, node]) => {
// // //         if (node.isMesh) {
// // //           return (
// // //             <mesh
// // //               key={name}
// // //               name={name}
// // //               castShadow
// // //               receiveShadow
// // //               geometry={node.geometry}
// // //               material={materials[node.material?.name] || materials.Configurator_01}
// // //             />
// // //           );
// // //         }
// // //         return null;
// // //       })}
// // //       {/* Apply decal to the selected mesh */}
// // //       {selectedMesh && enableDecal && logoTexture && (
// // //         <mesh geometry={selectedMesh.geometry}>
// // //           <Decal
// // //             ref={decalRef}
// // //             debug={debug}
// // //             position={[posX, posY, posZ]}
// // //             rotation={[rotX, rotY, rotZ]}
// // //             scale={[scaleX, scaleY, 1]}
// // //             map={logoTexture}
// // //             polygonOffset
// // //             polygonOffsetFactor={-10} // Avoid z-fighting
// // //             transparent
// // //           >
// // //             <meshStandardMaterial
// // //               map={logoTexture}
// // //               transparent
// // //               opacity={opacity}
// // //               depthTest={true}
// // //               depthWrite={false}
// // //               polygonOffset
// // //               polygonOffsetFactor={-10}
// // //               roughness={roughness}
// // //               metalness={metalness}
// // //               side={THREE.FrontSide}
// // //               toneMapped={false} // Preserve logo colors
// // //               emissive="#FFFFFF" // Slight glow to make logo pop
// // //               emissiveIntensity={0.1} // Subtle emission
// // //             />
// // //           </Decal>
// // //         </mesh>
// // //       )}
// // //       {/* Debug helpers */}
// // //       {debug && (
// // //         <>
// // //           <mesh position={[posX, posY, posZ]} scale={0.05}>
// // //             <sphereGeometry args={[1, 16, 16]} />
// // //             <meshBasicMaterial color="red" wireframe={false} />
// // //           </mesh>
// // //           <axesHelper args={[1]} position={[0, 0, 0]} />
// // //         </>
// // //       )}
// // //     </group>
// // //   );
// // // }

// // // useGLTF.preload("/tggrgbb.glb");


// // import { useRef, useEffect, useState } from "react";
// // import { useGLTF, Decal } from "@react-three/drei";
// // import * as THREE from "three";
// // import { useControls, folder } from "leva";

// // export function Hoodie({ position, scale = 1, decalProps = {} }) {
// //   const { nodes, materials, scene } = useGLTF("/tggrgbb.glb");
// //   const [selectedMesh, setSelectedMesh] = useState(null);
// //   const modelRef = useRef();
// //   const decalRef = useRef();
// //   const [meshNames, setMeshNames] = useState([]);

// //   // Center model and select "Main003" mesh
// //   useEffect(() => {
// //     if (!scene) return;
// //     const names = [];
// //     scene.traverse((child) => {
// //       if (child.isMesh) {
// //         names.push(child.name);
// //         if (child.name === "Main003") {
// //           setSelectedMesh(child);
// //         }
// //       }
// //     });
// //     setMeshNames(names);
// //     const box = new THREE.Box3().setFromObject(scene);
// //     const center = box.getCenter(new THREE.Vector3());
// //     scene.position.set(-center.x, -center.y, -center.z);
// //   }, [scene]);

// //   // Leva Controls with added hoodie color option
// //   const {
// //     meshName,
// //     posX, posY, posZ,
// //     rotX, rotY, rotZ,
// //     scaleX, scaleY,
// //     debug,
// //     roughness,
// //     metalness,
// //     opacity,
// //     textureScale,
// //     enableDecal,
// //     hoodieColor,
// //   } = useControls({
// //     "Hoodie Options": folder({
// //       meshName: {
// //         options: meshNames.length > 0 ? meshNames : ["Main003"],
// //         value: "Main003",
// //         onChange: (value) => {
// //           scene?.traverse((child) => {
// //             if (child.isMesh && child.name === value) {
// //               setSelectedMesh(child);
// //             }
// //           });
// //         },
// //       },
// //       hoodieColor: { value: "#4a4a4a", label: "Hoodie Color" }, // New color picker
// //       roughness: { value: 0.7, min: 0, max: 1, step: 0.01 },
// //       metalness: { value: 0.1, min: 0, max: 1, step: 0.01 },
// //       opacity: { value: 1, min: 0, max: 1, step: 0.01 },
// //       textureScale: { value: 1.0, min: 0.1, max: 2, step: 0.1 },
// //       enableDecal: { value: true, label: "Show Logo" },
// //     }),
// //     "Logo Position": folder({
// //       posX: { value: 0.00, min: -2, max: 2, step: 0.01 },
// //       posY: { value: 0.00, min: -2, max: 2, step: 0.01 },
// //       posZ: { value: 0.10, min: -1, max: 1, step: 0.01 },
// //       rotX: { value: 0.04, min: 0, max: Math.PI * 2, step: 0.01 },
// //       rotY: { value: 0.01, min: 0, max: Math.PI * 2, step: 0.01 },
// //       rotZ: { value: 0.00, min: 0, max: Math.PI * 2, step: 0.01 },
// //       scaleX: { value: 0.10, min: 0.1, max: 2, step: 0.01 },
// //       scaleY: { value: 0.17, min: 0.1, max: 2, step: 0.01 },
// //       debug: { value: false },
// //     }),
// //   });

// //   // Apply hoodie color to materials
// //   useEffect(() => {
// //     if (materials) {
// //       Object.values(materials).forEach((material) => {
// //         material.color.set(hoodieColor);
// //         material.needsUpdate = true;
// //       });
// //     }
// //   }, [hoodieColor, materials]);

// //   // Handle model scaling
// //   useEffect(() => {
// //     if (modelRef.current) {
// //       modelRef.current.scale.set(scale, scale, scale);
// //     }
// //   }, [scale]);

// //   // Debug decal positioning
// //   useEffect(() => {
// //     if (decalRef.current && debug) {
// //       console.log("Decal position:", [posX, posY, posZ]);
// //       console.log("Decal rotation:", [rotX, rotY, rotZ]);
// //       console.log("Decal scale:", [scaleX, scaleY, 1]);
// //     }
// //   }, [posX, posY, posZ, rotX, rotY, rotZ, scaleX, scaleY, debug]);

// //   if (!nodes || !materials) {
// //     return (
// //       <mesh>
// //         <boxGeometry args={[1, 1, 1]} />
// //         <meshBasicMaterial color="red" />
// //       </mesh>
// //     );
// //   }

// //   const logoTexture = decalProps.logoTexture;

// //   return (
// //     <group ref={modelRef} position={position} dispose={null}>
// //       {/* Render all meshes */}
// //       {Object.entries(nodes).map(([name, node]) => {
// //         if (node.isMesh) {
// //           return (
// //             <mesh
// //               key={name}
// //               name={name}
// //               castShadow
// //               receiveShadow
// //               geometry={node.geometry}
// //               material={materials[node.material?.name] || materials.Configurator_01}
// //             />
// //           );
// //         }
// //         return null;
// //       })}

// //       {/* Decal on selected mesh */}
// //       {selectedMesh && enableDecal && logoTexture && (
// //         <mesh geometry={selectedMesh.geometry}>
// //           <Decal
// //             ref={decalRef}
// //             debug={debug}
// //             position={[posX, posY, posZ]}
// //             rotation={[rotX, rotY, rotZ]}
// //             scale={[scaleX * textureScale, scaleY * textureScale, 1]}
// //             map={logoTexture}
// //             polygonOffset
// //             polygonOffsetFactor={-10}
// //             transparent
// //           >
// //             <meshStandardMaterial
// //               map={logoTexture}
// //               transparent
// //               opacity={opacity}
// //               depthTest={true}
// //               depthWrite={false}
// //               polygonOffset
// //               polygonOffsetFactor={-10}
// //               roughness={roughness}
// //               metalness={metalness}
// //               side={THREE.FrontSide}
// //               toneMapped={false}
// //               emissive="#ffffff"
// //               emissiveIntensity={0.15}
// //             />
// //           </Decal>
// //         </mesh>
// //       )}

// //       {/* Debug helpers */}
// //       {debug && (
// //         <>
// //           <mesh position={[posX, posY, posZ]} scale={0.05}>
// //             <sphere ogniometry args={[1, 16, 16]} />
// //             <meshBasicMaterial color="red" wireframe={false} />
// //           </mesh>
// //           <axesHelper args={[1]} position={[0, 0, 0]} />
// //         </>
// //       )}
// //     </group>
// //   );
// // }

// // useGLTF.preload("/tggrgbb.glb");



// import { useRef, useEffect, useState } from "react";
// import { useGLTF, Decal } from "@react-three/drei";
// import * as THREE from "three";

// export function Hoodie({ position, scale = 1, decalProps = {}, hoodieColor }) {
//   const { nodes, materials, scene } = useGLTF("/tggrgbb.glb");
//   const [selectedMesh, setSelectedMesh] = useState(null);
//   const modelRef = useRef();
//   const decalRef = useRef();

//   // Center model and select "Main003" mesh
//   useEffect(() => {
//     if (!scene) return;
//     scene.traverse((child) => {
//       if (child.isMesh && child.name === "Main003") {
//         setSelectedMesh(child);
//       }
//     });
//     const box = new THREE.Box3().setFromObject(scene);
//     const center = box.getCenter(new THREE.Vector3());
//     scene.position.set(-center.x, -center.y, -center.z);
//   }, [scene]);

//   // Apply hoodie color to materials
//   useEffect(() => {
//     if (materials && hoodieColor) {
//       Object.values(materials).forEach((material) => {
//         material.color.set(hoodieColor);
//         material.needsUpdate = true;
//       });
//     }
//   }, [hoodieColor, materials]);

//   // Handle model scaling
//   useEffect(() => {
//     if (modelRef.current) {
//       modelRef.current.scale.set(scale, scale, scale);
//     }
//   }, [scale]);

//   if (!nodes || !materials) {
//     return (
//       <mesh>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshBasicMaterial color="red" />
//       </mesh>
//     );
//   }

//   const logoTexture = decalProps.logoTexture;

//   // Hardcoded decal settings (can be made dynamic later if needed)
//   const decalSettings = {
//     position: [0, 0, 0.1],
//     rotation: [0.04, 0.01, 0],
//     scale: [0.1, 0.17, 1],
//     roughness: 0.7,
//     metalness: 0.1,
//     opacity: 1,
//   };

//   return (
//     <group ref={modelRef} position={position} dispose={null}>
//       {Object.entries(nodes).map(([name, node]) => {
//         if (node.isMesh) {
//           return (
//             <mesh
//               key={name}
//               name={name}
//               castShadow
//               receiveShadow
//               geometry={node.geometry}
//               material={materials[node.material?.name] || materials.Configurator_01}
//             />
//           );
//         }
//         return null;
//       })}
//       {selectedMesh && logoTexture && (
//         <mesh geometry={selectedMesh.geometry}>
//           <Decal
//             ref={decalRef}
//             position={decalSettings.position}
//             rotation={decalSettings.rotation}
//             scale={decalSettings.scale}
//             map={logoTexture}
//             polygonOffset
//             polygonOffsetFactor={-10}
//             transparent
//           >
//             <meshStandardMaterial
//               map={logoTexture}
//               transparent
//               opacity={decalSettings.opacity}
//               depthTest={true}
//               depthWrite={false}
//               polygonOffset
//               polygonOffsetFactor={-10}
//               roughness={decalSettings.roughness}
//               metalness={decalSettings.metalness}
//               side={THREE.FrontSide}
//               toneMapped={false}
//               emissive="#ffffff"
//               emissiveIntensity={0.15}
//             />
//           </Decal>
//         </mesh>
//       )}
//     </group>
//   );
// }

// useGLTF.preload("/tggrgbb.glb");


import { useRef, useEffect, useState } from "react";
import { useGLTF, Decal } from "@react-three/drei";
import * as THREE from "three";

export function Hoodie({ position, scale = 1, decalProps = {}, hoodieColor, decalPosition, decalRotation, decalScale }) {
  const { nodes, materials, scene } = useGLTF("/tggrgbb.glb");
  const [selectedMesh, setSelectedMesh] = useState(null);
  const modelRef = useRef();
  const decalRef = useRef();

  // Center model and select "Main003" mesh
  useEffect(() => {
    if (!scene) return;
    scene.traverse((child) => {
      if (child.isMesh && child.name === "Main003") {
        setSelectedMesh(child);
      }
    });
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.set(-center.x, -center.y, -center.z);
  }, [scene]);

  // Apply hoodie color to materials
  useEffect(() => {
    if (materials && hoodieColor) {
      Object.values(materials).forEach((material) => {
        material.color.set(hoodieColor);
        material.needsUpdate = true;
      });
    }
  }, [hoodieColor, materials]);

  // Handle model scaling
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.scale.set(scale, scale, scale);
    }
  }, [scale]);

  if (!nodes || !materials) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="red" />
      </mesh>
    );
  }

  const logoTexture = decalProps.logoTexture;

  return (
    <group ref={modelRef} position={position} dispose={null}>
      {Object.entries(nodes).map(([name, node]) => {
        if (node.isMesh) {
          return (
            <mesh
              key={name}
              name={name}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={materials[node.material?.name] || materials.Configurator_01}
            />
          );
        }
        return null;
      })}
      {selectedMesh && logoTexture && (
        <mesh geometry={selectedMesh.geometry}>
          <Decal
            ref={decalRef}
            position={[decalPosition.x, decalPosition.y, decalPosition.z]}
            rotation={[decalRotation.x, decalRotation.y, decalRotation.z]}
            scale={[decalScale.x, decalScale.y, 1]}
            map={logoTexture}
            polygonOffset
            polygonOffsetFactor={-10}
            transparent
          >
            <meshStandardMaterial
              map={logoTexture}
              transparent
              opacity={1}
              depthTest={true}
              depthWrite={false}
              polygonOffset
              polygonOffsetFactor={-10}
              roughness={0.7}
              metalness={0.1}
              side={THREE.FrontSide}
              toneMapped={false}
              emissive="#ffffff"
              emissiveIntensity={0.15}
            />
          </Decal>
        </mesh>
      )}
    </group>
  );
}

useGLTF.preload("/tggrgbb.glb");