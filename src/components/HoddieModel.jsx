


import { useRef, useEffect, useState } from "react";
import { useGLTF, Decal } from "@react-three/drei";
import * as THREE from "three";

export function Hoodie({ position, scale = 1, decalProps = {}, hoodieColor, decalPosition, decalRotation, decalScale,decalSide}) {
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
        {decalSide === "both" && (
          <Decal
            position={[-decalPosition.x, decalPosition.y, -decalPosition.z]}
            rotation={[decalRotation.x, Math.PI + decalRotation.y, -decalRotation.z]}
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
              side={THREE.DoubleSide}
              toneMapped={false}
              emissive="#ffffff"
              emissiveIntensity={0.15}
            />
          </Decal>
        )}
      </mesh>

      )}
    </group>
  );
}

useGLTF.preload("/tggrgbb.glb");