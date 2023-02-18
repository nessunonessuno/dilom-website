import { Container, List, UnorderedList, ListItem, Divider,Text, Button, SimpleGrid, GridItem, Box } from '@chakra-ui/react'
import Image from "next/image";
import Link from "next/link"
import { EmailIcon, PhoneIcon} from '@chakra-ui/icons'

import { useState } from "react"
export default function Contatti() {


  return (
  	<>
	<Container maxWidth="100%" align="center">
  <Container maxWidth={["100%","80%"]} marginBottom="100px">
  <Text as="h1" align="left" sx={{fontSize:["70px", "70px","100px", "100px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  Contatti
  </Text>
  <Text as="h2" align="left" sx={{fontSize:["20px", "20px","30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
	Chiedimi qualunque cosa
  </Text>
  </Container>


  <Container className="bg_colored2" sx={{padding:"5"}}>

  <List>
    <ListItem><a href={"mailto: dilomtech@gmail.com"}>
          <EmailIcon boxSize={10} color={"black"}/>
          <Text align="center" sx={{marginBottom:"30px",fontSize:["24px", "27px", "28px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
          dilomtech@gmail.com
          </Text>
    </a></ListItem>
    <ListItem><a href={"tel: +41788071882"}>
          <PhoneIcon boxSize={10} color={"black"}/> 
          <Text align="center" sx={{fontSize:["24px", "27px", "28px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
          +41788071882
          </Text>
          </a></ListItem>
  </List>
  </Container>
  <Divider sx={{marginBottom:"100px", opacity:"0.5"}}/>

  <Container maxWidth={["100%","80%"]} marginBottom="100px">
  <Text as="h1" align="left" sx={{fontSize:["50px", "50px","80px", "80px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  Lavoriamo insieme
  </Text>
  <Text align="left" sx={{fontSize:["20px", "20px","30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  Hai qualche progetto in mente e vorresti svilupparlo con me?
  </Text>
  </Container>
  <Container maxWidth={["100%","100%","60%","60%"]}>
  <Text align="left" sx={{fontSize:"20px", fontFamily:"IBM Plex Sans"}}>
  Se sei un programmatore e stai lavorando su un progetto che ti appassiona, sentiti libero di contattarmi se hai bisogno di un aiuto. Sono sempre alla ricerca di collaborazioni con persone motivate e progetti stimolanti.
  </Text>
  </Container>


	</Container>
	</>
  )
}