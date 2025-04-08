

import { ContactShadows, Float, Environment, OrbitControls } from "@react-three/drei";
import { Hoodie } from "./HoddieModel";

export const Experience = ({ userTexture, hoodieColor, decalPosition, decalRotation, decalScale,decalSide }) => {
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
          decalSide={decalSide}
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