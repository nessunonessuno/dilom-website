import { Container, List, UnorderedList, ListItem, Divider,Text, Button, SimpleGrid, GridItem, Box } from '@chakra-ui/react'
import Image from "next/image";
import preview from "/public/preview.jpg"
import preview2 from "/public/preview2.jpg"
import preview3 from "/public/preview3.jpg"
import preview4 from "/public/preview4.jpg"

import Link from "next/link"

import { useState } from "react"
export default function Portfolio() {


  return (
  	<>
	<Container maxWidth="100%" align="center">
  <Container maxWidth={["100%","80%"]} marginBottom="100px">
  <Text align="left" sx={{fontSize:["70px", "70px","100px", "100px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  progetti
  </Text>
  <Text align="left" sx={{fontSize:["20px", "20px","30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  Portfolio dei miei progetti
  </Text>
  </Container>

  <Container maxWidth="70%">
    <Text className="colored4" align="left" sx={{fontSize:["30px","30px","40px", "50px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
    nft
    </Text>
  </Container>

  <Container className="bg_colored" maxWidth={["100%","90%"]} padding={10}>
  <SimpleGrid align="center" columns={[1,1,1,3]} gap={10} >

  <GridItem align="center" >
  <Container>
  <Text className="preview_text" sx={{fontSize:["20px","20px","20px","20px"]}}>dadastickers (in corso)</Text>
  <a target="_blank" rel="noreferrer" href="https://dadastickers.com">
  <Image className="portfolio_image" src={preview3}  width={450} />
  </a>
  </Container>
  </GridItem>

  <GridItem align="center" >
  <Container>
  <Text className="preview_text">NFTMinter</Text>
  <a target="_blank" rel="noreferrer" href="https://dadastickers.com">
  <Image className="portfolio_image" src={preview3}  width={450} />
  </a>
  </Container>
  </GridItem>

  </SimpleGrid>
  </Container>


  <Container maxWidth="70%">
    <Text className="colored2" align="left" sx={{fontSize:["30px","30px","40px", "50px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
    ecommerce
    </Text>
  </Container>

  <Container className="bg_colored3" maxWidth={["100%","90%"]} padding={10}>
  <SimpleGrid align="center" columns={[1,1,1,3]} gap={10} >


  <GridItem align="center" >
  <Container>
  <Text className="preview_text">Illegnodicasa - classico</Text>
  <a target="_blank" rel="noreferrer" href="https://illegnodicasa.ch">
  <Image className="portfolio_image" src={preview2}  width={450} />
  </a>
  </Container>
  </GridItem>

  <GridItem align="center" >
  <Container>
  <Text className="preview_text">commerce - cryptovalute</Text>
  <a target="_blank" rel="noreferrer" href="https://illegnodicasa.ch">
  <Image  className="portfolio_image" src={preview2}  width={450} />
  </a>
  </Container>
  </GridItem>

  </SimpleGrid>
  </Container>


  <Container maxWidth="70%">
    <Text className="colored5" align="left" sx={{fontSize:["30px","30px","40px", "50px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
    altri
    </Text>
  </Container>

  <Container className="bg_colored2" maxWidth={["100%","90%"]} padding={10}>
  <SimpleGrid align="center" columns={[1,1,1,3]} gap={10} >
  <GridItem align="center" >
  <Container>
  <Text className="preview_text" sx={{color:"black"}}>piattaforma di prestito</Text>
  <a target="_blank" rel="noreferrer" href="/sample_1/">
  <Image className="portfolio_image" src={preview} width={450} />
  </a>
  </Container>
  </GridItem>

  <GridItem align="center" >
  <Container>
  <Text className="preview_text" sx={{color:"black"}}>webcracy - piattaforma di voto</Text>
  <a target="_blank" rel="noreferrer" href="https://webcracy.com">
  <Image className="portfolio_image" src={preview4} width={450} />
  </a>
  </Container>
  </GridItem>

  </SimpleGrid>
  </Container>

  <Divider sx={{marginBottom:"100px", opacity:"0.5"}}/>

  <Container maxWidth={["100%","80%"]} marginBottom="100px">
  <Text align="left" sx={{fontSize:["50px", "50px","100px", "100px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  competenze
  </Text>
  <Text align="left" sx={{fontSize:["20px", "20px","30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  le mie competenze come sviluppatore
  </Text>
  </Container>


  <Container className="bg_colored" sx={{padding:"5"}}>
  <Text align="center" sx={{fontSize:["30px", "30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  sviluppo Fontend
  </Text>
  <List>
    <ListItem>HTML</ListItem>
    <ListItem>CSS</ListItem>
    <ListItem>JavaScript</ListItem>
    <ListItem>React</ListItem>
    <ListItem>Next.js</ListItem>
  </List>

  </Container>

  <Container className="bg_colored" sx={{padding:"5"}}>
  <Text align="center" sx={{fontSize:["30px", "30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  sviluppo Backend
  </Text>
  <List>
    <ListItem>Node.js</ListItem>
    <ListItem>Koa.js</ListItem>
    <ListItem>MongoDB</ListItem>
    <ListItem>Python</ListItem>
    <ListItem>Django</ListItem>
    <ListItem>Git</ListItem>
  </List>

  </Container>


  <Container className="bg_colored" sx={{padding:"5"}}>
  <Text align="center" sx={{fontSize:["30px", "30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  sviluppo Blockchain e altro
  </Text>
  <List>
    <ListItem>Solidity</ListItem>
    <ListItem>Stripe</ListItem>
  </List>

  </Container>

  <Divider sx={{marginBottom:"100px", opacity:"0.5"}}/>

  <Container maxWidth={["100%","80%"]} marginBottom="100px">
  <Text align="left" sx={{fontSize:["60px", "60px","100px", "100px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  chi sono
  </Text>
  <Text align="left" sx={{fontSize:["20px", "20px","30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  Informazioni su di me
  </Text>
  </Container>
  <Container maxWidth={["100%","100%","60%","60%"]}>
  <Text sx={{fontSize:"20px", fontFamily:"IBM Plex Sans"}}>
    Ciao, sono un programmatore con sede in Ticino, Svizzera. Ho una vasta esperienza nella programmazione e nello sviluppo web, che va dalla sicurezza informatica, fino allo sviluppo di interfaccie UI. Sono sempre stato appassionato della tecnologia e mi piace affrontare nuove sfide per migliorare le mie abilità e rimanere al passo con le ultime tendenze del settore. Il mio obiettivo è quello di creare soluzioni su misura per le esigenze dei miei clienti, garantendo la massima qualità e il massimo livello di soddisfazione.
  </Text>
</Container>

	</Container>
	</>
  )
}