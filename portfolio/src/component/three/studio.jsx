import { Environment, Lightformer } from "@react-three/drei";
import React from "react";


function Studio() {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            scale={10}
            position={[-10, 5, -5]}
            rotation-y={Math.PI / 4}
            intensity={10}
          />
          <Lightformer
            form="rect"
            scale={10}
            position={[10, 0, 1]}
            rotation-y={Math.PI / 4}
            intensity={10}
          />
        </group>
      </Environment>
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />
        <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />  <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        penumbra={1}
        intensity={Math.PI * 1}
      />
    </group>
  );
}

export default Studio;
