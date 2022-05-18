import { CubeCamera, Environment, OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { Bloom, ChromaticAberration, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing';
import { Vector2 } from "three";
import { Boxes } from "../Boxes";
import { CarModel } from "../CarModel";
import { FloatingGrid } from "../FloatingGrid";
import { Ground } from "../Ground";
import { Rings } from "../Rings";

interface CarShowProps {
  quality: number;
}

export function CarShow({ quality }: CarShowProps) {
  const offset = new Vector2(0.0005, 0.0012);

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault position={[3, 2, 6]} fov={50} />

      <color args={[0, 0, 0]} attach='background' />

      <spotLight
        color={'#ff81cc'}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.001}
      />
      
      <spotLight
        color={'#73adff'}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.001}
      />

      <CubeCamera resolution={256} frames={Infinity}>
        {/* Drei Type error */}
        {/*
          // @ts-ignore */}
        {(texture) => (
          <>
            <Environment map={texture} />
            <CarModel />
          </>
        )}
      </CubeCamera>
      
      <Boxes />
      <Rings />

      <FloatingGrid />
      <Ground />

      {quality > 1 && (
        <EffectComposer>
          <Bloom 
            luminanceThreshold={0.15} 
            luminanceSmoothing={0.025} 
            blendFunction={BlendFunction.ADD}
            intensity={1}
            kernelSize={4}
          />
          <ChromaticAberration 
            blendFunction={BlendFunction.NORMAL}
            offset={offset}
          />
        </EffectComposer>
      )}
    </>
  )
}