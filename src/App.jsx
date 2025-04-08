// // // // // import { Canvas } from "@react-three/fiber";
// // // // // import { Experience } from "./components/Experience";
// // // // // import { Suspense } from "react";
// // // // // import { Leva } from "leva";
// // // // // function App() {
// // // // //   return (
// // // // {/* <div
// // // //       style={{
// // // //         width: "100vw", // Use viewport width
// // // //         height: "100vh", // Use viewport height
// // // //         background: "#ECECEC",
// // // //         position: "relative",
// // // //         overflow: "hidden", // Prevent scrollbars if content overflows
// // // //         margin: 0, // Remove any default margins
// // // //         padding: 0, // Remove any default padding
// // // //       }}> */}
// // // // //       {/* Control panel */}
// // // // //       <Leva collapsed={false} />
// // // // //       {/* 3D Canvas */}
// // // // //       <Canvas
// // // // //         shadows
// // // // //         camera={{ position: [0, 0, 5], fov: 30 }}
// // // // //         gl={{ preserveDrawingBuffer: true, antialias: true }}
// // // // //       >
// // // // //         <Suspense fallback={<FallbackComponent />}>
// // // // //           <Experience />
// // // // //         </Suspense>
// // // // //       </Canvas>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // function FallbackComponent() {
// // // // //   return (
// // // // //     <mesh>
// // // // //       <boxGeometry args={[1, 1, 1]} />
// // // // //       <meshBasicMaterial color="gray" wireframe />
// // // // //     </mesh>
// // // // //   );
// // // // // }
// // // // // export default App;



// // // // import { Canvas } from "@react-three/fiber";
// // // // import { Experience } from "./components/Experience";
// // // // import { Suspense, useState } from "react";
// // // // import { Leva } from "leva";
// // // // import * as THREE from "three";

// // // // function App() {
// // // //   const [userTexture, setUserTexture] = useState(null);

// // // //   // Handle file upload
// // // //   const handleFileUpload = (event) => {
// // // //     const file = event.target.files[0];
// // // //     if (file) {
// // // //       const textureLoader = new THREE.TextureLoader();
// // // //       const url = URL.createObjectURL(file);
// // // //       textureLoader.load(
// // // //         url,
// // // //         (texture) => {
// // // //           texture.flipY = false;
// // // //           texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
// // // //           texture.minFilter = THREE.LinearFilter;
// // // //           texture.magFilter = THREE.LinearFilter;
// // // //           texture.anisotropy = 16;
// // // //           texture.needsUpdate = true;
// // // //           setUserTexture(texture);
// // // //           URL.revokeObjectURL(url); // Clean up memory
// // // //           console.log("User texture loaded:", texture);
// // // //         },
// // // //         undefined,
// // // //         (error) => {
// // // //           console.error("Error loading user texture:", error);
// // // //           URL.revokeObjectURL(url);
// // // //         }
// // // //       );
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div
// // // //       style={{
// // //         // width: "100vw", // Use viewport width
// // //         // height: "100vh", // Use viewport height
// // //         // background: "#ECECEC",
// // //         // position: "relative",
// // //         // overflow: "hidden", // Prevent scrollbars if content overflows
// // //         // margin: 0, // Remove any default margins
// // //         // padding: 0, // Remove any default padding
// // // //       }}>
// // // //       <input
// // // //         type="file"
// // // //         accept="image/*"
// // // //         onChange={handleFileUpload}
// // // //         style={{ position: "absolute", top: 10, left: 10, zIndex: 10 }}
// // // //       />
// // // //       {/* Control panel */}
// // // //       <Leva collapsed={false} />
// // // //       {/* 3D Canvas */}
// // // //       <Canvas
// // // //         shadows
// // // //         camera={{ position: [0, 0, 5], fov: 30 }}
// // // //         gl={{ preserveDrawingBuffer: true, antialias: true }}
// // // //       >
// // // //         <Suspense fallback={<FallbackComponent />}>
// // // //           <Experience userTexture={userTexture} />
// // // //         </Suspense>
// // // //       </Canvas>
// // // //     </div>
// // // //   );
// // // // }

// // // // function FallbackComponent() {
// // // //   return (
// // // //     <mesh>
// // // //       <boxGeometry args={[1, 1, 1]} />
// // // //       <meshBasicMaterial color="gray" wireframe />
// // // //     </mesh>
// // // //   );
// // // // }

// // // // export default App;


// // // import { Canvas } from "@react-three/fiber";
// // // import { Experience } from "./components/Experience";
// // // import { Suspense, useState } from "react";
// // // import { Leva } from "leva";
// // // import * as THREE from "three";
// // // import "./App.css"; // Import the CSS file

// // // function App() {
// // //   const [userTexture, setUserTexture] = useState(null);
// // //   const [isPanelOpen, setIsPanelOpen] = useState(false);

// // //   // Handle file upload
// // //   const handleFileUpload = (event) => {
// // //     const file = event.target.files[0];
// // //     if (file) {
// // //       const textureLoader = new THREE.TextureLoader();
// // //       const url = URL.createObjectURL(file);
// // //       textureLoader.load(
// // //         url,
// // //         (texture) => {
// // //           texture.flipY = false;
// // //           texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
// // //           texture.minFilter = THREE.LinearFilter;
// // //           texture.magFilter = THREE.LinearFilter;
// // //           texture.anisotropy = 16;
// // //           texture.needsUpdate = true;
// // //           setUserTexture(texture);
// // //           URL.revokeObjectURL(url);
// // //           console.log("User texture loaded:", texture);
// // //         },
// // //         undefined,
// // //         (error) => {
// // //           console.error("Error loading user texture:", error);
// // //           URL.revokeObjectURL(url);
// // //         }
// // //       );
// // //     }
// // //   };

// // //   // Reset texture
// // //   const handleResetTexture = () => {
// // //     setUserTexture(null);
// // //   };

// // //   // Toggle panel visibility
// // //   const togglePanel = () => {
// // //     setIsPanelOpen(!isPanelOpen);
// // //   };

// // //   return (
// // //     <div className="app-container">
// // //       {/* Sidebar Panel */}
// // //       <div className={`sidebar ${isPanelOpen ? "open" : ""}`}>
// // //         <button className="toggle-btn" onClick={togglePanel}>
// // //           {isPanelOpen ? "✖" : "☰"}
// // //         </button>
// // //         <div className="sidebar-content">
// // //           <h2 className="sidebar-title">Hoodie Customizer</h2>
          
// // //           {/* File Upload */}
// // //           <div className="control-section">
// // //             <label htmlFor="file-upload" className="control-label">
// // //               Upload Logo
// // //             </label>
// // //             <input
// // //               id="file-upload"
// // //               type="file"
// // //               accept="image/*"
// // //               onChange={handleFileUpload}
// // //               className="file-input"
// // //             />
// // //           </div>

// // //           {/* Dropdown for Additional Options */}
          

// // //           {/* Leva Controls */}
// // //           <div className="leva-wrapper">
// // //             <Leva collapsed={false} />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* 3D Canvas */}
// // //       <div className="canvas-container">
// // //         <Canvas
// // //           shadows
// // //           camera={{ position: [0, 0, 5], fov: 30 }}
// // //           gl={{ preserveDrawingBuffer: true, antialias: true }}
// // //         >
// // //           <Suspense fallback={<FallbackComponent />}>
// // //             <Experience userTexture={userTexture} />
// // //           </Suspense>
// // //         </Canvas>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function FallbackComponent() {
// // //   return (
// // //     <mesh>
// // //       <boxGeometry args={[1, 1, 1]} />
// // //       <meshBasicMaterial color="gray" wireframe />
// // //     </mesh>
// // //   );
// // // }

// // // export default App;


// // import { Canvas } from "@react-three/fiber";
// // import { Experience } from "./components/Experience";
// // import { Suspense, useState } from "react";
// // import * as THREE from "three";
// // import "./App.css";

// // function App() {
// //   const [userTexture, setUserTexture] = useState(null);
// //   const [isPanelOpen, setIsPanelOpen] = useState(false);
// //   const [hoodieColor, setHoodieColor] = useState("#4a4a4a");

// //   // Handle file upload
// //   const handleFileUpload = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const textureLoader = new THREE.TextureLoader();
// //       const url = URL.createObjectURL(file);
// //       textureLoader.load(
// //         url,
// //         (texture) => {
// //           texture.flipY = false;
// //           texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
// //           texture.minFilter = THREE.LinearFilter;
// //           texture.magFilter = THREE.LinearFilter;
// //           texture.anisotropy = 16;
// //           texture.needsUpdate = true;
// //           setUserTexture(texture);
// //           URL.revokeObjectURL(url);
// //         },
// //         undefined,
// //         (error) => {
// //           console.error("Error loading user texture:", error);
// //           URL.revokeObjectURL(url);
// //         }
// //       );
// //     }
// //   };

// //   // Reset texture
// //   const handleResetTexture = () => {
// //     setUserTexture(null);
// //   };

// //   // Toggle panel
// //   const togglePanel = () => {
// //     setIsPanelOpen(!isPanelOpen);
// //   };

// //   return (
// //     <div className="app-container">
// //       {/* Sidebar Panel */}
// //       <div className={`sidebar ${isPanelOpen ? "open" : ""}`}>
// //         <button className="toggle-btn" onClick={togglePanel}>
// //           {isPanelOpen ? "✖" : "☰"}
// //         </button>
// //         <div className="sidebar-content">
// //           <h2 className="sidebar-title">Hoodie Customizer</h2>

// //           {/* Customization Section */}
// //           <div className="control-section">
// //             <h3 className="section-title">Design Options</h3>

// //             {/* File Upload */}
// //             <div className="control-item">
// //               <label htmlFor="file-upload" className="control-label">
// //                 Upload Logo
// //               </label>
// //               <input
// //                 id="file-upload"
// //                 type="file"
// //                 accept="image/*"
// //                 onChange={handleFileUpload}
// //                 className="file-input"
// //               />
// //             </div>

// //             {/* Reset Texture */}
// //             <div className="control-item">
// //               <button className="action-btn" onClick={handleResetTexture}>
// //                 Reset Logo
// //               </button>
// //             </div>

// //             {/* Hoodie Color */}
// //             <div className="control-item">
// //               <label htmlFor="hoodie-color" className="control-label">
// //                 Hoodie Color
// //               </label>
// //               <input
// //                 id="hoodie-color"
// //                 type="color"
// //                 value={hoodieColor}
// //                 onChange={(e) => setHoodieColor(e.target.value)}
// //                 className="color-picker"
// //               />
// //             </div>
// //           </div>

// //           {/* Placeholder for Future Features */}
// //           {/* <div className="control-section">
// //             <h3 className="section-title">More Options</h3>
// //             <button className="action-btn disabled" disabled>
// //               Download Model (Soon)
// //             </button>
// //             <button className="action-btn disabled" disabled>
// //               Share Design (Soon)
// //             </button>
// //           </div> */}
// //         </div>
// //       </div>

// //       {/* 3D Canvas */}
// //       <div className="canvas-container">
// //         <Canvas
// //           shadows
// //           camera={{ position: [0, 0, 5], fov: 30 }}
// //           gl={{ preserveDrawingBuffer: true, antialias: true }}
// //         >
// //           <Suspense fallback={<FallbackComponent />}>
// //             <Experience userTexture={userTexture} hoodieColor={hoodieColor} />
// //           </Suspense>
// //         </Canvas>
// //       </div>
// //     </div>
// //   );
// // }

// // function FallbackComponent() {
// //   return (
// //     <mesh>
// //       <boxGeometry args={[1, 1, 1]} />
// //       <meshBasicMaterial color="gray" wireframe />
// //     </mesh>
// //   );
// // }

// // export default App;



// import { Canvas } from "@react-three/fiber";
// import { Experience } from "./components/Experience";
// import { Suspense, useState } from "react";
// import * as THREE from "three";
// import "./App.css";

// function App() {
//   const [userTexture, setUserTexture] = useState(null);
//   const [isPanelOpen, setIsPanelOpen] = useState(false);
//   const [hoodieColor, setHoodieColor] = useState("#4a4a4a");
//   const [decalPosition, setDecalPosition] = useState({ x: 0, y: 0, z: 0.1 });
//   const [decalRotation, setDecalRotation] = useState({ x: 0.04, y: 0.01, z: 0 });
//   const [decalScale, setDecalScale] = useState({ x: 0.1, y: 0.17 });

//   // Handle file upload
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const textureLoader = new THREE.TextureLoader();
//       const url = URL.createObjectURL(file);
//       textureLoader.load(
//         url,
//         (texture) => {
//           texture.flipY = false;
//           texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
//           texture.minFilter = THREE.LinearFilter;
//           texture.magFilter = THREE.LinearFilter;
//           texture.anisotropy = 16;
//           texture.needsUpdate = true;
//           setUserTexture(texture);
//           URL.revokeObjectURL(url);
//         },
//         undefined,
//         (error) => {
//           console.error("Error loading user texture:", error);
//           URL.revokeObjectURL(url);
//         }
//       );
//     }
//   };

//   // Reset texture
//   const handleResetTexture = () => {
//     setUserTexture(null);
//   };

//   // Toggle panel
//   const togglePanel = () => {
//     setIsPanelOpen(!isPanelOpen);
//   };

//   return (
//     <div className="app-container">
//       {/* Sidebar Panel */}
//       <div className={`sidebar ${isPanelOpen ? "open" : ""}`}>
//         <button className="toggle-btn" onClick={togglePanel}>
//           {isPanelOpen ? "✖" : "☰"}
//         </button>
//         <div className="sidebar-content">
//           <h2 className="sidebar-title">Hoodie Customizer</h2>

//           {/* Design Options */}
//           <div className="control-section">
//             <h3 className="section-title">Design Options</h3>

//             {/* File Upload */}
//             <div className="control-item">
//               <label htmlFor="file-upload" className="control-label">
//                 Upload Logo
//               </label>
//               <input
//                 id="file-upload"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//                 className="file-input"
//               />
//             </div>

//             {/* Reset Texture */}
//             <div className="control-item">
//               <button className="action-btn" onClick={handleResetTexture}>
//                 Reset Logo
//               </button>
//             </div>

//             {/* Hoodie Color */}
//             <div className="control-item">
//               <label htmlFor="hoodie-color" className="control-label">
//                 Hoodie Color
//               </label>
//               <input
//                 id="hoodie-color"
//                 type="color"
//                 value={hoodieColor}
//                 onChange={(e) => setHoodieColor(e.target.value)}
//                 className="color-picker"
//               />
//             </div>
//           </div>

//           {/* Logo Adjustments */}
//           <div className="control-section">
//             <h3 className="section-title">Logo Adjustments</h3>

//             {/* Position */}
//             <div className="control-item">
//               <label className="control-label">Position</label>
//               <div className="range-group">
//                 <input
//                   type="range"
//                   min="-2"
//                   max="2"
//                   step="0.01"
//                   value={decalPosition.x}
//                   onChange={(e) =>
//                     setDecalPosition({ ...decalPosition, x: parseFloat(e.target.value) })
//                   }
//                 />
//                 <span>X: {decalPosition.x.toFixed(2)}</span>
//               </div>
//               <div className="range-group">
//                 <input
//                   type="range"
//                   min="-2"
//                   max="2"
//                   step="0.01"
//                   value={decalPosition.y}
//                   onChange={(e) =>
//                     setDecalPosition({ ...decalPosition, y: parseFloat(e.target.value) })
//                   }
//                 />
//                 <span>Y: {decalPosition.y.toFixed(2)}</span>
//               </div>
//               <div className="range-group">
//                 <input
//                   type="range"
//                   min="-1"
//                   max="1"
//                   step="0.01"
//                   value={decalPosition.z}
//                   onChange={(e) =>
//                     setDecalPosition({ ...decalPosition, z: parseFloat(e.target.value) })
//                   }
//                 />
//                 <span>Z: {decalPosition.z.toFixed(2)}</span>
//               </div>
//             </div>

//             {/* Rotation */}
//             <div className="control-item">
//               <label className="control-label">Rotation</label>
//               <div className="range-group">
//                 <input
//                   type="range"
//                   min="0"
//                   max={Math.PI * 2}
//                   step="0.01"
//                   value={decalRotation.x}
//                   onChange={(e) =>
//                     setDecalRotation({ ...decalRotation, x: parseFloat(e.target.value) })
//                   }
//                 />
//                 <span>X: {(decalRotation.x * 180 / Math.PI).toFixed(0)}°</span>
//               </div>
//               <div className="range-group">
//                 <input
//                   type="range"
//                   min="0"
//                   max={Math.PI * 2}
//                   step="0.01"
//                   value={decalRotation.y}
//                   onChange={(e) =>
//                     setDecalRotation({ ...decalRotation, y: parseFloat(e.target.value) })
//                   }
//                 />
//                 <span>Y: {(decalRotation.y * 180 / Math.PI).toFixed(0)}°</span>
//               </div>
//               <div className="range-group">
//                 <input
//                   type="range"
//                   min="0"
//                   max={Math.PI * 2}
//                   step="0.01"
//                   value={decalRotation.z}
//                   onChange={(e) =>
//                     setDecalRotation({ ...decalRotation, z: parseFloat(e.target.value) })
//                   }
//                 />
//                 <span>Z: {(decalRotation.z * 180 / Math.PI).toFixed(0)}°</span>
//               </div>
//             </div>

//             {/* Scale */}
//             <div className="control-item">
//               <label className="control-label">Scale</label>
//               <div className="range-group">
//                 <input
//                   type="range"
//                   min="0.1"
//                   max="2"
//                   step="0.01"
//                   value={decalScale.x}
//                   onChange={(e) =>
//                     setDecalScale({ ...decalScale, x: parseFloat(e.target.value) })
//                   }
//                 />
//                 <span>X: {decalScale.x.toFixed(2)}</span>
//               </div>
//               <div className="range-group">
//                 <input
//                   type="range"
//                   min="0.1"
//                   max="2"
//                   step="0.01"
//                   value={decalScale.y}
//                   onChange={(e) =>
//                     setDecalScale({ ...decalScale, y: parseFloat(e.target.value) })
//                   }
//                 />
//                 <span>Y: {decalScale.y.toFixed(2)}</span>
//               </div>
//             </div>
//           </div>

//           {/* More Options */}
//         </div>
//       </div>

//       {/* 3D Canvas */}
//       <div className="canvas-container">
//         <Canvas
//           shadows
//           camera={{ position: [0, 0, 5], fov: 30 }}
//           gl={{ preserveDrawingBuffer: true, antialias: true }}
//         >
//           <Suspense fallback={<FallbackComponent />}>
//             <Experience
//               userTexture={userTexture}
//               hoodieColor={hoodieColor}
//               decalPosition={decalPosition}
//               decalRotation={decalRotation}
//               decalScale={decalScale}
//             />
//           </Suspense>
//         </Canvas>
//       </div>
//     </div>
//   );
// }

// function FallbackComponent() {
//   return (
//     <mesh>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshBasicMaterial color="gray" wireframe />
//     </mesh>
//   );
// }

// export default App;



import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense, useState } from "react";
import * as THREE from "three";
import "./App.css";

function App() {
  const [userTexture, setUserTexture] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [hoodieColor, setHoodieColor] = useState("#4a4a4a");
  const [decalPosition, setDecalPosition] = useState({ x: 0, y: 0, z: 0.1 });
  const [decalRotation, setDecalRotation] = useState({ x: 0.04, y: 0.01, z: 0 });
  const [decalScale, setDecalScale] = useState({ x: 0.1, y: 0.17 });
  const [aspectRatio, setAspectRatio] = useState(1); // Default to 1 (square)

  // Handle file upload and calculate aspect ratio
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const textureLoader = new THREE.TextureLoader();
      const url = URL.createObjectURL(file);
      textureLoader.load(
        url,
        (texture) => {
          texture.flipY = false;
          texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.anisotropy = 16;
          texture.needsUpdate = true;
          setUserTexture(texture);

          // Calculate aspect ratio from texture
          const aspect = texture.image.width / texture.image.height;
          setAspectRatio(aspect);

          // Set initial scale with aspect ratio
          setDecalScale({ x: 0.1, y: 0.1 / aspect });
          URL.revokeObjectURL(url);
        },
        undefined,
        (error) => {
          console.error("Error loading user texture:", error);
          URL.revokeObjectURL(url);
        }
      );
    }
  };

  // Reset texture
  const handleResetTexture = () => {
    setUserTexture(null);
    setAspectRatio(1);
    setDecalScale({ x: 0.1, y: 0.17 }); // Reset to default
  };

  // Toggle panel
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  const handleRotationXYChange = (axis, value) => {
    const degrees = parseInt(value);
    const radians = degrees === 0 ? Math.PI : degrees === 360 ? 0 : Math.PI; // 0° = π, 360° = 0
    setDecalRotation({ ...decalRotation, [axis]: radians });
  };

  // Handle scale change while maintaining aspect ratio
  const handleScaleChange = (axis, value) => {
    const newScale = { ...decalScale };
    if (axis === "x") {
      newScale.x = parseFloat(value);
      newScale.y = newScale.x / aspectRatio;
    } else {
      newScale.y = parseFloat(value);
      newScale.x = newScale.y * aspectRatio;
    }
    setDecalScale(newScale);
  };

  return (
    <div className="app-container">
      {/* Sidebar Panel */}
      <div className={`sidebar ${isPanelOpen ? "open" : ""}`}>
        <button className="toggle-btn" onClick={togglePanel}>
          {isPanelOpen ? "✖" : "☰"}
        </button>
        <div className="sidebar-content">
          <h2 className="sidebar-title">Hoodie Customizer</h2>

          {/* Design Options */}
          <div className="control-section">
            <h3 className="section-title">Design Options</h3>

            {/* File Upload */}
            <div className="control-item">
              <label htmlFor="file-upload" className="control-label">
                Upload Logo
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="file-input"
              />
            </div>

            {/* Reset Texture */}
            <div className="control-item">
              <button className="action-btn" onClick={handleResetTexture}>
                Reset Logo
              </button>
            </div>

            {/* Hoodie Color */}
            <div className="control-item">
              <label htmlFor="hoodie-color" className="control-label">
                Hoodie Color
              </label>
              <input
                id="hoodie-color"
                type="color"
                value={hoodieColor}
                onChange={(e) => setHoodieColor(e.target.value)}
                className="color-picker"
              />
            </div>
          </div>

          {/* Logo Adjustments */}
          <div className="control-section">
            <h3 className="section-title">Logo Adjustments</h3>

            {/* Position */}
            <div className="control-item">
              <label className="control-label">Position</label>
              <div className="range-group">
                <input
                  type="range"
                  min="-2"
                  max="2"
                  step="0.01"
                  value={decalPosition.x}
                  onChange={(e) =>
                    setDecalPosition({ ...decalPosition, x: parseFloat(e.target.value) })
                  }
                />
                <span>X: {decalPosition.x.toFixed(2)}</span>
              </div>
              <div className="range-group">
                <input
                  type="range"
                  min="-2"
                  max="2"
                  step="0.01"
                  value={decalPosition.y}
                  onChange={(e) =>
                    setDecalPosition({ ...decalPosition, y: parseFloat(e.target.value) })
                  }
                />
                <span>Y: {decalPosition.y.toFixed(2)}</span>
              </div>
              <div className="range-group">
                <input
                  type="range"
                  min="-1"
                  max="1"
                  step="0.01"
                  value={decalPosition.z}
                  onChange={(e) =>
                    setDecalPosition({ ...decalPosition, z: parseFloat(e.target.value) })
                  }
                />
                <span>Z: {decalPosition.z.toFixed(2)}</span>
              </div>
            </div>

            {/* Rotation */}
            <div className="control-item">
              <label className="control-label">Rotation</label>
              <div className="range-group">
                 <input
                 type="range"
                 min="0"
                 max="360"
                 step="360" // Snaps between 0 and 360 only
                 value={decalRotation.x === Math.PI ? 0 : 360}
                 onChange={(e) => handleRotationXYChange("x", e.target.value)}
                 className="range-input"/>
                 <span>X: {(decalRotation.x * 180 / Math.PI).toFixed(0)}°</span>
              </div>
              <div className="range-group">
                <input
                  type="range"
                  min="0"
                  max={Math.PI * 2}
                  step="0.01"
                  value={decalRotation.z}
                  onChange={(e) =>
                    setDecalRotation({ ...decalRotation, z: parseFloat(e.target.value) })
                  }
                />
                <span>Z: {(decalRotation.z * 180 / Math.PI).toFixed(0)}°</span>
              </div>
            </div>

            {/* Scale */}
            <div className="control-item">
              <label className="control-label">Scale (Aspect Ratio Locked)</label>
              <div className="range-group">
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.01"
                  value={decalScale.x}
                  onChange={(e) => handleScaleChange("x", e.target.value)}
                />
                <span>X: {decalScale.x.toFixed(2)}</span>
              </div>
              {/* <div className="range-group">
                <input
                  type="range"
                  min={0.1 / aspectRatio}
                  max={2 / aspectRatio}
                  step={0.01 / aspectRatio}
                  value={decalScale.y}
                  onChange={(e) => handleScaleChange("y", e.target.value)}
                />
                <span>Y: {decalScale.y.toFixed(2)}</span>
              </div> */}
            </div>
          </div>

          {/* More Options */}
          
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="canvas-container">
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 30 }}
          gl={{ preserveDrawingBuffer: true, antialias: true }}
        >
          <Suspense fallback={<FallbackComponent />}>
            <Experience
              userTexture={userTexture}
              hoodieColor={hoodieColor}
              decalPosition={decalPosition}
              decalRotation={decalRotation}
              decalScale={decalScale}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

function FallbackComponent() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="gray" wireframe />
    </mesh>
  );
}

export default App;