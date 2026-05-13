import React, { useRef, useMemo } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

function BlobMesh() {
  const { nodes } = useGLTF("/models/blob-transformed.glb");
  const rotationRef = useRef();
  const { viewport, size } = useThree();

  // Slightly smaller on-screen footprint = fewer shaded pixels for the transmission pass.
  const scale = useMemo(() => {
    if (size.width < 480) return viewport.width * 0.36;
    if (size.width < 768) return viewport.width * 0.3;
    if (size.width < 1280) return viewport.width * 0.24;
    return Math.min(viewport.width * 0.19, 1.95);
  }, [size.width, viewport.width]);

  // MeshTransmissionMaterial cost scales with samples × resolution; keep desktop usable, mobile smooth.
  const transmissionQuality = useMemo(() => {
    if (size.width < 480) return { samples: 2, resolution: 224, chromaticAberration: 0.55 };
    if (size.width < 768) return { samples: 2, resolution: 320, chromaticAberration: 0.75 };
    if (size.width < 1280) return { samples: 3, resolution: 384, chromaticAberration: 0.9 };
    return { samples: 3, resolution: 448, chromaticAberration: 0.95 };
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