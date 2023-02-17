import { useState, useRef, Suspense } from "react";
import { useFrame,useLoader} from "@react-three/fiber";
import * as THREE from 'three'

export default function Box (props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(props.clicked)
  const geometry = new THREE.DodecahedronGeometry()
  useFrame((state,delta) => (ref.current.rotation.x += props.number / 10))
  useFrame((state,delta) => {ref.current.rotation.y += props.number / 10})

  return (
    <mesh      
      {...props}
      ref={ref}
      scale={clicked ? 3 : 2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    > 
      <boxGeometry args={[1, 1, 1]} />      

      <meshStandardMaterial color={hovered ? 'black' : clicked ? "#36384c" : 'pink' } />    
    </mesh>
  )
}