import { useState, useRef, Suspense, useMemo } from "react";
import { useFrame,useLoader} from "@react-three/fiber";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import * as THREE from 'three'
import { useTexture } from "@react-three/drei"
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Model (props) {
  const ref = useRef()
  const obj = useLoader(OBJLoader, '/sample_2/source/cat-arun.obj')
  const texture = useTexture("/sample_2/textures/cat-aruno.png");

  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  useFrame((state,delta) => {
    ref.current.rotation.x += delta * 0.01
    ref.current.rotation.y += delta
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.2
  })

  return (
    <>
    <mesh {...props} ref={ref} geometry={geometry} scale={0.04}>
      <meshPhysicalMaterial map={texture} />
    </mesh>
</>
  )
}