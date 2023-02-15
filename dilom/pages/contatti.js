import { Container, List, UnorderedList, ListItem, Divider,Text, Button, SimpleGrid, GridItem, Box } from '@chakra-ui/react'
import Image from "next/image";
import preview from "/public/preview.jpg"
import preview2 from "/public/preview2.jpg"
import preview3 from "/public/preview3.jpg"
import preview4 from "/public/preview4.jpg"

import Link from "next/link"
import { EmailIcon, PhoneIcon} from '@chakra-ui/icons'

import { useState } from "react"
export default function Contatti() {


  return (
  	<>
	<Container maxWidth="100%" align="center">
  <Container maxWidth={["100%","80%"]} marginBottom="100px">
  <Text align="left" sx={{fontSize:["70px", "70px","100px", "100px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  contatti
  </Text>
  <Text align="left" sx={{fontSize:["20px", "20px","30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
	chiedimi qualunque cosa
  </Text>
  </Container>


  <Container className="bg_colored" sx={{padding:"5"}}>

  <List>
    <ListItem><a href={"mailto: test@gmail.com"}>
          <Text align="center" sx={{marginBottom:"30px",fontSize:["30px", "30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
          <EmailIcon boxSize={10} color={"black"}/>: test@gmail.com
          </Text>
    </a></ListItem>
    <ListItem><a href={"mailto: test@gmail.com"}>
              <Text align="center" sx={{fontSize:["30px", "30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
          <PhoneIcon boxSize={10} color={"black"}/>: +41 78 123 11 22
          </Text>
          </a></ListItem>
  </List>
  </Container>
  <Divider sx={{marginBottom:"100px", opacity:"0.5"}}/>

  <Container maxWidth={["100%","80%"]} marginBottom="100px">
  <Text align="left" sx={{fontSize:["50px", "50px","80px", "80px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  lavoriamo insieme
  </Text>
  <Text align="left" sx={{fontSize:["20px", "20px","30px", "30px"],fontFamily:"IBM Plex Sans", fontWeight:"700"}}>
  hai qualche progetto in mente e vorresti svilupparlo con me?
  </Text>
  </Container>
  <Container maxWidth={["100%","100%","60%","60%"]}>
  <Text sx={{fontSize:"20px", fontFamily:"IBM Plex Sans"}}>
  Se stai lavorando su un progetto che ti appassiona e hai bisogno di supporto, non esitare a contattarmi. Sono sempre alla ricerca di collaborazioni con persone motivate e progetti stimolanti. Insieme possiamo dare vita a idee innovative e realizzare grandi cose.  </Text>
  </Container>


	</Container>
	</>
  )
}