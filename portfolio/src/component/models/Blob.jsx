import React, { useRef, useMemo } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

function BlobMesh() {
  const { nodes } = useGLTF("/models/blob-transformed.glb");
  const rotationRef = useRef();
  const { viewport, size } = useThree();

  // Use pixel width to pick a feel-good scale bracket
  const scale = useMemo(() => {
    if (size.width < 480) return viewport.width * 0.42;        // mobile
    if (size.width < 768) return viewport.width * 0.35;        // tablet
    if (size.width < 1280) return viewport.width * 0.28;       // laptop
    return Math.min(viewport.width * 0.22, 2.2);               // desktop cap
  }, [size.width, viewport.width]);

  // Lighter shader work on small screens to avoid jank while keeping the same look on desktop
  const transmissionQuality = useMemo(() => {
    if (size.width < 480) return { samples: 2, resolution: 256, chromaticAberration: 0.6 };
    if (size.width < 768) return { samples: 3, resolution: 384, chromaticAberration: 0.85 };
    return { samples: 4, resolution: 512, chromaticAberration: 1.0 };
  }, [size.width]);

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
        chromaticAberration={transmissionQuality.chromaticAberration}
        backside={true}
        color="#562fb1"
        samples={transmissionQuality.samples}
        resolution={transmissionQuality.resolution}
      />
    </mesh>
  );
}

export default function Blob(props) {
  return (
    <group {...props} dispose={null}>
      <BlobMesh />
    </group>
  );
}