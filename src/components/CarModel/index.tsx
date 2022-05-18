import { useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function CarModel() {
  const gltf = useLoader(GLTFLoader, '/models/car.glb');

  useEffect(() => {
    gltf.scene.scale.set(0.04, 0.04, 0.04);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  useFrame((state, delta) => {
    let times = state.clock.getElapsedTime() * 2;

    let group = gltf.scene.children[0].children[0].children[0];
    group.children[8].rotation.x = times;
    group.children[9].rotation.x = times;
    group.children[10].rotation.x = times;
    group.children[11].rotation.x = times;
  });
  
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  )
}