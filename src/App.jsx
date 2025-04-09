import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { Experience } from "./components/Experience";
import "./App.css";

function App() {
  const [userTexture, setUserTexture] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [hoodieColor, setHoodieColor] = useState("#4a4a4a");
  const [decalPosition, setDecalPosition] = useState({ x: 0, y: -0.01, z: 0.1 });
  const [decalRotation, setDecalRotation] = useState({ x: Math.PI, y: 0, z: 0 });
  const [decalScale, setDecalScale] = useState({ x: 0.1, y: 0.17 });
  const [aspectRatio, setAspectRatio] = useState(1); // Default to 1 (square)
  const [decalSide, setDecalSide] = useState("front");
  const [activeSection, setActiveSection] = useState("pattern"); // For top tabs: pattern or color

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
      {/* New UI Overlay */}
      <div className="configurator-overlay">
        <div className="configurator-header">
          <button className="back-button">
          <span><img className="Logo" src="/Logo.png" alt="logo" /></span>
          </button>
        </div>

        <div className="design-panel">
          <div className="tool-sidebar">
            <div className="tool-item active">
              <div className="tool-icon">
              <span><i class="fas fa-palette"></i></span>
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">
              <span><i class="fa-solid fa-fill-drip"></i></span> 
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">
              <span><i class="fas fa-shapes"></i></span> 
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">
              <span><i class="fa-solid fa-image"></i></span>
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">
              <span><i class="fa-solid fa-t"></i></span> 
              </div>
            </div>
          </div>

          <div className="design-content">
            <div className="design-tabs">
              <div 
                className={`tab ${activeSection === "pattern" ? "active" : ""}`}
                onClick={() => setActiveSection("pattern")}
              >
                Pattern
              </div>
              <div 
                className={`tab ${activeSection === "color" ? "active" : ""}`}
                onClick={() => setActiveSection("color")}
              >
                Color
              </div>
            </div>

            {activeSection === "pattern" && (
              <div className="pattern-section">
                <div className="pattern-categories">
                  <span className="category active">Collar</span>
                  <span className="category">Placket</span>
                  <span className="category">Chest Pocket</span>
                  <span className="category">Cuff</span>
                </div>
                
                <div className="pattern-grid">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="pattern-item"></div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "color" && (
              <div className="color-section">
                <div className="color-grid">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="color-item"></div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="action-buttons">
          <button className="save-btn">Save</button>
          <button className="cart-btn">Add To Cart</button>
        </div>
      </div>

      <div className={`sidebar ${isPanelOpen ? "open" : ""}`}>
        <button className="toggle-btn" onClick={togglePanel}>
          {isPanelOpen ? "✖" : "☰"}
        </button>
        <div className="sidebar-content">
          <h2 className="sidebar-title">Hoodie Customizer</h2>

          <div className="control-section">
            <h3 className="section-title">Design Options</h3>

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

            <div className="control-item">
              <button className="action-btn" onClick={handleResetTexture}>
                Reset Logo
              </button>
            </div>

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

          
          <div className="control-section">
            <h3 className="section-title">Logo Adjustments</h3>

           
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

        
            <div className="control-item">
              <label className="control-label">Rotation</label>
              <div className="range-group">
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="360" 
                  value={decalRotation.x === Math.PI ? 0 : 360}
                  onChange={(e) => handleRotationXYChange("x", e.target.value)}
                  className="range-input"
                />
                <span>X: {decalRotation.x.toFixed(0)}°</span>
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

            <div className="control-item">
              <label className="control-label"> Scale</label>
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
            </div>
          </div>

          <div className="control-section">
            <h3 className="section-title">Display Options</h3>
         
            <div className="control-item">
              <button 
                className="action-btn" 
                onClick={() => setDecalSide(decalSide === "front" ? "both" : "front")}
              >
                {decalSide === "front" ? "Show on Both Sides" : "Show on Front Only"}
              </button>
            </div>
          </div>
        </div>
      </div>

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
              decalSide={decalSide}
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