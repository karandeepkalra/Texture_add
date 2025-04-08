import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import HoodieModel from './HoddieModel'; // Corrected import

function Scene({ decalPosition, decalRotation, decalScale, decalImage }) {
  return (
    <div className="canvas-container">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4], fov: 50 }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <HoodieModel
              decalPosition={decalPosition}
              decalRotation={decalRotation}
              decalScale={decalScale}
              decalImage={decalImage}
            />
          </Stage>
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
      </Canvas>
    </div>
  );
}

export default Scene;