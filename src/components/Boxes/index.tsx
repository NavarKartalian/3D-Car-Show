import { useState } from "react";
import { Box } from "./Box";


export function Boxes() {
  const [ arr, setArr ] = useState<number[]>(() => {
    const array = [];

    for (let i = 0; i < 75; i++) {
      array.push(0);
    }

    return array;
  });

  return (
    <>
      {arr.map((item, index) => (
        <Box key={index} color={index % 2 === 0 ? '#a33535' : '#274590'} />
      ))}
    </>
  )
}