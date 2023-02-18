import { Container, List, UnorderedList, ListItem, Divider,Text, Button, SimpleGrid, GridItem, Box } from '@chakra-ui/react'
import Image from "next/image";
import preview from "/public/previews/preview.jpg"
import preview2 from "/public/previews/preview2.jpg"
import preview3 from "/public/previews/preview3.jpg"
import preview4 from "/public/previews/preview4.jpg"
import preview5 from "/public/previews/preview5.jpg"

import Link from "next/link"

import { useState } from "react"
export default function Portfolio() {


  return (
  	<>
	<Container maxWidth="100%" align="center">
  <Container maxWidth={["100%","80%"]} marginBottom="100px">
  <Text align="left" sx={{fontSize:["70px", "70px","100px", "100px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  Progetti
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
  <Text className="preview_text" sx={{fontSize:["20px","20px","20px","20px"]}}>dadastickers</Text>
  <a target="_blank" rel="noreferrer" href="https://dadastickers.com">
  <Image className="portfolio_image" src={preview3}  width={450} alt={"loading.."}/>
  </a>
  </Container>
  </GridItem>

  <GridItem align="center" >
  <Container>
  <Text className="preview_text">NFTMinter</Text>
  <a target="_blank" rel="noreferrer" href="/sample_2/">
  <Image className="portfolio_image" src={preview5}  width={450} alt={"loading.."}/>
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
  <Text className="preview_text">Illegnodicasa</Text>
  <a target="_blank" rel="noreferrer" href="https://illegnodicasa.ch">
  <Image className="portfolio_image" src={preview2}  width={450} alt={"loading.."} />
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
  <Image className="portfolio_image" src={preview} width={450} alt={"loading.."} />
  </a>
  </Container>
  </GridItem>

  <GridItem align="center" >
  <Container>
  <Text className="preview_text" sx={{color:"black"}}>webcracy</Text>
  <a target="_blank" rel="noreferrer" href="https://webcracy.com">
  <Image className="portfolio_image" src={preview4} width={450} alt={"loading.."} />
  </a>
  </Container>
  </GridItem>

  </SimpleGrid>
  </Container>

  <Divider sx={{marginBottom:"100px", opacity:"0.5"}}/>

  <Container maxWidth={["100%","80%"]} marginBottom="100px">
  <Text as="h1" align="left" sx={{fontSize:["60px", "60px","100px", "100px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  Chi sono
  </Text>
  <Text as="h2" align="left" sx={{fontSize:["20px", "20px","30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  Informazioni su di me
  </Text>
  </Container>
  <Container maxWidth={["100%","100%","60%","60%"]}>
  <Text align="left" sx={{fontSize:"20px", fontFamily:"IBM Plex Sans"}}>
  Ciao, sono un programmatore con sede in Ticino, Svizzera. Ho una vasta esperienza nella programmazione e nello sviluppo web, che va dalla sicurezza informatica, fino allo sviluppo di interfaccie UI. Il mio obiettivo è quello di creare soluzioni su misura per le esigenze dei miei clienti, garantendo la massima qualità e il massimo livello di soddisfazione.
  </Text>
</Container>

  <Divider sx={{marginTop:"100px", marginBottom:"100px", opacity:"0.5"}}/>

  <Container maxWidth={["100%","80%"]} marginBottom="100px">
  <Text as="h1" align="left" sx={{fontSize:["60px", "60px","100px", "100px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  Cosa offro
  </Text>
  <Text as="h2" align="left" sx={{fontSize:["20px", "20px","30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  I miei servizi
  </Text>
  </Container>
  <Container maxWidth={["100%","100%","60%","60%"]}>
  <Text align="left" sx={{fontSize:"20px", fontFamily:"IBM Plex Sans"}}>
    <UnorderedList>
      <ListItem sx={{marginBottom:"10px"}}>Sviluppo di siti web personalizzati e reattivi per le esigenze del cliente, inclusi siti web statici e dinamici</ListItem>
      <ListItem sx={{marginBottom:"10px"}}>Creazione di siti web web3 basati sulla tecnologia blockchain e criptovalute, come Ethereum, con l&apos;utilizzo di Smart Contract con Solidity</ListItem>
      <ListItem sx={{marginBottom:"10px"}}>Creazione di NFT personalizzati per i clienti che desiderano vendere opere d&apos;arte, giochi o altri prodotti digitali</ListItem>
      <ListItem sx={{marginBottom:"10px"}}>Implementazione di pagamenti in criptovaluta e integrazione di portafogli digitali con i siti web, in modo da offrire una soluzione di pagamento universale per i clienti</ListItem>
      <ListItem sx={{marginBottom:"10px"}}>Creazione di siti web di e-commerce personalizzati, inclusi sistemi di pagamento fiat e crypto  </ListItem>

    </UnorderedList>
      </Text>


</Container>

  <Divider sx={{marginTop:"100px",marginBottom:"100px", opacity:"0.5"}}/>

  <Container maxWidth={["100%","80%"]} marginBottom="100px">
  <Text as="h1" align="left" sx={{fontSize:["50px", "50px","100px", "100px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  Competenze
  </Text>
  <Text as="h2" align="left" sx={{fontSize:["20px", "20px","30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  Le mie competenze come sviluppatore
  </Text>
  </Container>


  <Container className="bg_colored" sx={{padding:"5"}}>
  <Text as="h1" align="center" sx={{fontSize:["30px", "30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
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
  <Text as="h1" align="center" sx={{fontSize:["30px", "30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
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
  <Text as="h1" align="center" sx={{fontSize:["30px", "30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  sviluppo Blockchain e altro
  </Text>
  <List>
    <ListItem>Solidity</ListItem>
    <ListItem>Stripe</ListItem>
  </List>

  </Container>


	</Container>
	</>
  )
}