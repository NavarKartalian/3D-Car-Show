import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";


interface BoxProps {
  color: string;
}

export function Box({ color }: BoxProps) {
  const boxRef = useRef(null);
  const time = useRef(0);
  const [ scale, setScale ] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05);
  const [ rotationSpeedX, setRotationSpeedX ] = useState(() => Math.random());
  const [ rotationSpeedY, setRotationSpeedY ] = useState(() => Math.random());
  const [ position, setPosition ] = useState<Vector3>(getInitialPosition());

  function getInitialPosition() {
    const v = new Vector3( (Math.random() * 2 - 1) * 3, Math.random() * 2.5 + 0.1, (Math.random() * 2 - 1) * 15);
    if(v.x < 0) v.x -= 1.75;
    if(v.x > 0) v.x += 1.75;
    
    return v;
  }

  function resetPosition() {
    let v = new Vector3((Math.random() * 2 - 1) * 3, Math.random() * 2.5 + 0.1, Math.random() * 10 + 10); 
    if(v.x < 0) v.x -= 1.75;
    if(v.x > 0) v.x += 1.75;

    setPosition(v);
  }

  useFrame((state, delta) => {
    time.current += delta * 1.2;
    const newZ = position.z - (time.current);

    if(newZ < -10) {
      resetPosition();
      time.current = 0;
    }

    boxRef.current.position.set(position.x, position.y, newZ);
    boxRef.current.rotation.x += delta * rotationSpeedX;
    boxRef.current.rotation.y += delta * rotationSpeedY;
  });

  return (
    <mesh ref={boxRef} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} envMapIntensity={0.15} />
    </mesh>
  );
}