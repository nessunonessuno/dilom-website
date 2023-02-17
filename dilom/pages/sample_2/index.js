import Image from 'next/image'
import { Container, Text, Button} from '@chakra-ui/react'
import { Canvas, useFrame,useLoader} from "@react-three/fiber";
import { useState, useRef, Suspense } from "react";
import { OrbitControls } from '@react-three/drei'
import Model from "/components/sample_2/Model";
import Box from "/components/sample_2/Box";

export default function Home() {
  const boxes = [];
  for (let i=0; i<100; i++){
    const n = 30
    var x = (Math.random() * n - n/2)
    var y = (Math.random() * n - n/2)
    var z = (Math.random() * n - n/2)

    while (x < 2 && x > -2 ){
      x = (Math.random() * n - n/2)
    }
    while (y < 2 && y > -2 ){
      y = (Math.random() * n - n/2)
    }
    while (z < 2 && z > -2 ){
      z = (Math.random() * n - n/2)
    }
    const number = Math.random() / 10
    const clicked = Math.random() < 0.2
    boxes.push(<Box clicked={clicked} position={[x,y,z]} number={number}/>)
  }
  return (
    <><Container maxWidth="100%" sx={{margin: "0 !important", background: "#613a43 !important", overflow: "hidden !important", padding: "0 !important"}}>
      <Text align="center" className="title" sx={{top:["30%","30%"],fontSize:["90px","100px","120px","150px"]}}>killacat</Text>
      <Text align="center" className="subtitle" sx={{top:["37%","37%","38%","40%"],fontSize:["30px","40px","50px","80px"]}}>Mint your NFT</Text>
      <Button className="minter">Mint Now</Button>
      <Canvas shadows >
      <ambientLight intensity={0.1} castShadow />
      <directionalLight />

      <Model position={[0,0,0]}/>
      { boxes }
      <OrbitControls />

      </Canvas>
      </Container>
    </>
  )
}
  