import { MeshReflectorMaterial } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";


export function Ground() {
  const [roughness, normal] = useLoader(TextureLoader, [
    "/textures/terrain-roughness.jpg",
    "/textures/terrain-normal.jpg",
  ]);

  useEffect(() => {
    [normal, roughness].forEach((texture) => {
      texture.wrapS= RepeatWrapping;
      texture.wrapT= RepeatWrapping;
      texture.repeat.set(5, 5);
    });

    normal.encoding = LinearEncoding;
  }, [normal, roughness]);

  useFrame((state, delta) => {
    let t = -state.clock.getElapsedTime() * 0.128;
    normal.offset.set(0, t);
    roughness.offset.set(0, t);
  });

  return (
    <mesh rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        blur={[1000, 400]}
        envMapIntensity={0}
        dithering
        roughness={0.7}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        reflectorOffset={0.2}
        depthScale={0.01}
        color={[0.015, 0.015, 0.015]}
        roughnessMap={roughness}
        normalMap={normal}
      />
    </mesh>
  );
}