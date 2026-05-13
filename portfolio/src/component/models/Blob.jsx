import React, { useRef, Suspense } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

function BlobMesh() {
  const { nodes } = useGLTF("/models/blob-transformed.glb");
  const rotationRef = useRef();
  const { viewport, size } = useThree();

  // Use pixel width to pick a feel-good scale bracket
  const scale = (() => {
    if (size.width < 480) return viewport.width * 0.42;        // mobile
    if (size.width < 768) return viewport.width * 0.35;        // tablet
    if (size.width < 1280) return viewport.width * 0.28;       // laptop
    return Math.min(viewport.width * 0.22, 2.2);               // desktop cap
  })();

  useFrame((_, delta) => {
    rotationRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh geometry={nodes.Object_2.geometry} ref={rotationRef} scale={scale}>
      <MeshTransmissionMaterial
        thickness={0.2}
        roughness={0}
        transmission={1}
        ior={3}
        chromaticAberration={1.0}
        backside={true}
        color="#562fb1"
        samples={4}
        resolution={512}
      />
    </mesh>
  );
}

export default function Blob(props) {
  return (
    <group {...props} dispose={null}>
      <Suspense>
        <BlobMesh />
      </Suspense>
    </group>
  );
}

useGLTF.preload("/models/blob-transformed.glb");